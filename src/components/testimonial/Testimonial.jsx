import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowRightLong, FaQuoteLeft } from "react-icons/fa6";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Swiper CSS styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonial = () => {
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
        "The team at SEPL has shown an exceptional performance in their execution. Raising the standards in accuracy and precision along with efficiency and top-notch quality in their work.",
      author: "Ria Talati",
      role: "Director",
      company: "Talati & Panthaky Associated Pvt Ltd",
    },
    {
      id: 3,
      quote:
        "SEPL's engineering capability and turnkey execution in high-voltage substations is commendable. Their commitment to safety protocols and on-time commissioning exceeded our expectations.",
      author: "Rajesh Mehta",
      role: "Project Head",
      company: "Reliance Infrastructure",
    },
    {
      id: 4,
      quote:
        "Working with SEPL on our industrial electrical infrastructure was a seamless experience. Their proactive problem-solving and technical expertise made a huge difference to our project timeline.",
      author: "Vikram Singhania",
      role: "VP Operations",
      company: "Apex Chemical Industries",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#f1f1f1] w-full overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-10 xl:gap-14">
          {/* Left Column: Swiper Carousel Slider */}
          <div className="w-full lg:w-[66%] xl:w-[68%] min-w-0 order-2 lg:order-1">
            <Swiper
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
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
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
              {testimonials.map((item) => (
                <SwiperSlide key={item.id} className="h-auto">
                  <div className="bg-white rounded-2xl p-6 sm:p-7 md:p-8 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full min-h-[300px] sm:min-h-[320px] group">
                    {/* Top: Quote Icon & Testimonial Text */}
                    <div className="flex flex-col gap-4">
                      {/* Quote Mark Icon */}
                      <div className="text-[#F1C652] text-3xl sm:text-4xl">
                        <FaQuoteLeft />
                      </div>

                      {/* Quote Text */}
                      <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed italic font-normal">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>

                    {/* Bottom: Author Details */}
                    <div className="pt-6 mt-4 border-t border-slate-100 flex flex-col">
                      <div className="flex flex-wrap items-center gap-1.5 text-sm sm:text-base">
                        <span className="font-bold text-[#0E2A62]">
                          {item.author}
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
                      {item.company && (
                        <span className="text-xs text-slate-500 font-normal mt-0.5">
                          {item.company}
                        </span>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
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
    </section>
  );
};

export default Testimonial;