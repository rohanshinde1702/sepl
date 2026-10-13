import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa6";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Swiper CSS styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonial_2 = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "SEPL delivered the project on time with excellent quality and professional team support. Their commitment to safety and execution is truly commendable.",
      author: "Rajesh Mehta",
      role: "Project Manager, Reliance Industries",
    },
    {
      id: 2,
      quote:
        "The team at SEPL has shown exceptional performance in execution. Raising the standards in accuracy and precision along with efficiency and top-notch quality in their work.",
      author: "Ria Talati",
      role: "Director, Talati & Panthaky Associated Pvt Ltd",
    },
    {
      id: 3,
      quote:
        "SEPL's engineering capability and turnkey execution in high-voltage substations is commendable. Their commitment to safety protocols and on-time commissioning exceeded our expectations.",
      author: "Vikram Singhania",
      role: "VP Operations, Apex Chemical Industries",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white w-full overflow-hidden">
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
            <div className="bg-[#F5F8FC] rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-100 shadow-xs relative">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
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
                {testimonials.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="flex items-start gap-4 sm:gap-6">
                      {/* Left: Navy Circle Quote Mark */}
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0E2A62] text-white flex items-center justify-center shrink-0 shadow-md">
                        <FaQuoteLeft className="text-sm sm:text-base text-white" />
                      </div>

                      {/* Right: Quote Content & Author */}
                      <div className="flex flex-col justify-between min-h-[170px] sm:min-h-[160px] flex-1">
                        {/* Quote Text */}
                        <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                          &ldquo;{item.quote}&rdquo;
                        </p>

                        {/* Author Info */}
                        <div className="mt-6 pt-2">
                          <h4 className="text-[#0E2A62] font-bold text-sm sm:text-base">
                            {item.author}
                          </h4>
                          <p className="text-slate-500 text-xs sm:text-sm font-medium mt-0.5">
                            {item.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
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
    </section>
  );
};

export default Testimonial_2;
