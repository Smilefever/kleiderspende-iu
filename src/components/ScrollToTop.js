import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrollt beim Seitenwechsel automatisch nach oben oder zum Anker
 function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Falls ein Hash in der URL ist, dorthin scrollen
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Kein Hash: ganz nach oben scrollen
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pathname, hash]);

  return null;
}


export default ScrollToTop;
