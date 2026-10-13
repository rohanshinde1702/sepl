import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Monitor scroll position and calculate scroll percentage
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight > 0) {
        const progress = Math.min(
          100,
          Math.max(0, (currentScroll / scrollHeight) * 100)
        );
        setScrollProgress(progress);
      }

      // Show button after scrolling past 300px
      if (currentScroll > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SVG Progress Ring calculations
  const radius = 20;
  const circumference = 2 * Math.PI * radius; // ~125.66
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-5 sm:bottom-6 right-5 sm:right-6 z-40 transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top of page"
        className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-[#0E2A62] hover:bg-[#081a3d] text-[#F1C652] rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[#0E2A62]/40 focus:outline-none cursor-pointer"
      >
        {/* Circular Progress Ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
          viewBox="0 0 48 48"
        >
          {/* Subtle track background */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            className="stroke-slate-600/40"
            strokeWidth="2.5"
            fill="transparent"
          />
          {/* Active progress stroke in Gold */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            className="stroke-[#F1C652] transition-[stroke-dashoffset] duration-150"
            strokeWidth="2.5"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>

        {/* Up Arrow Icon with upward bounce hover effect */}
        <FaArrowUp className="text-sm sm:text-base text-[#F1C652] group-hover:-translate-y-1 transition-transform duration-200" />

        {/* Tooltip on hover for desktop */}
        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden sm:group-hover:flex items-center px-2 py-1 bg-[#0E2A62] text-white text-[11px] font-semibold rounded-md shadow-lg whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Scroll to Top
        </span>
      </button>
    </div>
  );
};

export default ScrollToTop;
