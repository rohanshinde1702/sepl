import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

const AboutUs_2 = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white w-full overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-14 xl:gap-20">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-5 order-2 lg:order-1"
          >
            {/* Eyebrow with horizontal accent bar */}
            <div className="flex items-center gap-2">
              <span className="w-8 h-[3px] bg-[#F1C652] inline-block rounded-full"></span>
              <h2 className="text-[#0E2A62] text-xs sm:text-sm font-bold uppercase tracking-[2px]">
                About SEPL
              </h2>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#0E2A62] font-bold tracking-tight leading-tight">
              Subaash Electrical <br className="hidden sm:inline" />
              Private Limited
            </h1>

            {/* Tagline / Subtitle */}
            <p className="text-sm sm:text-base font-bold text-[#0E2A62] leading-snug">
              Concepts to connections... on time every time...
            </p>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Known for delivering its promise since 1972, Subaash Electrical
              Private Ltd. (SEPL) began from a humble origin of 10 workers &amp;
              today has a significant workforce of 150. SEPL has built an enviable
              reputation of being India&apos;s &apos;A&apos; class electrical contractors.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="#about"
                className="inline-flex items-center gap-2 bg-[#F1C652] hover:bg-[#0E2A62] text-[#0E2A62] hover:text-white font-bold text-xs sm:text-sm py-2.5 sm:py-3 px-6 rounded-md shadow-xs transition-all duration-300 group cursor-pointer"
              >
                <span>Read More</span>
                <FaArrowRightLong className="group-hover:translate-x-1.5 transition-transform duration-200 text-xs" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Industrial Image with Gold Accent Frame */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 order-1 lg:order-2 px-4 sm:px-6"
          >
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              {/* Top-Right Decorative Gold Corner */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-24 h-24 sm:w-32 sm:h-32 bg-[#F1C652] rounded-tr-xl -z-0"></div>

              {/* Bottom-Left Decorative Gold Corner */}
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-24 h-24 sm:w-32 sm:h-32 bg-[#F1C652] rounded-bl-xl -z-0"></div>

              {/* Foreground Image */}
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl aspect-4/3 w-full bg-slate-100">
                <img
                  src="/images/about-2.png"
                  alt="Subaash Electrical Industrial Refinery Plant"
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

export default AboutUs_2;
