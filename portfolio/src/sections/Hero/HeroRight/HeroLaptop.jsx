import { motion } from "framer-motion";

const HeroLaptop = ({ isInView }) => {
  return (
    <motion.div
      animate={
        isInView
          ? {
              y: [0, -12, 0],
            }
          : {}
      }
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative z-20 w-full max-w-[700px] rounded-3xl border border-(--color-border) bg-(--glass-background) p-3 shadow-2xl backdrop-blur-2xl"
    >

      <div className="overflow-hidden rounded-2xl border border-(--color-border) bg-[#0f172a]">

        <div className="flex items-center justify-between border-b border-(--color-border) bg-white/5 px-5 py-3">

          <div className="flex items-center gap-2">

            <span className="h-3 w-3 rounded-full bg-red-500" />

            <span className="h-3 w-3 rounded-full bg-yellow-500" />

            <span className="h-3 w-3 rounded-full bg-green-500" />

          </div>

          <div className="rounded-lg bg-white/5 px-4 py-1 text-xs text-slate-400">
            mohammadmizan.dev
          </div>

        </div>

        <div className="relative aspect-[16/10] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,.18),transparent_45%)]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,.14),transparent_45%)]" />

          <div className="flex h-full flex-col justify-center px-10">

            <span className="text-sm uppercase tracking-[0.35em] text-blue-400">
              Full Stack Developer
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-white">
              Mohammad
              <br />
              Mizan
            </h2>

            <p className="mt-6 max-w-md text-slate-400">
              Building modern, scalable and beautiful web
              applications using React, Node.js, Express and MongoDB.
            </p>

            <div className="mt-8 flex gap-3">

              <div className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white">
                Hire Me
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-300">
                View Projects
              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="mx-auto mt-3 h-2 w-40 rounded-full bg-slate-700" />

    </motion.div>
  );
};

export default HeroLaptop;