import { motion } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaLock,
} from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";

const HeroBrowserHeader = () => {
  return (
    <div
      className="
        border-b
        border-(--color-border)
        bg-(--glass-background)
        px-4
        py-4
        sm:px-6
        backdrop-blur-xl
      "
    >
      <div className="flex items-center gap-3">

        {/* Mac Dots */}
        <div className="flex shrink-0 items-center gap-2">

          <motion.span
            whileHover={{ scale: 1.15 }}
            className="h-3.5 w-3.5 rounded-full bg-red-500"
          />

          <motion.span
            whileHover={{ scale: 1.15 }}
            className="h-3.5 w-3.5 rounded-full bg-yellow-400"
          />

          <motion.span
            whileHover={{ scale: 1.15 }}
            className="h-3.5 w-3.5 rounded-full bg-green-500"
          />

        </div>

        {/* Browser Controls */}
        <div className="hidden items-center gap-4 text-(--color-text-secondary) sm:flex">

          <FaChevronLeft
            size={14}
            className="cursor-pointer transition hover:text-(--color-text-primary)"
          />

          <FaChevronRight
            size={14}
            className="cursor-pointer transition hover:text-(--color-text-primary)"
          />

          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: .4 }}
          >
            <FiRefreshCw
              size={15}
              className="cursor-pointer text-(--color-text-secondary)"
            />
          </motion.div>

        </div>

        {/* Address Bar */}
        <div
          className="
            ml-auto
            flex
            h-10
            min-w-0
            flex-1
            items-center
            gap-2
            rounded-full
            border
            border-(--color-border)
            bg-(--color-background)
            px-3
            sm:px-4
          "
        >

          <FaLock
            size={11}
            className="shrink-0 text-green-500"
          />

          <span
            className="
              truncate
              text-xs
              text-(--color-text-secondary)
              sm:text-sm
            "
          >
            https://mohammadmizan.dev
          </span>

        </div>

      </div>
    </div>
  );
};

export default HeroBrowserHeader;