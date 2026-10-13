import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegNewspaper,  } from "react-icons/fa";
import { FiClock, FiDollarSign, FiZap } from "react-icons/fi";
import { LuScale } from "react-icons/lu";
import { IoAppsOutline, IoMail } from "react-icons/io5";

const LetestNews = () => {
  const newsList = [
    {
      id: 1,
      img: "/images/news/news-4.jpg",
      title: "SEPL Exhibition 'ET ACETECH'",
      date: "17 to 20 Oct 2013",
    },
    {
      id: 2,
      img: "/images/news/news-1.jpg",
      title: "SEPL completes 220/33kV Substation Project",
      date: "15 Apr 2025",
    },
    {
      id: 3,
      img: "/images/news/news-2.jpg",
      title: "Expansion of Electrical EPC Services",
      date: "28 Mar 2025",
    },
    {
      id: 4,
      img: "/images/news/news-3.jpg",
      title: "SEPL awarded new infrastructure project",
      date: "12 Mar 2025",
    },
  ];

  const applications = [
    {
      id: 1,
      title: "World Clock",
      icon: <FiClock />,
    },
    {
      id: 2,
      title: "Weight Convertor",
      icon: <LuScale />,
    },
    {
      id: 3,
      title: "Currency Convertor",
      icon: <FiDollarSign />,
    },
    {
      id: 4,
      title: "Energy Calculator",
      icon: <FiZap />,
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white w-full">
      <div className="container">
        {/* Top Section: Latest News (Left) & Useful Applications (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16">
          {/* Left Column: Latest News */}
          <div className="flex flex-col border-r-0 lg:border-r border-gray-300 lg:pr-8 xl:pr-10 min-w-0">
            {/* Header */}
            <div className="flex items-start justify-between gap-3 mb-6 sm:mb-8">
              <div className="flex items-start gap-3">
                <div className="text-2xl sm:text-3xl text-[#0E2A62] mt-0.5 shrink-0">
                  <FaRegNewspaper />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0E2A62]">
                    Latest News
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Stay updated with our recent news, events and achievements.
                  </p>
                </div>
              </div>
            </div>

            {/* News List Container: Exactly 3 items visible (390px / 130px), continuously moving in loop */}
            <div className="relative overflow-hidden h-[390px] w-full news-marquee-container rounded-xl">
              {/* Subtle top/bottom edge fade for smooth entry and exit */}
              <div className="pointer-events-none absolute top-0 inset-x-0 h-6 bg-gradient-to-b from-white to-transparent z-10"></div>
              <div className="pointer-events-none absolute bottom-0 inset-x-0 h-6 bg-gradient-to-t from-white to-transparent z-10"></div>

              {/* Continuously moving track with duplicated list for seamless infinite loop */}
              <div className="flex flex-col animate-news-marquee">
                {[...newsList, ...newsList].map((news, index) => (
                  <div
                    key={`${news.id}-${index}`}
                    className="h-[130px] shrink-0 flex items-center gap-4 sm:gap-5 px-2 py-2.5 border-b border-slate-100 group cursor-pointer transition-colors hover:bg-slate-50/80 rounded-lg"
                  >
                    {/* Thumbnail Image */}
                    <div className="w-24 sm:w-28 md:w-32 h-20 sm:h-22 rounded-lg overflow-hidden shrink-0 bg-slate-100 shadow-2xs">
                      <img
                        src={news.img}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* News Content */}
                    <div className="flex flex-col justify-center flex-1 min-w-0">
                      <h3 className="text-xs sm:text-sm md:text-base font-bold text-[#0E2A62] transition-colors leading-snug line-clamp-2">
                        {news.title}
                      </h3>
                      <span className="text-[11px] sm:text-xs text-slate-400 font-medium mt-1">
                        {news.date}
                      </span>
                      <div className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#0E2A62] group-hover:text-[#F1C652] transition-colors">
                        <span>Read More</span>
                        <FaArrowRightLong className="group-hover:translate-x-1 transition-transform duration-200 text-[10px]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Useful Applications */}
          <div className="flex flex-col">
            {/* Header */}
            <div className="flex items-start gap-3 mb-6 sm:mb-8">
              <div className="text-2xl sm:text-3xl text-[#0E2A62] mt-0.5 shrink-0">
                <IoAppsOutline />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0E2A62]">
                  Useful Applications
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Explore our expertise across various industries and applications.
                </p>
              </div>
            </div>

            {/* Applications Grid: 2 rows of 4 cards on desktop, exactly matching the 390px height of Latest News */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 h-auto lg:h-[390px] sm:grid-rows-2">
              {applications.map((app) => (
                <div
                  key={app.id}
                  className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:border-[#F1C652] hover:shadow-md transition-all duration-300 group cursor-pointer h-full min-h-[160px] sm:min-h-0"
                >
                  <div className="text-2xl sm:text-3xl text-[#0E2A62] group-hover:text-[#F1C652] group-hover:scale-110 transition-all duration-200">
                    {app.icon}
                  </div>
                  <span className="text-lg sm:text-xl font-bold text-[#0E2A62] leading-tight">
                    {app.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Call-To-Action Banner: Let's Build Something Great Together */}
        <div className="mt-12 sm:mt-16 lg:mt-20 relative overflow-hidden rounded-2xl bg-[#0E2A62] text-white p-6 sm:p-8 md:p-10 shadow-xl">
          {/* Subtle background power grid watermark */}
          <div className="absolute right-0 inset-y-0 w-full sm:w-1/2 opacity-15 pointer-events-none bg-[url('/images/service.png')] bg-cover bg-center"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Side: Email Icon & Title */}
            <div className="flex items-center gap-4 sm:gap-6 text-center md:text-left flex-col md:flex-row">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#F1C652] flex items-center justify-center text-[#0E2A62] text-2xl sm:text-3xl shrink-0 shadow-md">
                <IoMail />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white">
                  Let&apos;s Build Something Great Together
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-slate-300 mt-1 font-normal">
                  Get in touch with our team for your next project.
                </p>
              </div>
            </div>

            {/* Right Side: Contact Us Button */}
            <div className="shrink-0 w-full sm:w-auto">
              <button
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#F1C652] hover:bg-white text-[#0E2A62] py-3 sm:py-3.5 px-6 sm:px-8 rounded font-bold uppercase text-xs sm:text-sm tracking-wider transition-all duration-300 shadow-md group cursor-pointer"
              >
                <span>Contact Us</span>
                <FaArrowRightLong className="group-hover:translate-x-1.5 transition-transform duration-300 text-xs" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetestNews;