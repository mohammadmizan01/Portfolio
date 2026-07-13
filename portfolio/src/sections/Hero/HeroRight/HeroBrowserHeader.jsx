import { motion } from "framer-motion";
import {
  FiLock,
  FiRefreshCw,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const HeroBrowserHeader = () => {
  return (
    <div className="flex items-center gap-4 border-b border-(--color-border) bg-white/5 px-5 py-4 backdrop-blur-xl">

      <div className="flex items-center gap-2">

        <motion.span
          whileHover={{ scale: 1.15 }}
          className="h-3 w-3 rounded-full bg-red-500"
        />

        <motion.span
          whileHover={{ scale: 1.15 }}
          className="h-3 w-3 rounded-full bg-yellow-400"
        />

        <motion.span
          whileHover={{ scale: 1.15 }}
          className="h-3 w-3 rounded-full bg-green-500"
        />

      </div>

      <div className="hidden items-center gap-2 text-(--color-text-secondary) md:flex">

        <FiChevronLeft size={16} />

        <FiChevronRight size={16} />

        <FiRefreshCw size={15} />

      </div>

      <motion.div
        whileHover={{ scale: 1.01 }}
        className="flex flex-1 items-center gap-3 rounded-full border border-(--color-border) bg-(--glass-background) px-4 py-2"
      >

        <FiLock
          size={14}
          className="text-green-500"
        />

        <span className="truncate text-sm text-(--color-text-secondary)">
          https://mohammadmizan.dev
        </span>

      </motion.div>

    </div>
  );
};

export default HeroBrowserHeader;