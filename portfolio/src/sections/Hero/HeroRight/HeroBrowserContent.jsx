import { motion } from "framer-motion";
import {
  FiExternalLink,
  FiGithub,
  FiCode,
  FiTrendingUp,
} from "react-icons/fi";

const HeroBrowserContent = () => {
  return (
    <div className="space-y-6 p-6 lg:p-7">

      <div className="flex items-center justify-between">

        <div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: .5 }}
            className="text-2xl font-bold text-(--color-text-primary)"
          >
            Mohammad Mizan
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: .1, duration: .5 }}
            className="mt-1 text-sm text-(--color-text-secondary)"
          >
            Full Stack Developer
          </motion.p>

        </div>

        <motion.div
          whileHover={{ rotate: 15, scale: 1.08 }}
          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 text-white shadow-xl shadow-blue-500/25"
        >
          <FiCode size={26} />
        </motion.div>

      </div>

      <motion.div
        whileHover={{ y: -5 }}
        className="rounded-2xl border border-(--color-border) bg-(--glass-background) p-5 backdrop-blur-xl"
      >

        <div className="mb-4 flex items-center justify-between">

          <span className="font-semibold text-(--color-text-primary)">
            Portfolio Overview
          </span>

          <FiTrendingUp className="text-green-500" />

        </div>

        <div className="grid grid-cols-2 gap-4">

          <div className="rounded-xl bg-white/5 p-4">
            <p className="text-xs text-(--color-text-secondary)">
              Projects
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              25+
            </h3>
          </div>

          <div className="rounded-xl bg-white/5 p-4">
            <p className="text-xs text-(--color-text-secondary)">
              Tech Stack
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              MERN
            </h3>
          </div>

          <div className="rounded-xl bg-white/5 p-4">
            <p className="text-xs text-(--color-text-secondary)">
              Experience
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              2+
            </h3>
          </div>

          <div className="rounded-xl bg-white/5 p-4">
            <p className="text-xs text-(--color-text-secondary)">
              Status
            </p>

            <h3 className="mt-2 font-semibold text-green-500">
              Available
            </h3>
          </div>

        </div>

      </motion.div>

      <div className="flex gap-3">

        <motion.button
          whileHover={{ y: -3 }}
          whileTap={{ scale: .96 }}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-medium text-white hover:bg-blue-700"
        >
          <FiExternalLink />

          Live Demo
        </motion.button>

        <motion.button
          whileHover={{ y: -3 }}
          whileTap={{ scale: .96 }}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-(--color-border) bg-(--glass-background) py-3 font-medium backdrop-blur-xl"
        >
          <FiGithub />

          GitHub
        </motion.button>

      </div>

    </div>
  );
};

export default HeroBrowserContent;