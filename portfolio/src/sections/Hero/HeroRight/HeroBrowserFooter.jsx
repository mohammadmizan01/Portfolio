import { motion } from "framer-motion";
import {
  FiActivity,
  FiClock,
  FiCpu,
  FiCheckCircle,
} from "react-icons/fi";

const items = [
  {
    icon: FiCheckCircle,
    label: "Status",
    value: "Online",
    color: "text-green-500",
  },
  {
    icon: FiCpu,
    label: "Stack",
    value: "MERN",
    color: "text-blue-500",
  },
  {
    icon: FiActivity,
    label: "Performance",
    value: "99%",
    color: "text-cyan-400",
  },
  {
    icon: FiClock,
    label: "Updated",
    value: "Live",
    color: "text-violet-400",
  },
];

const HeroBrowserFooter = () => {
  return (
    <div className="grid grid-cols-2 gap-4 border-t border-(--color-border) bg-white/5 p-5 lg:grid-cols-4">

      {items.map(({ icon: Icon, label, value, color }) => (
        <motion.div
          key={label}
          whileHover={{ y: -4, scale: 1.03 }}
          transition={{ duration: .2 }}
          className="rounded-xl border border-(--color-border) bg-(--glass-background) p-4 backdrop-blur-xl"
        >

          <div className="flex items-center gap-2">

            <Icon
              size={17}
              className={color}
            />

            <span className="text-xs text-(--color-text-secondary)">
              {label}
            </span>

          </div>

          <p className="mt-3 text-lg font-semibold text-(--color-text-primary)">
            {value}
          </p>

        </motion.div>
      ))}

    </div>
  );
};

export default HeroBrowserFooter;