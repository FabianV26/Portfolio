import { useState, useEffect } from "react";

export function useFollowPointer(ref) {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const containerRect = ref.current.getBoundingClientRect();
      const x = event.clientX - containerRect.left-70;
      const y = event.clientY - containerRect.top-70;
      setPoint({ x, y });
    };

    if (ref.current) {
      ref.current.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [ref]);

  return point;
};

export default useFollowPointer;