import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowRightLong, FaQuoteLeft } from "react-icons/fa6";
import {
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
  FaTimes,
  FaExpandAlt,
} from "react-icons/fa";

// Swiper CSS styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    quote:
      "Your team has completed the project successfully and shown a high level of professionalism and involvement in the project. It's a real achievement when the staff does this in the absence of the team leader. It's a pleasure working with SEPL.",
    author: "Ujwala Kumthekar",
    role: "Architect",
    company: "",
  },
  {
    id: 2,
    quote:
      "We at Talati and Panthaky Associates have been working with Subhash Electricals for over 20 years and have had a longstanding professional and personal relationship with them. They are our primary electrical contractors by choice and over the years we have successfully worked on countless projects together. They have always been on the cutting edge of technology, always keeping up with new trends and keeping us designers in the loop… And they have always had the best understanding of the requirement of our clients, integrating our designs to suit not only their needs but also the difficult Mumbai climate, while working out the electrical solutions in tandem with us. We are happy to have this relationship with them and wish them the best for all their future ventures!",
    author: "Ria Talati",
    role: "Director",
    company: "Talati & Panthaky Associated Pvt Ltd",
  },
  {
    id: 3,
    quote:
      "The team at SEPL has shown an exceptional performance in their execution. Raising the standards in accuracy and precision along with efficiency and top-notch quality in their work.",
    author: "",
    role: "",
    company: "",
  },
  {
    id: 4,
    quote:
      "SEPL has delivered its promise beyond our expectations. The way they go about every step of the project, right from the planning, to the organizing and the coordination to the execution. This experience has been just wonderful.",
    author: "",
    role: "",
    company: "",
  },
  {
    id: 5,
    quote:
      "SEPL is one of those very few companies, who have strong virtues and business ethics. With a team of professionals, they make sure their final execution is state-of-the-art.",
    author: "",
    role: "",
    company: "",
  },
];

const Testimonial = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [modalItem, setModalItem] = useState(null);
  const swiperRef = useRef(null);
  const containerRef = useRef(null);

  const handleToggle = (id, targetBtn) => {
    const card = targetBtn ? targetBtn.closest(".testimonial-card") : null;
    if (card) {
      const quoteText = card.querySelector(".testimonial-quote-text");
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
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#f1f1f1] w-full overflow-hidden relative">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-10 xl:gap-14">
          {/* Left Column: Swiper Carousel Slider */}
          <div
            ref={containerRef}
            className="w-full lg:w-[66%] xl:w-[68%] min-w-0 order-2 lg:order-1"
          >
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              preventClicks={false}
              preventClicksPropagation={false}
              touchStartPreventDefault={false}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1.8,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
              }}
              loop={true}
              autoplay={
                expandedId || modalItem
                  ? false
                  : {
                      delay: 3500,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }
              }
              pagination={{
                clickable: true,
                el: ".testimonial-custom-pagination",
              }}
              navigation={{
                prevEl: ".testimonial-prev-btn",
                nextEl: ".testimonial-next-btn",
              }}
              className="pb-2"
            >
              {testimonials.map((item) => {
                const isLong = item.quote.length > 250;
                const isExpanded = expandedId === item.id;

                return (
                  <SwiperSlide key={item.id} className="!h-auto flex flex-col">
                    <div className="testimonial-card flex-1 bg-white rounded-2xl p-5 sm:p-6 lg:p-6 xl:p-8 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full min-h-[370px] sm:min-h-[380px] md:min-h-[390px] lg:min-h-[390px] xl:min-h-[390px] group relative">
                      {/* Top: Quote Icon & Testimonial Text */}
                      <div className="flex flex-col gap-3 sm:gap-4 flex-1">
                        <div className="flex items-center justify-between shrink-0">
                          {/* Quote Mark Icon */}
                          <div className="text-[#F1C652] text-3xl sm:text-4xl">
                            <FaQuoteLeft />
                          </div>

                          {/* Optional Popup Modal Button */}
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
                              className="swiper-no-swiping text-slate-400 hover:text-[#0E2A62] p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                            >
                              <FaExpandAlt className="text-xs" />
                            </button>
                          )}
                        </div>

                        {/* Quote Text */}
                        <div className="min-h-[140px] sm:min-h-[145px] lg:min-h-[150px] flex flex-col justify-between">
                          <p
                            className={`testimonial-quote-text text-slate-600 text-sm sm:text-[15px] leading-relaxed italic font-normal transition-all duration-300 ${
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
                      </div>

                      {/* Bottom: Author Details */}
                      <div className="pt-4 mt-auto border-t border-slate-100 flex flex-col justify-center min-h-[64px] sm:min-h-[68px] shrink-0">
                        <div className="flex flex-wrap items-center gap-1.5 text-sm sm:text-base">
                          <span className="font-bold text-[#0E2A62]">
                            {item.author || "Client Testimonial"}
                          </span>
                          {item.role && (
                            <>
                              <span className="text-slate-400">–</span>
                              <span className="text-slate-600 text-xs sm:text-sm font-medium">
                                {item.role}
                              </span>
                            </>
                          )}
                        </div>
                        {item.company ? (
                          <span className="text-xs text-slate-500 font-normal mt-0.5 line-clamp-1">
                            {item.company}
                          </span>
                        ) : (
                          <span className="text-xs text-slate-400 font-normal mt-0.5">
                            SEPL Valued Client
                          </span>
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* Slider Controls: Custom Pagination & Navigation Buttons */}
            <div className="flex items-center justify-between mt-6 pt-2">
              {/* Pagination Dots */}
              <div className="testimonial-custom-pagination flex items-center gap-2"></div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  className="testimonial-prev-btn w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-300 bg-white hover:bg-[#0E2A62] text-[#0E2A62] hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer"
                >
                  <FaChevronLeft className="text-xs" />
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  className="testimonial-next-btn w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-300 bg-white hover:bg-[#0E2A62] text-[#0E2A62] hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer"
                >
                  <FaChevronRight className="text-xs" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Heading & CTA */}
          <div className="w-full lg:w-[34%] xl:w-[32%] shrink-0 flex flex-col gap-4 sm:gap-5 order-1 lg:order-2">
            {/* Eyebrow */}
            <h2 className="text-[#F1C652] text-xs sm:text-sm md:text-base uppercase font-bold tracking-[1.5px] sm:tracking-[2.5px]">
              Testimonials
            </h2>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#0E2A62] font-bold tracking-tight leading-tight">
              What Our Clients Say
            </h1>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Our pursuit of excellence and commitment to quality has earned us
              the trust and appreciation of our clients.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0E2A62] hover:bg-[#F1C652] text-white hover:text-[#0E2A62] py-3 sm:py-3.5 px-6 rounded font-semibold uppercase text-xs sm:text-sm tracking-wider transition-all duration-300 shadow-md group cursor-pointer"
              >
                <span>View More Testimonials</span>
                <FaArrowRightLong className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </div>
          </div>
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
              <div className="flex flex-wrap items-center gap-1.5 text-base sm:text-lg">
                <span className="font-bold text-[#0E2A62]">
                  {modalItem.author || "Client Testimonial"}
                </span>
                {modalItem.role && (
                  <>
                    <span className="text-slate-400">–</span>
                    <span className="text-slate-600 text-sm font-medium">
                      {modalItem.role}
                    </span>
                  </>
                )}
              </div>
              {modalItem.company && (
                <span className="text-xs sm:text-sm text-slate-500 font-normal mt-0.5">
                  {modalItem.company}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonial;