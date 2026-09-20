import { useEffect, useRef, useState } from "react";
import useReducedMotion from "./useReducedMotion";

interface UseRevealOptions {
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
}

export default function useReveal<T extends HTMLElement = HTMLElement>({
  once = true,
  threshold = 0.18,
  rootMargin = "0px 0px -12% 0px",
}: UseRevealOptions = {}) {
  const ref = useRef<T>(null);
  const reducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;

    if (!element || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(entry.target);
          }

          return;
        }

        if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [once, reducedMotion, rootMargin, threshold]);

  return { ref, isVisible };
}
