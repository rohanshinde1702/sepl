import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Swiper CSS styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Project = () => {
  const projects = [
    {
      id: 1,
      img: "/images/projects/building-1.jpg",
      title: "Building Projects",
      category: "Buildings",
    },
    {
      id: 2,
      img: "/images/projects/educational-1.jpg",
      title: "Educational Projects",
      category: "Educational",
    },
    {
      id: 3,
      img: "/images/projects/hospitality-1.jpg",
      title: "News Cafe Delhi Restaurant",
      category: "Hospitality",
    },
    {
      id: 4,
      img: "/images/projects/deloitte.jpg",
      title: "Deloitte Office",
      category: "Offices",
    },
    {
      id: 5,
      img: "/images/projects/showroom-1.jpg",
      title: "Fcml Showrooms",
      category: "showrooms",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 w-full overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 sm:gap-10 lg:gap-8 xl:gap-12">
          {/* Left Column: Heading & CTA */}
          <div className="w-full lg:w-[32%] xl:w-[30%] shrink-0 flex flex-col gap-4 sm:gap-5">
            {/* Eyebrow */}
            <h2 className="text-[#F1C652] text-xs sm:text-sm md:text-base uppercase font-bold tracking-[1.5px] sm:tracking-[2.5px]">
              Our Projects
            </h2>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#0E2A62] font-bold tracking-tight leading-tight">
              Showcasing Our Expertise
            </h1>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              We have successfully completed numerous projects across various industries,
              delivering quality, safety and performance.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0E2A62] hover:bg-[#F1C652] text-white hover:text-[#0E2A62] py-3 sm:py-3.5 px-6 rounded font-semibold uppercase text-xs sm:text-sm tracking-wider transition-all duration-300 shadow-md group cursor-pointer"
              >
                <span>View All Projects</span>
                <FaArrowRightLong className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Column: Swiper Carousel Slider */}
          <div className="w-full lg:w-[68%] xl:w-[70%] min-w-0">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              breakpoints={{
                540: {
                  slidesPerView: 1.5,
                  spaceBetween: 16,
                },
                768: {
                  slidesPerView: 2.2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 3,
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
                el: ".project-custom-pagination",
              }}
              navigation={{
                prevEl: ".project-prev-btn",
                nextEl: ".project-next-btn",
              }}
              className="pb-2"
            >
              {projects.map((item) => (
                <SwiperSlide key={item.id} className="h-auto">
                  <div className="bg-white rounded-xl overflow-hidden border border-slate-200/90 shadow-xs transition-all duration-300 flex flex-col h-full group cursor-pointer">
                    {/* Project Card Image */}
                    <div className="h-44 sm:h-48 md:h-52 w-full overflow-hidden relative bg-slate-100">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Category Badge */}
                      <span className="absolute top-3 left-3 bg-[#0E2A62]/90 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-sm uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>

                    {/* Project Details */}
                    <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 bg-white">
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-[#0E2A62] group-hover:text-[#0E2A62] transition-colors leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                          {item.subTitle}
                        </p>
                      </div>

                      {/* View Details Link */}
                      <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                        <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0E2A62] group-hover:text-[#F1C652] transition-colors">
                          <span>View Details</span>
                          <FaArrowRightLong className="group-hover:translate-x-1.5 transition-transform duration-300 text-xs" />
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Slider Controls: Custom Pagination & Navigation Buttons */}
            <div className="flex items-center justify-between mt-6 pt-2">
              {/* Pagination Dots */}
              <div className="project-custom-pagination flex items-center gap-2"></div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Previous project"
                  className="project-prev-btn w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-300 bg-white hover:bg-[#0E2A62] text-[#0E2A62] hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer"
                >
                  <FaChevronLeft className="text-xs" />
                </button>
                <button
                  type="button"
                  aria-label="Next project"
                  className="project-next-btn w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-300 bg-white hover:bg-[#0E2A62] text-[#0E2A62] hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer"
                >
                  <FaChevronRight className="text-xs" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;