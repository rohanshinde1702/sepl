import { useState } from "react";
import { FaChevronRight, FaLinkedinIn, FaYoutube, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About us", href: "#about" },
    { name: "SEPL Advantages", href: "#advantages" },
    { name: "Services", href: "#services" },
    { name: "Careers", href: "#careers" },
  ];

  const usefulLinks = [
    { name: "Clients", href: "#clients" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Useful Applications", href: "#applications" },
    { name: "Contact Us", href: "#contact" },
    { name: "Sitemap", href: "#sitemap" },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-[#07193B] text-white w-full">
      {/* Main Footer Content */}
      <div className="container py-12 sm:py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8">
          {/* Column 1: Company Logo / Branding (lg: 4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <a href="/" className="inline-block">
              <img
                src="/images/logo/logo-white.png"
                alt="Subaash Electrical Private Limited Logo"
                className="h-14 sm:h-16 md:h-18 lg:h-18 w-auto object-contain"
              />
            </a>
          </div>

          {/* Column 2: Quick Links (lg: 2.5 cols) */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h3 className="text-white text-sm sm:text-base font-bold mb-3 sm:mb-4 tracking-wide">
              Quick Links
            </h3>
            <ul className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-xs sm:text-sm text-slate-300 hover:text-[#F1C652] transition-colors"
                  >
                    <FaChevronRight className="text-[10px] text-[#F1C652] opacity-80 group-hover:rotate-90 transition-transform" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Useful Links (lg: 2.5 cols) */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h3 className="text-white text-sm sm:text-base font-bold mb-3 sm:mb-4 tracking-wide">
              Useful Links
            </h3>
            <ul className="flex flex-col space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-xs sm:text-sm text-slate-300 hover:text-[#F1C652] transition-colors"
                  >
                    <FaChevronRight className="text-[10px] text-[#F1C652] opacity-80 group-hover:rotate-90 transition-transform" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter Signup (lg: 4 cols) */}
          <div className="lg:col-span-4 sm:col-span-2">
            <h3 className="text-white text-sm sm:text-base font-bold mb-2 tracking-wide">
              Newsletter Signup
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-3 font-normal">
              Enter your email to get our informative Newsletter
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-0 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address"
                required
                className="bg-white text-slate-800 text-xs sm:text-sm px-3.5 py-2.5 rounded sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-[#F1C652] flex-1"
              />
              <button
                type="submit"
                className="bg-[#F1C652] hover:bg-[#e2b744] text-[#0E2A62] font-bold text-xs sm:text-sm px-5 py-2.5 rounded sm:rounded-l-none uppercase tracking-wider transition-colors cursor-pointer shrink-0"
              >
                Submit
              </button>
            </form>

            {isSubscribed && (
              <p className="text-xs text-[#F1C652] mt-2 font-medium">
                Thank you for subscribing to our newsletter!
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="border-t border-white/10 bg-[#05132D]">
        <div className="container py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          {/* Copyright & Credits */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
            <span>Copyright &copy; 2026 SEPL All rights reserved.</span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span>Designed & Developed by <a className="hover:text-[#F1C652] transition-all duration-300" href="https://futurefacetech.in/">Future Face Tech</a></span>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-4 text-white">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#F1C652] transition-colors text-sm"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-[#F1C652] transition-colors text-sm"
            >
              <FaYoutube />
            </a>
            <a
              href="mailto:info@sepl.co.in"
              aria-label="Email Us"
              className="hover:text-[#F1C652] transition-colors text-sm"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
