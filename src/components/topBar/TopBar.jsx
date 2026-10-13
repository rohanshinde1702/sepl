import { motion } from "framer-motion";
import { GoShieldCheck } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { RxPeople } from "react-icons/rx";

const TopBar = () => {
  const info = [
    {
      id: 1,
      icon: <GoShieldCheck />,
      title: "Quality & Safety",
      subTitle: (
        <>
          Committed to the highest <br className="hidden xl:inline" />
          standards in every project
        </>
      ),
    },
    {
      id: 2,
      icon: <IoSettingsOutline />,
      title: "Experienced Team",
      subTitle: (
        <>
          Skilled professionals with <br className="hidden xl:inline" />
          decades of experience
        </>
      ),
    },
    {
      id: 3,
      icon: <AiOutlineThunderbolt />,
      title: "On-Time Delivery",
      subTitle: (
        <>
          Efficient execution, <br className="hidden xl:inline" />
          zero compromise
        </>
      ),
    },
    {
      id: 4,
      icon: <RxPeople />,
      title: "Long Term Partnerships",
      subTitle: (
        <>
          Built on trust, <br className="hidden xl:inline" />
          powered by performance
        </>
      ),
    },
  ];

  // Generates clean borders for Mobile (1-col), Tablet (2-col grid), and Desktop (4-col row)
  const getBorderClasses = (index) => {
    return [
      // Mobile (< sm): bottom divider except last item
      index < 3 ? "border-b border-slate-200 pb-5" : "pb-1",

      // Tablet (sm -> lg: 2x2 grid):
      // Left column items have right border, top row items have bottom border
      index % 2 === 0
        ? "sm:border-r sm:border-slate-200 sm:pr-6"
        : "sm:border-r-0 sm:pl-6",
      index < 2
        ? "sm:border-b sm:border-slate-200 sm:pb-6"
        : "sm:border-b-0 sm:pt-6 sm:pb-0",

      // Desktop (lg+: 4 columns in a single row):
      // Remove all bottom/top borders, apply right borders except last
      "lg:border-b-0 lg:pt-0 lg:pb-0 lg:pl-3 lg:pr-3 xl:pl-6 xl:pr-6",
      index < 3 ? "lg:border-r lg:border-slate-300" : "lg:border-r-0",
    ].join(" ");
  };

  return (
    <section className="bg-[#f8f9fa] border-b border-slate-200 py-6 sm:py-8 lg:py-10 w-full overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 sm:gap-y-0">
          {info.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-start justify-start sm:justify-center gap-3.5 sm:gap-4 xl:gap-5 h-full ${getBorderClasses(
                index
              )}`}
            >
              {/* Feature Icon */}
              <div className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl text-[#0E2A62] shrink-0 mt-0.5">
                {item.icon}
              </div>

              {/* Title & Description */}
              <div className="flex flex-col">
                <h2 className="text-[#0E2A62] text-base sm:text-lg font-bold tracking-tight">
                  {item.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-snug mt-1 font-normal">
                  {item.subTitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBar;