import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFramer,
} from "react-icons/si";

const icons = [
  {
    Icon: FaReact,
    color: "text-cyan-400",
    glow: "#22d3ee",
    className: "-left-8 top-16",
    duration: 5,
    delay: 0,
  },
  {
    Icon: FaNodeJs,
    color: "text-green-500",
    glow: "#22c55e",
    className: "-right-10 top-20",
    duration: 6,
    delay: .3,
  },
  {
    Icon: SiMongodb,
    color: "text-green-400",
    glow: "#4ade80",
    className: "-left-12 bottom-28",
    duration: 5.6,
    delay: .6,
  },
  {
    Icon: SiExpress,
    color: "text-gray-300 dark:text-white",
    glow: "#ffffff",
    className: "-right-12 bottom-24",
    duration: 6.5,
    delay: .8,
  },
  {
    Icon: SiTailwindcss,
    color: "text-sky-400",
    glow: "#38bdf8",
    className: "left-20 -top-8",
    duration: 5.4,
    delay: .2,
  },
  {
    Icon: SiFramer,
    color: "text-violet-400 dark:text-white",
    glow: "#8b5cf6",
    className: "right-20 -top-10",
    duration: 6.8,
    delay: .5,
  },
];

const HeroFloatingIcons = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: .3,
  });

  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    } else {
      controls.stop();
    }
  }, [isInView, controls]);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 hidden lg:block"
    >

      {icons.map(
        ({ Icon, color, glow, className, duration, delay }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: .7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: .45,
              delay: .8 + index * .08,
            }}
            variants={{
              animate: {
                y: [0, -14, 0],
                rotate: [-6, 6, -6],
              },
            }}
            animate={controls}
            style={{
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
            className={`absolute ${className}`}
          >
            <motion.div
              whileHover={{
                scale: 1.15,
                rotate: 12,
              }}
              transition={{
                duration: .2,
              }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-(--color-border) bg-(--glass-background) backdrop-blur-xl"
              style={{
                boxShadow: `0 0 30px ${glow}25`,
              }}
            >
              <Icon
                size={28}
                className={color}
              />
            </motion.div>
          </motion.div>
        )
      )}

    </div>
  );
};

export default HeroFloatingIcons;