import { useEffect, useState } from "react";

/**
 * useDimension
 * @return {number} 0: Mobile, 1: Tablet, 2: PC
 */
function useDimension(): number {
  const [dim, setDim] = useState(() => {
    if (window.innerWidth <= 640) return 0;
    else if (window.innerWidth <= 832) return 1;
    else return 2;
  });

  useEffect(() => {
    const eventHandler = () => {
      if (window.innerWidth <= 640) setDim(0);
      else if (window.innerWidth <= 832) setDim(1);
      else setDim(2);
    };

    window.addEventListener("resize", eventHandler);
    return () => window.removeEventListener("resize", eventHandler);
  }, []);

  return dim;
}

export default useDimension;
