import { createEffect, createSignal } from "solid-js";

const useIntersection = (ref) => {
  const [isVisible, setIsVisible] = createSignal(false);

  createEffect(() => {
    if (ref()) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(ref());
          }
        });
      });
      observer.observe(ref());
    }
  }, [ref()])
  return isVisible;
}

export default useIntersection;
