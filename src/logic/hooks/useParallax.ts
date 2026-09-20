import { useEffect, useRef } from "react";
import useReducedMotion from "./useReducedMotion";

interface UseParallaxOptions {
  speed?: number;
  reverse?: boolean;
  clamp?: number;
  axis?: "x" | "y";
}

export default function useParallax<T extends HTMLElement = HTMLElement>({
  speed = 0.14,
  reverse = false,
  clamp = 42,
  axis = "y",
}: UseParallaxOptions = {}) {
  const ref = useRef<T>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const cssProperty = axis === "x" ? "--parallax-x" : "--parallax-y";

    if (reducedMotion) {
      element.style.setProperty(cssProperty, "0px");
      return;
    }

    let animationFrame = 0;

    const updateParallax = () => {
      animationFrame = 0;

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const progress =
        (viewportHeight - rect.top) / (viewportHeight + rect.height) - 0.5;
      const rawOffset = progress * rect.height * speed * (reverse ? -1 : 1);
      const offset = Math.max(-clamp, Math.min(clamp, rawOffset));

      element.style.setProperty(cssProperty, `${offset.toFixed(2)}px`);
    };

    const requestUpdate = () => {
      if (animationFrame !== 0) {
        return;
      }

      animationFrame = window.requestAnimationFrame(updateParallax);
    };

    requestUpdate();

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (animationFrame !== 0) {
        window.cancelAnimationFrame(animationFrame);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      element.style.setProperty(cssProperty, "0px");
    };
  }, [axis, clamp, reducedMotion, reverse, speed]);

  return ref;
}
