import { useLayoutEffect } from "react";
import gsap from "gsap";

const useGsap = (callback, scopeRef, deps = []) => {
  useLayoutEffect(() => {
    if (!scopeRef?.current) return;

    const ctx = gsap.context(callback, scopeRef);

    return () => ctx.revert();
  }, deps);
};

export default useGsap;