import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (scrolled > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      if (totalHeight > 0) {
        setScrollProgress((scrolled / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      id="scroll-to-top-button"
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-40 p-3 rounded-none bg-[#161920] border border-white/10 text-white hover:border-[#0070FF] hover:text-[#0070FF] hover:scale-110 active:scale-95 transition-all outline-none duration-300 group cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.5)] animate-fade-in"
      title="Scroll to Top of Matrix"
    >
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
    </button>
  );
}
