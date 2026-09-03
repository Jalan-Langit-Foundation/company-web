import * as React from "react";

export function useHorizontalScroll() {
  const scrollRef = React.useRef<HTMLDivElement | null>(null);

  const scroll = React.useCallback((direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount =
        direction === "left"
          ? -scrollRef.current.offsetWidth
          : scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }, []);

  return {
    scrollRef,
    scroll,
  };
}
