import { motion } from "framer-motion";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { FaIndustry } from "react-icons/fa";
import { LuFileCog, LuWrench } from "react-icons/lu";

const Services_2 = () => {
  const services = [
    {
      id: 1,
      icon: <AiOutlineThunderbolt />,
      title: "Electrical Systems",
      description: "HT/LT Distribution, Switchgear, Control Panels, Power Systems",
    },
    {
      id: 2,
      icon: <FaIndustry />,
      title: "Industrial Solutions",
      description: "Process Plant, E&I, Automation, Instrumentation",
    },
    {
      id: 3,
      icon: <LuFileCog />,
      title: "Project Execution",
      description: "Engineering, Procurement, Construction & Commissioning",
    },
    {
      id: 4,
      icon: <LuWrench />,
      title: "Maintenance Services",
      description: "Preventive & Corrective Maintenance, AMC",
    },
  ];

  return (
    <section className="py-14 sm:py-16 md:py-20 lg:py-24 bg-[#F8F9FB] w-full overflow-hidden">
      <div className="container">
        {/* Centered Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-14 lg:mb-16"
        >
          {/* Eyebrow with gold accent lines */}
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-[2px] bg-[#F1C652]"></span>
            <h2 className="text-[#0E2A62] text-xs sm:text-sm font-bold uppercase tracking-[2px]">
              Our Engineering Services
            </h2>
            <span className="w-8 h-[2px] bg-[#F1C652]"></span>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#0E2A62] font-bold tracking-tight leading-tight">
            Comprehensive Electrical Solutions
          </h1>

          {/* Subtitle Paragraph */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mt-3 max-w-2xl">
            From design to commissioning, we deliver end-to-end electrical solutions
            for industrial, commercial and infrastructure projects.
          </p>
        </motion.div>

        {/* 4 Services Columns with vertical dividers on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className={`flex flex-col items-start justify-between gap-4 p-4 sm:p-6 lg:px-6 xl:px-8 group transition-colors duration-300 ${
                index < 3
                  ? "lg:border-r lg:border-slate-200"
                  : ""
              } ${
                index % 2 === 0
                  ? "sm:border-r sm:border-slate-200 lg:border-r"
                  : "sm:border-r-0"
              }`}
            >
              {/* Service Icon */}
              <div className="text-4xl sm:text-5xl text-[#0E2A62] group-hover:text-[#F1C652] transition-colors duration-300">
                {service.icon}
              </div>

              {/* Title & Description */}
              <div className="flex flex-col gap-2 flex-1 pt-2">
                <h3 className="text-[#0E2A62] text-lg sm:text-xl font-bold tracking-tight leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              {/* Gold Bottom Bar Accent */}
              <div className="w-12 h-[3px] bg-[#F1C652] rounded-full mt-2 group-hover:w-16 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services_2;
