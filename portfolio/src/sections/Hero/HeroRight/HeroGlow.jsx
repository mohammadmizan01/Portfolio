import { motion } from "framer-motion";

const HeroGlow = ({ isInView }) => {
  return (
    <>
      <motion.div
        animate={
          isInView
            ? {
                x: [0, 40, -30, 0],
                y: [0, -30, 25, 0],
                scale: [1, 1.08, 1],
              }
            : {}
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-28 top-0 h-[26rem] w-[26rem] rounded-full bg-blue-500/15 blur-[120px]"
      />

      <motion.div
        animate={
          isInView
            ? {
                x: [0, -35, 30, 0],
                y: [0, 35, -20, 0],
                scale: [1, 1.1, 1],
              }
            : {}
        }
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-24 top-32 h-[24rem] w-[24rem] rounded-full bg-cyan-500/12 blur-[130px]"
      />

      <motion.div
        animate={
          isInView
            ? {
                scale: [1, 1.12, 1],
                opacity: [0.25, 0.45, 0.25],
              }
            : {}
        }
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-1/2 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[150px]"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,.08),transparent_72%)]" />
    </>
  );
};

export default HeroGlow;