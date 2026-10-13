import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa6";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaChevronDown, FaTimes, FaExpandAlt } from "react-icons/fa";

// Swiper CSS styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    quote:
      "We at Talati and Panthaky Associates have been working with Subhash Electricals for over 20 years and have had a longstanding professional and personal relationship with them. They are our primary electrical contractors by choice and over the years we have successfully worked on countless projects together. They have always been on the cutting edge of technology, always keeping up with new trends and keeping us designers in the loop… And they have always had the best understanding of the requirement of our clients, integrating our designs to suit not only their needs but also the difficult Mumbai climate, while working out the electrical solutions in tandem with us. We are happy to have this relationship with them and wish them the best for all their future ventures!",
    author: "Ria Talati",
    role: "Director, Talati & Panthaky associated Pvt Ltd",
  },
  {
    id: 2,
    quote:
      "Your team has completed the project successfully and shown a high level of professionalism and involvement in the project. It's a real achievement when the staff does this in the absence of the team leader. It's a pleasure working with SEPL.",
    author: "Ujwala Kumthekar",
    role: "Architect",
  },
  {
    id: 3,
    quote:
      "The team at SEPL has shown an exceptional performance in their execution. Raising the standards in accuracy and precision along with efficiency and top-notch quality in their work.",
    author: "",
    role: "",
  },
  {
    id: 4,
    quote:
      "SEPL has delivered its promise beyond our expectations. The way they go about every step of the project, right from the planning, to the organizing and the coordination to the execution. This experience has been just wonderful.",
    author: "",
    role: "",
  },
  {
    id: 5,
    quote:
      "SEPL is one of those very few companies, who have strong virtues and business ethics. With a team of professionals, they make sure their final execution is state-of-the-art.",
    author: "",
    role: "",
  },
];

const Testimonial_2 = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [modalItem, setModalItem] = useState(null);
  const swiperRef = useRef(null);
  const containerRef = useRef(null);

  const handleToggle = (id, targetBtn) => {
    const card = targetBtn ? targetBtn.closest(".testimonial2-card") : null;
    if (card) {
      const quoteText = card.querySelector(".testimonial2-quote-text");
      const btnText = targetBtn.querySelector(".btn-text");
      const btnIcon = targetBtn.querySelector(".btn-icon");

      if (quoteText) {
        const isClamped = quoteText.classList.contains("line-clamp-4");
        if (isClamped) {
          quoteText.classList.remove("line-clamp-4");
          if (btnText) btnText.textContent = "Read Less";
          if (btnIcon) btnIcon.classList.add("rotate-180");
          setExpandedId(id);
        } else {
          quoteText.classList.add("line-clamp-4");
          if (btnText) btnText.textContent = "Read More";
          if (btnIcon) btnIcon.classList.remove("rotate-180");
          setExpandedId(null);
        }
      }
    } else {
      setExpandedId((prev) => (prev === id ? null : id));
    }

    if (swiperRef.current) {
      setTimeout(() => {
        swiperRef.current?.update();
      }, 50);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleContainerClick = (e) => {
      const btn = e.target.closest("[data-read-more-btn]");
      if (btn) {
        e.preventDefault();
        e.stopPropagation();
        const id = Number(btn.getAttribute("data-testimonial-id"));
        handleToggle(id, btn);
        return;
      }

      const modalBtn = e.target.closest("[data-modal-btn]");
      if (modalBtn) {
        e.preventDefault();
        e.stopPropagation();
        const id = Number(modalBtn.getAttribute("data-testimonial-id"));
        const item = testimonials.find((t) => t.id === id);
        if (item) setModalItem(item);
      }
    };

    container.addEventListener("click", handleContainerClick);
    return () => {
      container.removeEventListener("click", handleContainerClick);
    };
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white w-full overflow-hidden relative">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-2 mb-8 sm:mb-10 lg:mb-12"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-[3px] bg-[#F1C652] inline-block rounded-full"></span>
            <h2 className="text-[#0E2A62] text-xs sm:text-sm font-bold uppercase tracking-[2px]">
              What Our Clients Say
            </h2>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#0E2A62] font-bold tracking-tight leading-tight">
            Trusted by Industry Leaders
          </h1>
        </motion.div>

        {/* 2-Column Layout: Left Testimonial Card Slider & Right Decorative Image */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 xl:gap-16">
          {/* Left Column: Testimonial Card with Swiper */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[58%] xl:w-[60%] min-w-0"
          >
            <div
              ref={containerRef}
              className="bg-[#F5F8FC] rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-100 shadow-xs relative"
            >
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                preventClicks={false}
                preventClicksPropagation={false}
                touchStartPreventDefault={false}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                loop={true}
                autoplay={
                  expandedId || modalItem
                    ? false
                    : {
                        delay: 4500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                      }
                }
                pagination={{
                  clickable: true,
                  el: ".testimonial2-custom-pagination",
                  bulletClass: "testimonial2-bullet",
                  bulletActiveClass: "testimonial2-bullet-active",
                }}
                navigation={{
                  prevEl: ".testimonial2-prev-btn",
                  nextEl: ".testimonial2-next-btn",
                }}
                className="w-full"
              >
                {testimonials.map((item, index) => {
                  const isLong = item.quote.length > 250;
                  const isExpanded = expandedId === item.id;

                  return (
                    <SwiperSlide
                      key={`${item.id}-${index}`}
                      className="!h-auto flex flex-col"
                    >
                      <div className="testimonial2-card flex items-start gap-4 sm:gap-6 flex-1 min-h-[240px] sm:min-h-[250px] lg:min-h-[260px] flex-col sm:flex-row justify-between h-full">
                        {/* Left: Navy Circle Quote Mark & Optional Modal Button */}
                        <div className="flex sm:flex-col items-center justify-between sm:justify-start gap-3 w-full sm:w-auto shrink-0">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0E2A62] text-white flex items-center justify-center shadow-md">
                            <FaQuoteLeft className="text-sm sm:text-base text-white" />
                          </div>

                          {isLong && (
                            <button
                              type="button"
                              data-modal-btn
                              data-testimonial-id={item.id}
                              onClick={(e) => {
                                e.stopPropagation();
                                setModalItem(item);
                              }}
                              title="Read full testimonial in popup"
                              className="swiper-no-swiping text-slate-400 hover:text-[#0E2A62] p-1.5 rounded-lg hover:bg-slate-200/60 transition-colors cursor-pointer"
                            >
                              <FaExpandAlt className="text-xs" />
                            </button>
                          )}
                        </div>

                        {/* Right: Quote Content & Author */}
                        <div className="flex flex-col justify-between flex-1 w-full min-h-[200px] sm:min-h-[210px] lg:min-h-[220px]">
                          {/* Quote Text */}
                          <div className="min-h-[110px] sm:min-h-[120px] flex flex-col justify-between">
                            <p
                              className={`testimonial2-quote-text text-slate-700 text-sm sm:text-base leading-relaxed font-normal transition-all duration-300 ${
                                isLong && !isExpanded ? "line-clamp-4" : ""
                              }`}
                            >
                              &ldquo;{item.quote}&rdquo;
                            </p>

                            {isLong && (
                              <button
                                type="button"
                                data-read-more-btn
                                data-testimonial-id={item.id}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleToggle(item.id, e.currentTarget);
                                }}
                                className="swiper-no-swiping mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#0E2A62] hover:text-[#F1C652] transition-colors cursor-pointer group/btn relative z-10 self-start"
                              >
                                <span className="btn-text">
                                  {isExpanded ? "Read Less" : "Read More"}
                                </span>
                                <FaChevronDown
                                  className={`btn-icon text-[10px] transition-transform duration-200 ${
                                    isExpanded
                                      ? "rotate-180"
                                      : "group-hover/btn:translate-y-0.5"
                                  }`}
                                />
                              </button>
                            )}
                          </div>

                          {/* Author Info */}
                          <div className="mt-auto pt-3 border-t border-slate-200/60 flex flex-col justify-center min-h-[52px] sm:min-h-[56px] shrink-0">
                            <h4 className="text-[#0E2A62] font-bold text-sm sm:text-base">
                              {item.author || "Client Testimonial"}
                            </h4>
                            <p className="text-slate-500 text-xs sm:text-sm font-medium mt-0.5 line-clamp-1">
                              {item.role || "SEPL Valued Client"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              {/* Bottom Controls Row: Navigation Arrows inside Card (bottom-right) */}
              <div className="flex items-center justify-end gap-2.5 mt-4 sm:mt-2">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  className="testimonial2-prev-btn w-8 h-8 rounded-full border border-slate-300 hover:border-[#0E2A62] flex items-center justify-center text-[#0E2A62] hover:bg-[#0E2A62] hover:text-white transition-all cursor-pointer"
                >
                  <FiChevronLeft className="text-base" />
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  className="testimonial2-next-btn w-8 h-8 rounded-full border border-slate-300 hover:border-[#0E2A62] flex items-center justify-center text-[#0E2A62] hover:bg-[#0E2A62] hover:text-white transition-all cursor-pointer"
                >
                  <FiChevronRight className="text-base" />
                </button>
              </div>
            </div>

            {/* Custom Pagination Dots below card */}
            <div className="flex items-center gap-2 mt-4 ml-2">
              <div className="testimonial2-custom-pagination flex items-center gap-1.5"></div>
            </div>
          </motion.div>

          {/* Right Column: Transmission Towers Image with Gold Accent Blocks */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[42%] xl:w-[40%] px-4 sm:px-6 lg:px-0"
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Top-Right Decorative Gold Block */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-20 h-20 sm:w-28 sm:h-28 bg-[#F1C652] -z-0"></div>

              {/* Bottom-Left Decorative Gold Block */}
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-28 sm:h-28 bg-[#F1C652] -z-0"></div>

              {/* Foreground Image */}
              <div className="relative z-10 shadow-lg aspect-4/3 w-full bg-slate-100 overflow-hidden">
                <img
                  src="/images/testimonial-2.jpg"
                  alt="SEPL Transmission Towers & Plant Infrastructure"
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full Testimonial Modal Popup */}
      {modalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={() => setModalItem(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setModalItem(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-[#0E2A62] p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <FaTimes className="text-base" />
            </button>

            {/* Quote Icon */}
            <div className="text-[#F1C652] text-3xl sm:text-4xl mb-4">
              <FaQuoteLeft />
            </div>

            {/* Full Quote */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic font-normal">
              &ldquo;{modalItem.quote}&rdquo;
            </p>

            {/* Author Info */}
            <div className="pt-5 mt-6 border-t border-slate-100 flex flex-col">
              <h4 className="text-[#0E2A62] font-bold text-base sm:text-lg">
                {modalItem.author || "Client Testimonial"}
              </h4>
              <p className="text-slate-500 text-xs sm:text-sm font-medium mt-0.5">
                {modalItem.role || "SEPL Valued Client"}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonial_2;
