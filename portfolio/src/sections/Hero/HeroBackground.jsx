import { motion } from "framer-motion";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [.16, .26, .16] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-blue-500/15 blur-[120px]"
      />

      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [.14, .22, .14] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-56 -right-52 h-[38rem] w-[38rem] rounded-full bg-cyan-500/10 blur-[140px]"
      />

      <motion.div
        animate={{ x: [-20, 20, -20], y: [0, -18, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[120px]"
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.03]"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.025]"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,.08),transparent_70%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[.03] dark:opacity-[.06]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(11,15,25,.18),transparent)]" />

    </div>
  );
};

export default HeroBackground;