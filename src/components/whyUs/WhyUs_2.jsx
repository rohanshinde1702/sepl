import { Fragment } from "react";
import { motion } from "framer-motion";
import { LuShieldCheck, LuStar, LuUsers, LuHandshake } from "react-icons/lu";

const WhyUs_2 = () => {
  const pillars = [
    {
      id: 1,
      icon: <LuShieldCheck className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 stroke-[1.75]" />,
      titleLine1: "Safety",
      titleLine2: "First",
    },
    {
      id: 2,
      icon: <LuStar className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 stroke-[1.75]" />,
      titleLine1: "Quality",
      titleLine2: "Assured",
    },
    {
      id: 3,
      icon: <LuUsers className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 stroke-[1.75]" />,
      titleLine1: "Experienced",
      titleLine2: "Team",
    },
    {
      id: 4,
      icon: <LuHandshake className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 stroke-[1.75]" />,
      titleLine1: "Long-term",
      titleLine2: "Partnerships",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-[url('/images/service.png')] bg-cover bg-right md:bg-center bg-no-repeat overflow-hidden">
      {/* Dark Navy Gradient Overlay for optimal readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#06193E]/95 via-[#0A2255]/85 to-[#0A2255]/50 md:to-transparent pointer-events-none"></div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 lg:gap-8">
          {/* Left Column: Heading and Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:w-[50%] xl:w-[48%] flex flex-col gap-4"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-[3px] bg-[#F1C652] inline-block rounded-full"></span>
              <h2 className="text-white text-xs sm:text-sm font-bold uppercase tracking-[2.5px]">
                Why SEPL?
              </h2>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold tracking-tight leading-tight">
              Experience. Quality. Safety. Reliability.
            </h1>

            {/* Description */}
            <p className="text-slate-200 text-sm sm:text-base font-normal leading-relaxed max-w-xl">
              With over five decades of experience, a skilled workforce and a strong commitment to
              safety and quality, SEPL continues to be a trusted partner in electrical engineering
              and contracting.
            </p>
          </motion.div>

          {/* Right Column: 4 Pillars with Gold Icons & Vertical Dividers */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[50%] xl:w-[52%]"
          >
            {/* Mobile View: 2x2 Grid with subtle border */}
            <div className="grid grid-cols-2 gap-6 sm:hidden">
              {pillars.map((pillar) => (
                <div
                  key={pillar.id}
                  className="flex flex-col items-center text-center p-3 rounded-lg bg-black/20 backdrop-blur-xs border border-[#F1C652]/20"
                >
                  <div className="text-[#F1C652] mb-2">{pillar.icon}</div>
                  <span className="text-white font-bold text-xs leading-snug">
                    {pillar.titleLine1}
                    <br />
                    {pillar.titleLine2}
                  </span>
                </div>
              ))}
            </div>

            {/* Tablet & Desktop View: Sleek Horizontal Row with Gold Vertical Dividers */}
            <div className="hidden sm:flex items-center justify-between w-full max-w-2xl mx-auto lg:max-w-none lg:ml-auto">
              {pillars.map((pillar, index) => (
                <Fragment key={pillar.id}>
                  {/* Pillar Card with Equal flex-1 Width */}
                  <div className="flex-1 flex flex-col items-center justify-center text-center px-1 sm:px-2 md:px-3 lg:px-2 xl:px-4 group cursor-default">
                    {/* Gold Icon */}
                    <div className="text-[#F1C652] mb-2 sm:mb-2.5 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                      {pillar.icon}
                    </div>

                    {/* Two-Line Title */}
                    <span className="text-white font-bold text-xs sm:text-sm md:text-sm lg:text-[13px] xl:text-base leading-snug whitespace-nowrap">
                      {pillar.titleLine1}
                      <br />
                      {pillar.titleLine2}
                    </span>
                  </div>

                  {/* Symmetrically Centered Thin Vertical Gold Divider */}
                  {index < pillars.length - 1 && (
                    <div className="h-12 sm:h-14 md:h-16 w-[1px] bg-[#F1C652]/40 shrink-0 self-center"></div>
                  )}
                </Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs_2;
