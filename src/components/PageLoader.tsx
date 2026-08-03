import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PageLoader() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true); // Start true on first load
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    setIsRendered(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => setIsRendered(false), 500); // Wait for CSS opacity transition
    }, 800);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!isRendered) return null;

  return (
    <div className="page-loader-overlay" style={{ opacity: isVisible ? 1 : 0 }}>
      <div className="spinner"></div>
    </div>
  );
}
