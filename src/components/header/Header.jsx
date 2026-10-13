import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaPhoneAlt,
  FaLinkedinIn,
  FaSearch,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaFilePdf,
  FaDownload,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import BrochureModal from "../common/BrochureModal";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileHomeDropdownOpen, setMobileHomeDropdownOpen] = useState(true);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  const location = useLocation();

  const navLinks = [
    {
      name: "Home",
      href: "/",
      hasDropdown: true,
      subLinks: [
        { name: "Home 1", href: "/" },
        { name: "Home 2", href: "/home-2" },
      ],
    },
    { name: "Company", href: "#company", hasDropdown: true },
    { name: "Services", href: "#services", hasDropdown: true },
    { name: "Projects", href: "#projects", hasDropdown: true },
    { name: "Gallery", href: "#gallery", hasDropdown: false },
    { name: "Careers", href: "#careers", hasDropdown: false },
    { name: "Contact", href: "#contact", hasDropdown: false },
  ];

  // Check if current route is part of Home
  const isHomeActive =
    location.pathname === "/" ||
    location.pathname === "/home" ||
    location.pathname === "/home-1" ||
    location.pathname === "/home-2";

  return (
    <header className="w-full bg-white shadow-xs sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#0E2A62] text-white text-xs sm:text-sm">
        <div className="container flex justify-between items-center py-2">
          {/* Contact Details */}
          <div className="flex items-center gap-3 sm:gap-6">
            <a
              href="tel:+912223456789"
              className="flex items-center gap-1.5 hover:text-[#F1C652] transition-colors"
              title="Call us"
            >
              <FaPhoneAlt className="text-[#F1C652] text-xs shrink-0" />
              <span className="font-medium whitespace-nowrap">+91 22 2345 6789</span>
            </a>

            <span className="hidden sm:inline-block text-white/30">|</span>

            <a
              href="mailto:info@sepl.co.in"
              className="hidden sm:flex items-center gap-1.5 hover:text-[#F1C652] transition-colors"
              title="Email us"
            >
              <IoMdMail className="text-[#F1C652] text-sm shrink-0" />
              <span className="font-medium whitespace-nowrap">info@sepl.co.in</span>
            </a>
          </div>

          {/* Social, E-Brochure & Search */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
            {/* Quick E-Brochure Link on Top Bar for desktop & tablets */}
            <button
              type="button"
              onClick={() => setIsBrochureOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-[#F1C652] transition-colors cursor-pointer text-xs font-semibold"
              title="SEPL Corporate Brochure"
            >
              <FaFilePdf className="text-red-400 text-xs shrink-0" />
              <span className="whitespace-nowrap">E-Brochure</span>
            </button>

            <span className="hidden sm:inline-block text-white/30">|</span>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#F1C652] transition-colors"
              title="Follow us on LinkedIn"
            >
              <span className="bg-white/10 p-1 rounded-sm hover:bg-[#F1C652] hover:text-[#0E2A62] transition-colors">
                <FaLinkedinIn className="text-xs" />
              </span>
              <span className="hidden md:inline font-medium">Follow us</span>
            </a>

            <span className="text-white/30">|</span>

            {/* Desktop / Tablet Search Trigger */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsSearchOpen((prev) => !prev)}
                className="hover:text-[#F1C652] transition-colors p-1 flex items-center justify-center cursor-pointer"
                aria-label="Search"
                title="Search"
              >
                <FaSearch className="text-xs" />
              </button>

              {/* Collapsible Search Popup */}
              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white p-2 rounded shadow-xl border border-slate-200 z-50">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Search website..."
                      autoFocus
                      className="w-full text-xs text-slate-800 px-3 py-1.5 border border-slate-300 rounded focus:outline-none focus:border-[#0E2A62]"
                    />
                    <button
                      type="button"
                      className="bg-[#0E2A62] text-white p-1.5 rounded hover:bg-[#091b40]"
                    >
                      <FaSearch className="text-xs" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white">
        <div className="container flex justify-between items-center">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center h-15 md:h-18 lg:h-24 shrink-0">
            <img
              className="h-full w-auto object-contain"
              src="/images/logo/logo.png"
              alt="Subhash Electricals Logo"
            />
          </Link>

          {/* Desktop Navigation Links + Brochure CTA (>= lg: 1024px) */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            <nav>
              <ul className="flex items-center gap-4 xl:gap-7 uppercase font-bold text-xs xl:text-sm text-[#0E2A62] tracking-wider">
                {navLinks.map((link) => {
                  const isActive = link.name === "Home" && isHomeActive;

                  return (
                    <li key={link.name} className="relative group py-6">
                      {/* If link has sub-pages (Home 1, Home 2) */}
                      {link.subLinks ? (
                        <>
                          <div
                            className={`flex items-center gap-1.5 cursor-pointer transition-colors duration-200 ${
                              isActive ? "text-[#F1C652]" : "hover:text-[#F1C652]"
                            }`}
                          >
                            <span>{link.name}</span>
                            <FaChevronDown className="text-[10px] opacity-75 group-hover:rotate-180 transition-transform duration-200" />
                          </div>

                          {/* Dropdown Menu for Home Variations */}
                          <div className="absolute top-full left-0 w-44 bg-white border border-slate-100 rounded-lg shadow-xl py-2 hidden group-hover:block transition-all z-50">
                            {link.subLinks.map((sub) => {
                              const isSubActive =
                                (sub.href === "/" &&
                                  (location.pathname === "/" ||
                                    location.pathname === "/home" ||
                                    location.pathname === "/home-1")) ||
                                sub.href === location.pathname;

                              return (
                                <Link
                                  key={sub.name}
                                  to={sub.href}
                                  className={`flex items-center justify-between px-4 py-2.5 text-xs font-bold tracking-wider hover:bg-slate-50 transition-colors ${
                                    isSubActive
                                      ? "text-[#F1C652] bg-slate-50/80"
                                      : "text-[#0E2A62] hover:text-[#F1C652]"
                                  }`}
                                >
                                  <span>{sub.name}</span>
                                  {isSubActive && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#F1C652]"></span>
                                  )}
                                </Link>
                              );
                            })}
                          </div>
                        </>
                      ) : (
                        <a
                          href={link.href}
                          className={`flex items-center gap-1 transition-colors duration-200 ${
                            link.active ? "text-[#F1C652]" : "hover:text-[#F1C652]"
                          }`}
                        >
                          <span>{link.name}</span>
                          {link.hasDropdown && (
                            <FaChevronDown className="text-[10px] opacity-75 group-hover:rotate-180 transition-transform duration-200" />
                          )}
                        </a>
                      )}

                      {/* Active Indicator Underline */}
                      {isActive && (
                        <span className="absolute bottom-4 left-0 w-full h-[2.5px] bg-[#F1C652] rounded-full"></span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Desktop Header Brochure CTA Button */}
            <button
              type="button"
              onClick={() => setIsBrochureOpen(true)}
              className="group inline-flex items-center gap-2 bg-[#F1C652] hover:bg-[#0E2A62] text-[#0E2A62] hover:text-white font-bold text-xs xl:text-sm px-3.5 xl:px-4.5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border border-[#F1C652] shrink-0"
              aria-label="Download SEPL Brochure"
            >
              <FaFilePdf className="text-red-600 group-hover:text-[#F1C652] text-sm shrink-0 transition-colors" />
              <span className="whitespace-nowrap">SEPL Brochure</span>
              <FaDownload className="text-[11px] group-hover:translate-y-0.5 transition-transform shrink-0" />
            </button>
          </div>

          {/* Mobile / Tablet Controls (< 1024px): Quick Brochure Button + Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 lg:hidden py-3">
            {/* Responsive Brochure Button in Header for Mobile & Tablet */}
            <button
              type="button"
              onClick={() => setIsBrochureOpen(true)}
              className="inline-flex items-center gap-1.5 bg-[#F1C652] hover:bg-[#e2b740] active:scale-95 text-[#0E2A62] font-bold text-xs px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg shadow-xs transition-all cursor-pointer shrink-0"
              aria-label="Download SEPL Brochure"
            >
              <FaFilePdf className="text-red-600 text-xs shrink-0" />
              <span className="whitespace-nowrap text-xs font-bold tracking-tight">
                Brochure
              </span>
              <FaDownload className="text-[10px] shrink-0" />
            </button>

            {/* Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="p-2 text-[#0E2A62] hover:text-[#F1C652] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer / Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white shadow-xl animate-fadeIn">
          <div className="container py-4 space-y-4">
            {/* Mobile Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full text-sm text-slate-800 pl-3 pr-10 py-2 border border-slate-300 rounded focus:outline-none focus:border-[#0E2A62]"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-[#0E2A62]"
              >
                <FaSearch />
              </button>
            </div>

            {/* Prominent Brochure Download CTA inside Mobile Menu */}
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsBrochureOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2.5 bg-[#0E2A62] hover:bg-[#07193f] active:scale-[0.99] text-[#F1C652] py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer border border-[#F1C652]/30"
            >
              <FaFilePdf className="text-red-500 text-sm shrink-0" />
              <span>Download SEPL Corporate Brochure</span>
              <FaDownload className="text-xs shrink-0" />
            </button>

            {/* Mobile Menu Links */}
            <nav>
              <ul className="flex flex-col divide-y divide-slate-100">
                {navLinks.map((link) => {
                  const isActive = link.name === "Home" && isHomeActive;

                  if (link.subLinks) {
                    return (
                      <li key={link.name} className="py-2">
                        <div
                          onClick={() => setMobileHomeDropdownOpen((prev) => !prev)}
                          className={`flex justify-between items-center py-2 text-sm uppercase font-bold tracking-wider cursor-pointer ${
                            isActive ? "text-[#F1C652]" : "text-[#0E2A62]"
                          }`}
                        >
                          <span>{link.name}</span>
                          <FaChevronDown
                            className={`text-xs transition-transform duration-200 ${
                              mobileHomeDropdownOpen ? "rotate-180 text-[#F1C652]" : "text-slate-400"
                            }`}
                          />
                        </div>

                        {/* Mobile Sublinks for Home 1 and Home 2 */}
                        {mobileHomeDropdownOpen && (
                          <div className="pl-4 pb-2 pt-1 flex flex-col space-y-2 border-l-2 border-[#F1C652] ml-1 my-1">
                            {link.subLinks.map((sub) => {
                              const isSubActive =
                                (sub.href === "/" &&
                                  (location.pathname === "/" ||
                                    location.pathname === "/home" ||
                                    location.pathname === "/home-1")) ||
                                sub.href === location.pathname;

                              return (
                                <Link
                                  key={sub.name}
                                  to={sub.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className={`text-sm font-semibold uppercase tracking-wider py-1 transition-colors ${
                                    isSubActive
                                      ? "text-[#F1C652] font-bold"
                                      : "text-[#0E2A62] hover:text-[#F1C652]"
                                  }`}
                                >
                                  {sub.name}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </li>
                    );
                  }

                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex justify-between items-center py-3 text-sm uppercase font-bold tracking-wider text-[#0E2A62] hover:text-[#F1C652] hover:pl-1 transition-all"
                      >
                        <span>{link.name}</span>
                        {link.hasDropdown && (
                          <FaChevronDown className="text-xs text-slate-400" />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Mobile Quick Contact Details */}
            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2 text-xs text-slate-600">
              <a
                href="mailto:info@sepl.co.in"
                className="flex items-center gap-2 hover:text-[#0E2A62]"
              >
                <IoMdMail className="text-[#F1C652] text-sm shrink-0" />
                <span>info@sepl.co.in</span>
              </a>
              <a
                href="tel:+912223456789"
                className="flex items-center gap-2 hover:text-[#0E2A62]"
              >
                <FaPhoneAlt className="text-[#F1C652] text-xs shrink-0" />
                <span>+91 22 2345 6789</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Brochure Modal Dialog */}
      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />
    </header>
  );
};

export default Header;