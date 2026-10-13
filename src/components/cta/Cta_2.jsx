import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

const Cta_2 = () => {
  return (
    <section className="relative w-full py-12 sm:py-16 bg-[url('/images/service.png')] bg-cover bg-center bg-no-repeat overflow-hidden">
      {/* Dark Navy Overlay */}
      <div className="absolute inset-0 bg-[#07193F]/90 pointer-events-none"></div>

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
          {/* Left: Eyebrow, Headline & Subtext */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-2 max-w-2xl"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-[3px] bg-[#F1C652] inline-block rounded-full"></span>
              <span className="text-[#F1C652] text-xs sm:text-xs font-bold uppercase tracking-[2px]">
                Need an Electrical Engineering Partner?
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold tracking-tight">
              Let&apos;s Build a Stronger Tomorrow.
            </h2>

            <p className="text-slate-200 text-xs sm:text-sm md:text-base font-normal">
              Get in touch with us for your next project.
            </p>
          </motion.div>

          {/* Right: Gold Contact CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="shrink-0"
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#F1C652] hover:bg-white text-[#0E2A62] font-bold text-sm sm:text-base px-7 py-3 sm:py-3.5 rounded transition-colors duration-300 shadow-md group cursor-pointer"
            >
              <span>Contact Us</span>
              <FaArrowRightLong className="group-hover:translate-x-1.5 transition-transform duration-300 text-xs" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Cta_2;
