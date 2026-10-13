import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

const Project_2 = () => {
  const featuredProjects = [
    {
      id: 1,
      category: "BUILDING PROJECT",
      title: "Building Projects",
      description: "Turnkey electrical infrastructure and execution for modern commercial and residential complexes.",
      img: "/images/projects/building-1.jpg",
      href: "#projects",
    },
    {
      id: 2,
      category: "EDUCATIONAL PROJECT",
      title: "Educational Projects",
      description: "Comprehensive campus power distribution, substations, and electrical solutions.",
      img: "/images/projects/educational-1.jpg",
      href: "#projects",
    },
    {
      id: 3,
      category: "HOSPITALITY PROJECT",
      title: "Hospitality Projects",
      description: "Turnkey electrical installations, architectural lighting, and power infrastructure for luxury hospitality venues.",
      img: "/images/projects/hospitality-1.jpg",
      href: "#projects",
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
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 lg:mb-12"
        >
          {/* Left: Eyebrow & Headline */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[3px] bg-[#F1C652] inline-block rounded-full"></span>
              <h2 className="text-[#0E2A62] text-xs sm:text-sm font-bold uppercase tracking-[2px]">
                Featured Projects
              </h2>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#0E2A62] font-bold tracking-tight leading-tight">
              Projects That Power Industries
            </h1>
          </div>

          {/* Right: View All Projects CTA Link */}
          <div className="shrink-0">
            <a
              href="#all-projects"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0E2A62] hover:text-[#F1C652] transition-colors group cursor-pointer"
            >
              <span>View All Projects</span>
              <FaArrowRightLong className="transition-transform duration-200 text-xs" />
            </a>
          </div>
        </motion.div>

        {/* 2-Column Large Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredProjects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.href}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative rounded-sm overflow-hidden shadow-md group cursor-pointer h-64 sm:h-76 md:h-[340px] lg:h-[370px] xl:h-[380px] flex flex-col justify-end p-5 sm:p-6 lg:p-6 xl:p-8"
            >
              {/* Background Image */}
              <img
                src={project.img}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06122b]/95 via-[#06122b]/50 to-transparent transition-opacity duration-300 group-hover:from-[#06122b]/90"></div>

              {/* Card Bottom Content */}
              <div className="relative z-10 flex items-end justify-between gap-4 w-full">
                <div className="flex flex-col gap-1.5 max-w-md">
                  {/* Category Tag */}
                  <span className="text-[#F1C652] font-bold text-xs uppercase tracking-[1.5px]">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-white font-bold text-lg sm:text-xl lg:text-[22px] tracking-tight leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-200 text-xs sm:text-sm font-normal leading-relaxed mt-0.5">
                    {project.description}
                  </p>
                </div>

                {/* Gold Action Arrow */}
                <div className="shrink-0 text-[#F1C652] text-xl sm:text-2xl group-hover:translate-x-2 transition-transform duration-300 pb-1">
                  <FaArrowRightLong />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project_2;
