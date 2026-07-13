import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const rings = [
  { size: 620, duration: 45 },
  { size: 480, duration: 34 },
  { size: 340, duration: 24 },
];

const HeroOrbit = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: .3,
  });

  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      controls.start({
        rotate: 360,
        transition: {
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        },
      });
    } else {
      controls.stop();
    }
  }, [isInView, controls]);

  return (
    <div
      ref={ref}
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
    >

      {rings.map((ring) => (
        <motion.div
          key={ring.size}
          animate={controls}
          style={{
            width: ring.size,
            height: ring.size,
          }}
          transition={{
            duration: ring.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute rounded-full border border-white/[0.05]"
        >

          <motion.span
            animate={
              isInView
                ? {
                    scale: [1, 1.2, 1],
                  }
                : {}
            }
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 shadow-[0_0_20px_#3b82f6]"
          />

          <motion.span
            animate={
              isInView
                ? {
                    scale: [1, 1.25, 1],
                  }
                : {}
            }
            transition={{
              duration: 2.4,
              repeat: Infinity,
              delay: .5,
            }}
            className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_18px_#22d3ee]"
          />

        </motion.div>
      ))}

    </div>
  );
};

export default HeroOrbit;