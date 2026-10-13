import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegCalendarCheck } from "react-icons/fa";
import { RxPeople } from "react-icons/rx";
import { LuBoxes } from "react-icons/lu";
import { GoShieldCheck } from "react-icons/go";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import AnimatedCounter from "../common/AnimatedCounter";

// Swiper CSS styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Hero_2 = () => {
  const slides = [
    {
      id: 1,
      image: "/images/hero/banner-2.png",
      eyebrow: "Subaash Electrical Private Limited",
      headline: (
        <>
          Powering Progress. <br className="hidden sm:inline" />
          Delivering <span className="text-[#F1C652]">Excellence.</span>
        </>
      ),
      description:
        "Electrical engineering & contracting solutions for a better, safer and more sustainable tomorrow.",
    },
    {
      id: 2,
      image: "/images/hero/banner-3.jpg",
      eyebrow: "Turnkey Substation & High-Voltage EPC",
      headline: (
        <>
          Building Resilient <br className="hidden sm:inline" />
          Power <span className="text-[#F1C652]">Infrastructure.</span>
        </>
      ),
      description:
        "High and extra-high voltage electrical substations executed with stringent quality controls and proven engineering precision.",
    },
    {
      id: 3,
      image: "/images/hero/banner-4.jpg",
      eyebrow: "Industrial Contracting & Electrification",
      headline: (
        <>
          Engineering Precision. <br className="hidden sm:inline" />
          Proven <span className="text-[#F1C652]">Performance.</span>
        </>
      ),
      description:
        "End-to-end industrial electrical solutions providing maximum uptime, efficiency, and robust power delivery nationwide.",
    },
    {
      id: 4,
      image: "/images/hero/banner-5.jpg",
      eyebrow: "Over 50 Years of Engineering Mastery",
      headline: (
        <>
          Transmission Networks <br className="hidden sm:inline" />
          That Fuel <span className="text-[#F1C652]">Growth.</span>
        </>
      ),
      description:
        "Connecting generation, transmission, and industrial consumers with state-of-the-art power engineering and unmatched safety.",
    },
  ];

  const stats = [
    {
      id: 1,
      icon: <FaRegCalendarCheck />,
      target: 50,
      suffix: "+",
      label: "Years of Experience",
    },
    {
      id: 2,
      icon: <RxPeople />,
      target: 150,
      suffix: "+",
      label: "Skilled Workforce",
    },
    {
      id: 3,
      icon: <LuBoxes />,
      target: 100,
      suffix: "+",
      label: "Major Projects",
    },
    {
      id: 4,
      icon: <GoShieldCheck />,
      target: 100,
      suffix: "%",
      label: "Commitment to Safety",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Banner Section with Swiper Slider */}
      <section className="relative w-full overflow-hidden group">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1000}
          loop={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: ".hero2-prev-btn",
            nextEl: ".hero2-next-btn",
          }}
          pagination={{
            clickable: true,
            el: ".hero2-custom-pagination",
          }}
          className="w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="relative w-full">
              <div className="relative w-full min-h-[520px] sm:min-h-[580px] md:min-h-[620px] lg:min-h-[660px] xl:min-h-[700px] flex items-center py-14 sm:py-20 md:py-24">
                {/* Background Image */}
                <img
                  src={slide.image}
                  alt="SEPL Engineering Hero"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />

                {/* Dark navy gradient overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#071738]/95 via-[#071738]/85 to-[#071738]/60 sm:to-[#071738]/30 lg:to-transparent pointer-events-none"></div>

                {/* Slide Text Content */}
                <div className="container relative z-10 w-full">
                  <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 justify-center max-w-3xl">
                    {/* Eyebrow */}
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-[3px] bg-[#F1C652] inline-block rounded-full"></span>
                      <h2 className="text-[#F1C652] text-xs sm:text-sm uppercase font-bold tracking-[2px] sm:tracking-[2.5px]">
                        {slide.eyebrow}
                      </h2>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold tracking-tight leading-[1.12]">
                      {slide.headline}
                    </h1>

                    {/* Subtitle Paragraph */}
                    <p className="w-full sm:w-11/12 md:w-4/5 lg:w-[85%] max-w-xl text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-normal">
                      {slide.description}
                    </p>

                    {/* Action Buttons: Explore Services & View Projects */}
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                      {/* Primary Gold CTA */}
                      <a
                        href="#services"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#F1C652] hover:bg-white text-[#0E2A62] py-3 sm:py-3.5 px-6 sm:px-7 rounded-md font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-md group/btn cursor-pointer"
                      >
                        <span>Explore Our Services</span>
                        <FaArrowRightLong className="group-hover/btn:translate-x-1.5 transition-transform duration-300 text-xs" />
                      </a>

                      {/* Secondary Ghost Button */}
                      <a
                        href="#projects"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/60 hover:border-white bg-transparent hover:bg-white/10 text-white py-3 sm:py-3.5 px-6 sm:px-7 rounded-md font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer"
                      >
                        <span>View Our Projects</span>
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
          className="hero2-prev-btn absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-[#F1C652] text-white hover:text-[#0E2A62] border border-white/20 backdrop-blur-xs flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer"
        >
          <FiChevronLeft className="text-xl sm:text-2xl" />
        </button>

        <button
          type="button"
          aria-label="Next Slide"
          className="hero2-next-btn absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/30 hover:bg-[#F1C652] text-white hover:text-[#0E2A62] border border-white/20 backdrop-blur-xs flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer"
        >
          <FiChevronRight className="text-xl sm:text-2xl" />
        </button>

        {/* Floating Custom Pagination Bullets */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="hero2-custom-pagination flex items-center gap-2"></div>
        </div>
      </section>

      {/* Integrated Stats Bar directly below Hero */}
      <div className="bg-[#061533] border-t border-white/10 w-full py-6 sm:py-8">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0">
            {stats.map((item, index) => (
              <div
                key={item.id}
                className={`flex items-center justify-start sm:justify-center gap-3.5 sm:gap-4 ${
                  index < 3 ? "lg:border-r lg:border-white/15 lg:pr-6" : ""
                } ${index > 0 ? "lg:pl-6" : ""}`}
              >
                {/* Gold Stat Icon */}
                <div className="text-3xl sm:text-4xl text-[#F1C652] shrink-0">
                  {item.icon}
                </div>

                {/* Stat Number & Label */}
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-tight">
                    <AnimatedCounter to={item.target} suffix={item.suffix} duration={2} />
                  </span>
                  <span className="text-xs sm:text-sm text-slate-300 font-medium leading-tight mt-0.5">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero_2;
