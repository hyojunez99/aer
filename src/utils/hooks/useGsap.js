import { useLayoutEffect } from "react";
import gsap from "gsap";

const useGsap = (callback) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(callback);
    return () => ctx.revert();
  }, []);
};

export default useGsap;