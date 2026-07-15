import { motion } from "framer-motion";
import {
  FaGithub,
  FaCodeBranch,
} from "react-icons/fa";

const HeroBrowserFooter = () => {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        border-t
        border-(--color-border)
        bg-(--glass-background)
        px-8
        py-5
        backdrop-blur-xl
      "
    >
      <div className="flex items-center gap-3">

        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-linear-to-br
            from-slate-900
            to-slate-700
            text-white
          "
        >
          <FaGithub size={20} />
        </div>

        <div>

          <h4 className="text-sm font-semibold text-(--color-text-primary)">
            GitHub
          </h4>

          <p className="text-xs text-(--color-text-secondary)">
            Open Source Portfolio
          </p>

        </div>

      </div>

      <motion.div
        whileHover={{
          y: -3,
          scale: 1.03,
        }}
        transition={{
          duration: .25,
        }}
        className="
          flex
          items-center
          gap-3
          rounded-full
          border
          border-(--color-border)
          bg-(--color-background)
          px-5
          py-2.5
        "
      >
        <FaCodeBranch
          size={14}
          className="text-green-500"
        />

        <span className="text-sm font-medium text-(--color-text-primary)">
          main
        </span>

        <span className="h-2 w-2 rounded-full bg-green-500" />

      </motion.div>
    </div>
  );
};

export default HeroBrowserFooter;