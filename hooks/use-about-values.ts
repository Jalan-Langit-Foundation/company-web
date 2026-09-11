"use client";

import * as React from "react";

// State global tersinkronisasi antar komponen di sisi client tanpa dependensi eksternal
let isValuesExpanded = false;
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

  const getSnapshot = React.useCallback(() => isValuesExpanded, []);
  const getServerSnapshot = React.useCallback(() => false, []);

  const isExpanded = React.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  // Auto-expand jika URL hash memuat '#nilai-langit' saat dimuat pertama kali
  React.useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#nilai-langit") {
      setValuesExpanded(true);
    }
  }, []);

  return {
    isExpanded,
    toggle: toggleValuesExpanded,
    setExpanded: setValuesExpanded,
  };
}
