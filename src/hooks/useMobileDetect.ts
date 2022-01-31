import { useEffect, useState } from "react";

export default function useMobileDetect() {
  const [width, setWidth] = useState(() => window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => window.removeEventListener('resize', handleWindowSizeChange);
  }, []);

  return width <= 480;
}