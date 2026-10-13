import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineOutbox } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { LuHardHat } from "react-icons/lu";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <MdOutlineOutbox />,
      title: "Design & Engineering",
    },
    {
      id: 2,
      icon: <BsCart3 />,
      title: "Procurement",
    },
    {
      id: 3,
      icon: <LuHardHat />,
      title: "Construction & Installation",
    },
    {
      id: 4,
      icon: <AiOutlineThunderbolt />,
      title: "Testing & Commissioning",
    },
    {
      id: 5,
      icon: <IoSettingsOutline />,
      title: "Maintenance & Support",
    },
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[url('/images/service.png')] bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden">
      {/* Dark gradient overlay for optimal readability on mobile and tablet */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0E2A62]/95 via-[#0E2A62]/85 to-[#0E2A62]/70 sm:to-[#0E2A62]/40 lg:to-transparent pointer-events-none"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12"
        >
          {/* Eyebrow */}
          <h2 className="text-[#F1C652] text-xs sm:text-sm md:text-base uppercase font-bold tracking-[1.5px] sm:tracking-[2.5px]">
            Our Services
          </h2>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold tracking-tight leading-tight">
            Comprehensive Electrical EPC Solutions
          </h1>

          {/* Description Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-slate-100 leading-relaxed font-normal w-full md:w-4/5 lg:w-[60%] xl:w-[50%]">
            From concept to commissioning, we provide end-to-end electrical solutions for
            industrial, commercial and infrastructure projects.
          </p>
        </motion.div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-4 xl:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-lg p-5 sm:p-6 flex flex-col justify-between min-h-[160px] shadow-md transition-shadow duration-300 group cursor-pointer border border-transparent hover:border-[#F1C652]/60 hover:shadow-xl"
            >
              {/* Card Icon */}
              <div className="text-3xl sm:text-4xl text-[#0E2A62] group-hover:text-[#F1C652] transition-colors duration-300">
                {service.icon}
              </div>

              {/* Title & Arrow */}
              <div className="flex flex-col gap-3 pt-4">
                <h3 className="text-[#0E2A62] font-bold text-sm sm:text-base xl:text-lg leading-snug">
                  {service.title}
                </h3>

                <div className="text-[#0E2A62] text-sm group-hover:text-[#F1C652] flex items-center transition-colors duration-300">
                  <FaArrowRightLong className="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;