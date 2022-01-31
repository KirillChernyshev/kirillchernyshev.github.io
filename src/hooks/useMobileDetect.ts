import { useEffect, useState } from "react";

/**
 * Detect if screen has a mobile resolution.
 * @param maxMobileWidth Max mobile width in px. Default value is 480px.
 */
export default function useMobileDetect(maxMobileWidth = 480) {
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