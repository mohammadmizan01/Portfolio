import { motion } from "framer-motion";
import { FiZap } from "react-icons/fi";

const HeroBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: .5 }}
      transition={{ duration: .6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -2, scale: 1.02 }}
      className="inline-flex w-fit items-center gap-3 rounded-full border border-(--color-border) bg-(--glass-background) px-5 py-2.5 backdrop-blur-xl shadow-lg"
    >
      <span className="relative flex h-3 w-3 items-center justify-center">

        <motion.span
          animate={{ scale: [1, 2.4, 1], opacity: [.6, 0, .6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          className="absolute h-3 w-3 rounded-full bg-green-500"
        />

        <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

      </span>

      <span className="text-sm font-medium text-(--color-text-secondary)">
        Available for Remote Work
      </span>

      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500/10">
        <FiZap className="text-blue-400" size={14} />
      </div>

    </motion.div>
  );
};

export default HeroBadge;