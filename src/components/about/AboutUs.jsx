import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { RxPeople } from "react-icons/rx";
import { PiMedal } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import AnimatedCounter from "../common/AnimatedCounter";

const AboutUs = () => {
  const aboutInfo = [
    {
      id: 1,
      icon: <FaRegCalendarAlt />,
      label: "Since",
      target: 1972,
      from: 1940,
      suffix: "",
      isNumber: true,
    },
    {
      id: 2,
      icon: <RxPeople />,
      label: "Workforce",
      target: 150,
      suffix: "+",
      isNumber: true,
    },
    {
      id: 3,
      icon: <PiMedal />,
      label: "Electrical Contractors",
      value: "A Class",
      isNumber: false,
    },
    {
      id: 4,
      icon: <IoLocationOutline />,
      label: "Presence",
      value: "Pan India",
      isNumber: false,
    },
  ];

  return (
    <section className="py-10 sm:py-14 md:py-16 lg:py-20 w-full bg-white overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
          {/* Left Side: About Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[42%] xl:w-[40%] shrink-0"
          >
            <div className="h-64 sm:h-80 md:h-96 lg:h-full min-h-[260px] sm:min-h-[320px] lg:min-h-[440px] w-full rounded-2xl overflow-hidden shadow-md">
              <img
                className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                src="/images/about.png"
                alt="Subaash Electrical Headquarters Building"
              />
            </div>
          </motion.div>

          {/* Right Side: Text & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[58%] xl:w-[60%] flex flex-col justify-center gap-6 sm:gap-8"
          >
            <div className="flex flex-col gap-3 sm:gap-4">
              {/* Eyebrow */}
              <h2 className="text-[#F1C652] text-xs sm:text-sm md:text-base uppercase font-bold tracking-[1.5px] sm:tracking-[2.5px]">
                About Us
              </h2>

              {/* Main Heading */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#0E2A62] font-bold tracking-tight leading-tight">
                Subaash Electrical Private Limited
              </h1>

              {/* Description Paragraph */}
              <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal w-full xl:w-[80%]">
                Concepts to connections . . on time every time . . . Known for delivering
                its promise since 1972, Subaash Electrical Private Ltd. (SEPL) began from a
                humble origin of 10 workers & today has a significant workforce of 150. SEPL
                has built an enviable reputation of being India&apos;s &apos;A&apos; class electrical contractors.
              </p>

              {/* Read More Link */}
              <div className="pt-1">
                <a
                  href="#about-more"
                  className="inline-flex items-center gap-2 text-[#0E2A62] hover:text-[#F1C652] font-bold text-sm sm:text-base group transition-colors duration-200 cursor-pointer"
                >
                  <span>Read More</span>
                  <FaArrowRightLong className="group-hover:translate-x-1.5 transition-transform duration-200" />
                </a>
              </div>
            </div>

            {/* Bottom Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border border-slate-200 rounded-xl p-4 sm:p-5 lg:p-6 bg-slate-50/70 shadow-xs"
            >
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-6 xl:gap-0">
                {aboutInfo.map((item, index) => (
                  <div
                    key={item.id}
                    className={`flex items-center gap-3 sm:gap-3.5 h-full ${
                      index % 2 === 0
                        ? "sm:border-r sm:border-slate-200/80 sm:pr-4 lg:pr-5 xl:border-r-0 xl:pr-0"
                        : "sm:pl-3 lg:pl-4 xl:pl-0"
                    } ${
                      index < 3
                        ? "xl:border-r xl:border-slate-200 xl:pr-5"
                        : ""
                    } ${index > 0 ? "xl:pl-5" : ""}`}
                  >
                    {/* Stat Icon */}
                    <div className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl text-[#0E2A62] shrink-0">
                      {item.icon}
                    </div>

                    {/* Stat Details */}
                    <div className="flex flex-col justify-center">
                      {item.id === 1 ? (
                        <>
                          <span className="text-[11px] sm:text-xs text-slate-500 uppercase tracking-wide font-medium">
                            {item.label}
                          </span>
                          <span className="text-base sm:text-lg font-bold text-[#0E2A62] leading-tight">
                            <AnimatedCounter to={item.target} from={item.from} duration={1.8} />
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="text-base sm:text-lg font-bold text-[#0E2A62] leading-tight">
                            {item.isNumber ? (
                              <AnimatedCounter to={item.target} suffix={item.suffix} duration={1.8} />
                            ) : (
                              item.value
                            )}
                          </span>
                          <span className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight">
                            {item.label}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;