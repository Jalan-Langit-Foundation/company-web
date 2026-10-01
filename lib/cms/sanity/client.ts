import { sanityConfig, isSanityConfigured } from "./config";

export interface SanityFetchOptions {
  query: string;
  params?: Record<string, string | number | boolean>;
  tags?: string[];
  revalidate?: number | false;
}

interface SanityQueryResponse<T> {
  result: T;
  ms?: number;
  query?: string;
}

/**
 * Lightweight & Native Sanity Fetcher (Zero-Dependency)
 *
 * Mengakses langsung HTTP API Sanity Cloud:
 * https://<projectId>.api.sanity.io/v<apiVersion>/data/query/<dataset>?query=...
 *
 * Menggunakan fitur bawaan Next.js Fetch Cache & On-Demand Revalidation Tags.
 */
export async function sanityFetch<T>({
  query,
  params = {},
  tags = ["news"],
  revalidate = 60,
}: SanityFetchOptions): Promise<T | null> {
  if (!isSanityConfigured) {
    return null;
  }

  const { projectId, dataset, apiVersion, useCdn, token } = sanityConfig;

  // Tentukan host (apicdn untuk cached public query, api untuk draft/token)
  const host = useCdn && !token ? `${projectId}.apicdn.sanity.io` : `${projectId}.api.sanity.io`;
  const endpoint = new URL(`https://${host}/v${apiVersion}/data/query/${dataset}`);

  endpoint.searchParams.set("query", query);

  // Serialisasi parameter GROQ ($id, $limit, dll)
  Object.entries(params).forEach(([key, value]) => {
    endpoint.searchParams.set(`$${key}`, JSON.stringify(value));
  });

  const headers: HeadersInit = {
    Accept: "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(endpoint.toString(), {
    method: "GET",
    headers,
    next: {
      tags,
      revalidate,
    },
  });

  if (!response.ok) {
    throw new Error(
      `[Sanity API Error] HTTP ${response.status} (${response.statusText}) saat mengeksekusi query: ${query}`
    );
  }

  const data: SanityQueryResponse<T> = await response.json();
  return data.result;
}
