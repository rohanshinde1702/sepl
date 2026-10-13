import { useEffect } from "react";
import { FaFilePdf, FaDownload, FaTimes, FaCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const BrochureModal = ({ isOpen, onClose }) => {
  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      // Prevent background scrolling when modal is open
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const brochureHighlights = [
    "Turnkey EPC Capabilities up to 220kV Substations",
    "Comprehensive Industrial & Process Plant Electrification",
    "Government Approved Class 'A' Electrical Contractor",
    "Commercial, Data Centers & High-Rise Infrastructure Portfolios",
    "30+ Years Track Record with India's Premier Industry Leaders",
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="brochure-modal-title"
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full p-5 sm:p-7 md:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-slate-100 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-slate-400 hover:text-[#0E2A62] p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <FaTimes className="text-base" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-3.5 sm:gap-4 mb-4 sm:mb-5">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#0E2A62] text-[#F1C652] flex items-center justify-center text-xl sm:text-2xl shrink-0 shadow-md">
            <FaFilePdf />
          </div>
          <div className="pr-6">
            <span className="text-[#F1C652] font-bold text-[10px] sm:text-xs uppercase tracking-wider bg-[#0E2A62] px-2 py-0.5 rounded-sm inline-block mb-1 sm:mb-1.5">
              Corporate Profile 2025–26
            </span>
            <h3
              id="brochure-modal-title"
              className="text-lg sm:text-2xl font-bold text-[#0E2A62] tracking-tight leading-snug"
            >
              SEPL Corporate Brochure
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">
              Subhash Electricals Private Limited — EPC Capabilities & Project Credentials
            </p>
          </div>
        </div>

        {/* Brochure Highlights Card */}
        <div className="bg-slate-50 rounded-xl p-3.5 sm:p-5 border border-slate-200/80 mb-5 sm:mb-6">
          <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0E2A62] mb-2.5 sm:mb-3">
            What&apos;s Inside The Brochure:
          </h4>
          <ul className="flex flex-col space-y-2 sm:space-y-2.5">
            {brochureHighlights.map((point, index) => (
              <li
                key={index}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug"
              >
                <FaCheckCircle className="text-[#F1C652] shrink-0 mt-0.5 text-xs" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3">
          {/* Primary Direct Download Button */}
          <a
            href="/brochure/SEPL-Corporate-Brochure.pdf"
            download="SEPL-Corporate-Brochure.pdf"
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-[#F1C652] hover:bg-[#0E2A62] text-[#0E2A62] hover:text-white font-bold text-xs sm:text-sm py-3 px-5 sm:px-6 rounded-lg transition-all duration-300 shadow-md group cursor-pointer"
          >
            <FaDownload className="text-xs group-hover:translate-y-0.5 transition-transform" />
            <span>Download Brochure</span>
          </a>

          {/* Secondary View Online Button */}
          <a
            href="/brochure/SEPL-Corporate-Brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-[#0E2A62] text-[#0E2A62] hover:bg-slate-50 font-semibold text-xs sm:text-sm py-3 px-4 sm:px-5 rounded-lg transition-colors cursor-pointer"
          >
            <span>View Online</span>
            <FaArrowRightLong className="text-xs" />
          </a>
        </div>

        {/* Footer Note */}
        <p className="text-[10px] sm:text-[11px] text-slate-400 text-center mt-3.5 sm:mt-4">
          Need hard copies or customized EPC RFP specifications? Reach us at{" "}
          <a
            href="mailto:info@sepl.co.in"
            className="text-[#0E2A62] hover:underline font-semibold"
          >
            info@sepl.co.in
          </a>
        </p>
      </div>
    </div>
  );
};

export default BrochureModal;
