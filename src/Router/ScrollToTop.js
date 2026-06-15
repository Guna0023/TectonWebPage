import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Safely scroll to the top of the browser viewport
    // eslint-disable-next-line no-undef
    globalThis.scrollTo?.(0, 0);
  }, [pathname]);

  return null;
}
