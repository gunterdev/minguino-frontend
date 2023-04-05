import { useEffect, useRef, useState } from "react";

function useIntersectionObserver() {
    const [inView, setInView] = useState<boolean>(true);

    const ref = useRef(null);

    const handleIntersect : IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
            entry.isIntersecting ? setInView(true) : setInView(false);
        })
    }

    useEffect(() => {
      let currentRef = ref;
      const options : IntersectionObserverInit = {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      };
      const observer = new IntersectionObserver(handleIntersect, options);
      if (currentRef.current) observer.observe(currentRef.current);
      return () => {
        if (currentRef.current) observer.unobserve(currentRef.current);
      };
    }, [ref]);

    return {ref,inView};
  
}

export default useIntersectionObserver;
