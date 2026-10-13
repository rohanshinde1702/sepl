import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Swiper CSS styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: "/images/hero/banner-1.png",
      eyebrow: "Powering a brighter tomorrow",
      headline: (
        <>
          Reliable Electrical <br className="hidden sm:inline" />
          EPC Solutions
        </>
      ),
      pillars: ["Design", "Engineering", "Procurement", "Construction"],
      description:
        "SEPL has been delivering high-quality electrical solutions since 1972, building trust through expertise, innovation and commitment.",
      ctaText: "Explore Our Services",
      ctaHref: "#services",
    },
    {
      id: 2,
      image: "/images/hero/banner-3.jpg",
      eyebrow: "High-Voltage Engineering & Substation EPC",
      headline: (
        <>
          Empowering Modern <br className="hidden sm:inline" />
          Infrastructure
        </>
      ),
      pillars: ["Substations", "Switchyards", "EHV Cabling", "Commissioning"],
      description:
        "Turnkey electrical solutions for high-voltage substations, transmission networks, and industrial complexes engineered with precision and safety.",
      ctaText: "Explore Our Services",
      ctaHref: "#services",
    },
    {
      id: 3,
      image: "/images/hero/banner-4.jpg",
      eyebrow: "Industrial Electrification & Automation",
      headline: (
        <>
          Engineered for <br className="hidden sm:inline" />
          Unmatched Reliability
        </>
      ),
      pillars: ["Process Plants", "Panels", "Heavy Industry", "Grid Integration"],
      description:
        "End-to-end industrial electrical contracts providing superior performance, safety, and seamless energy flow for manufacturing leaders.",
      ctaText: "Explore Our Services",
      ctaHref: "#services",
    },
    {
      id: 4,
      image: "/images/hero/banner-5.jpg",
      eyebrow: "Power Transmission & Distribution",
      headline: (
        <>
          Connecting Grids. <br className="hidden sm:inline" />
          Powering Industries.
        </>
      ),
      pillars: ["Transmission Lines", "Substations", "Renewables", "EPC Contracts"],
      description:
        "Over five decades of excellence in high-voltage power transmission networks, linking critical energy grids to industrial hubs.",
      ctaText: "Explore Our Services",
      ctaHref: "#services",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        navigation={{
          prevEl: ".hero-prev-btn",
          nextEl: ".hero-next-btn",
        }}
        pagination={{
          clickable: true,
          el: ".hero-custom-pagination",
        }}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full">
            <div className="relative w-full min-h-[520px] sm:min-h-[580px] md:min-h-[640px] lg:min-h-[680px] xl:min-h-[720px] flex items-center py-14 sm:py-20 md:py-24">
              {/* Background Image */}
              <img
                src={slide.image}
                alt="SEPL Electrical Engineering Project"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />

              {/* Dark Gradient Overlay for Maximum Readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#07193F]/95 via-[#0A2255]/75 to-[#0A2255]/40 lg:to-transparent pointer-events-none"></div>

              {/* Slide Content */}
              <div className="container relative z-10 w-full">
                <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 justify-center max-w-3xl">
                  {/* Eyebrow Subheading */}
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-[3px] bg-[#F1C652] inline-block rounded-full"></span>
                    <h2 className="text-[#F1C652] text-xs sm:text-sm md:text-base uppercase font-bold tracking-[1.5px] sm:tracking-[2.5px]">
                      {slide.eyebrow}
                    </h2>
                  </div>

                  {/* Main Headline */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold tracking-tight leading-[1.15]">
                    {slide.headline}
                  </h1>

                  {/* Core EPC Pillars */}
                  <div className="flex flex-wrap items-center gap-x-2 sm:gap-x-3.5 gap-y-1 text-xs sm:text-sm md:text-base lg:text-lg text-white font-semibold">
                    {slide.pillars.map((pillar, idx) => (
                      <span key={pillar} className="flex items-center gap-2 sm:gap-3.5">
                        <span>{pillar}</span>
                        {idx < slide.pillars.length - 1 && (
                          <span className="text-[#F1C652] font-light">|</span>
                        )}
                      </span>
                    ))}
                  </div>

                  {/* Description Paragraph */}
                  <p className="w-full sm:w-11/12 md:w-4/5 lg:w-full max-w-xl text-sm sm:text-base md:text-lg text-white/90 leading-relaxed font-normal">
                    {slide.description}
                  </p>

                  {/* Call to Action Button */}
                  <div className="pt-2">
                    <a
                      href={slide.ctaHref}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 sm:gap-4 bg-[#F1C652] text-[#0E2A62] text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider px-6 sm:px-8 py-3 sm:py-3.5 rounded border-2 border-[#F1C652] hover:bg-transparent hover:text-white transition-all duration-300 shadow-md group/btn cursor-pointer"
                    >
                      <span>{slide.ctaText}</span>
                      <FaArrowRightLong className="text-[#0E2A62] group-hover/btn:text-white group-hover/btn:translate-x-1.5 transition-all duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Floating Navigation Controls (Glassmorphic Arrows) */}
      <button
        type="button"
        aria-label="Previous Slide"
        className="hero-prev-btn absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-[#F1C652] text-white hover:text-[#0E2A62] border border-white/20 backdrop-blur-xs flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer"
      >
        <FiChevronLeft className="text-xl sm:text-2xl" />
      </button>

      <button
        type="button"
        aria-label="Next Slide"
        className="hero-next-btn absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-[#F1C652] text-white hover:text-[#0E2A62] border border-white/20 backdrop-blur-xs flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer"
      >
        <FiChevronRight className="text-xl sm:text-2xl" />
      </button>

      {/* Floating Custom Pagination Bullets */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="hero-custom-pagination flex items-center gap-2"></div>
      </div>
    </section>
  );
};

export default Hero;