import { NextRequest, NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";

type RevalidationPayload = {
  slug?: string | { current?: string };
};

function isRevalidationPayload(value: unknown): value is RevalidationPayload {
  return typeof value === "object" && value !== null && "slug" in value;
}

/**
 * Webhook Endpoint untuk On-Demand Revalidation (ISR)
 * Dipicu secara otomatis oleh Sanity Webhook ketika konten diterbitkan / diperbarui.
 *
 * Header:
 * - Authorization: Bearer <SANITY_REVALIDATE_SECRET>
 * Atau Query Parameter:
 * - ?secret=<SANITY_REVALIDATE_SECRET>
 */
export async function POST(request: NextRequest) {
  try {
    const secret = process.env.SANITY_REVALIDATE_SECRET;
    const url = new URL(request.url);
    const querySecret = url.searchParams.get("secret");

    const authHeader = request.headers.get("authorization");
    const bearerSecret = authHeader?.startsWith("Bearer ")
      ? authHeader.substring(7)
      : null;

    const providedSecret = bearerSecret || querySecret;

    // Validasi token keamanan
    if (secret && (!providedSecret || providedSecret !== secret)) {
      return NextResponse.json(
        { message: "Invalid revalidation secret token" },
        { status: 401 }
      );
    }

    // Ambil payload webhook jika ada
    let body: unknown = null;
    try {
      body = await request.json();
    } catch {
      // Body opsional jika hanya memicu manual refresh
    }

    const payload = isRevalidationPayload(body) ? body : null;
    const slug =
      typeof payload?.slug === "string" ? payload.slug : payload?.slug?.current || null;

    // 1. Revalidasi cache data tag "news"
    revalidateTag("news", "max");
    if (slug) {
      revalidateTag(`news-${slug}`, "max");
    }

    // 2. Revalidasi halaman frontend
    revalidatePath("/", "page");
    revalidatePath("/news/[id]", "page");

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      slug,
      message: "Cache berita berhasil direvalidasi secara on-demand.",
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { message: "Gagal merevalidasi cache", error: message },
      { status: 500 }
    );
  }
}
