"use client";

import { useCallback, useEffect, useState } from "react";
import { LuArrowUp } from "react-icons/lu";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
    // no need to include toggleVisibility in the dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fixed bottom-16 right-4 z-[500]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="border-primary-500 translate-y-1 animate-pulse rounded-full border bg-card p-4"
          aria-label="Scroll to top"
        >
          <LuArrowUp className="text-primary-500 h-8 w-8" />
        </button>
      )}
    </div>
  );
}
