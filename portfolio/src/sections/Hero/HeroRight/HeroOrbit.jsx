import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

const rings = [
  {
    id: 1,
    size: "h-[520px] w-[520px] sm:h-[620px] sm:w-[620px] lg:h-[680px] lg:w-[680px]",
    duration: 42,
  },
  {
    id: 2,
    size: "hidden md:block h-[420px] w-[420px] lg:h-[500px] lg:w-[500px]",
    duration: 32,
  },
  {
    id: 3,
    size: "hidden lg:block h-[300px] w-[300px] lg:h-[340px] lg:w-[340px]",
    duration: 24,
  },
];

const HeroOrbit = ({ isInView }) => {
  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      controls.start({
        rotate: 360,
        transition: {
          duration: 42,
          repeat: Infinity,
          ease: "linear",
        },
      });
    } else {
      controls.stop();
    }

    return () => {
      controls.stop();
    };
  }, [controls, isInView]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
    >
      {rings.map((ring) => (
        <motion.div
          key={ring.id}
          animate={controls}
          transition={{
            duration: ring.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute rounded-full border border-white/6 dark:border-white/8 ${ring.size}`}
        >
          {/* Top Orb */}
          <motion.span
            animate={
              isInView
                ? {
                    scale: [1, 1.2, 1],
                    opacity: [0.35, 1, 0.35],
                  }
                : {}
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 shadow-[0_0_18px_rgba(59,130,246,.45)]"
          />

          {/* Bottom Orb */}
          <motion.span
            animate={
              isInView
                ? {
                    scale: [1, 1.15, 1],
                    opacity: [0.3, 0.9, 0.3],
                  }
                : {}
            }
            transition={{
              duration: 3.4,
              delay: 0.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,.35)]"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default HeroOrbit;