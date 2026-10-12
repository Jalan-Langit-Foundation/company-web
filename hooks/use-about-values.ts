"use client";

import * as React from "react";

// State global tersinkronisasi antar komponen di sisi client tanpa dependensi eksternal
let isValuesExpanded = false;
// Keep the first client render identical to the server render. This matters
// when navigating back to the page while the module-level state is already open.
let hasHydrated = false;
const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((listener) => listener());
}

export function setValuesExpanded(value: boolean) {
  if (isValuesExpanded !== value) {
    isValuesExpanded = value;
    notify();
  }
}

export function toggleValuesExpanded() {
  isValuesExpanded = !isValuesExpanded;
  notify();
}

export function useAboutValues() {
  const subscribe = React.useCallback((callback: () => void) => {
    listeners.add(callback);
    return () => {
      listeners.delete(callback);
    };
  }, []);

  const getSnapshot = React.useCallback(
    () => (hasHydrated ? isValuesExpanded : false),
    []
  );
  const getServerSnapshot = React.useCallback(() => false, []);

  const isExpanded = React.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  // Auto-expand jika URL hash memuat '#nilai-langit' atau '#visi-misi' saat dimuat pertama kali atau berpindah hash
  React.useEffect(() => {
    hasHydrated = true;
    notify();

    const checkHash = () => {
      if (
        typeof window !== "undefined" &&
        (window.location.hash === "#nilai-langit" || window.location.hash === "#visi-misi")
      ) {
        setValuesExpanded(true);
      }
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  return {
    isExpanded,
    toggle: toggleValuesExpanded,
    setExpanded: setValuesExpanded,
  };
}
