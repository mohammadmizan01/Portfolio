import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import {
  FiGithub,
  FiActivity,
  FiGlobe,
  FiCheckCircle,
} from "react-icons/fi";

const cards = [
  {
    title: "GitHub Activity",
    value: "1,284 Contributions",
    subtitle: "Last Commit Today",
    icon: FiGithub,
    color: "text-green-500",
    position: "left-0 bottom-12",
  },
  {
    title: "Deployment",
    value: "Vercel",
    subtitle: "Live",
    icon: FiGlobe,
    color: "text-blue-500",
    position: "right-0 bottom-10",
  },
];

const HeroInfoCards = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: .3,
  });

  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 hidden xl:block"
    >

      {cards.map(
        (
          {
            title,
            value,
            subtitle,
            icon: Icon,
            color,
            position,
          },
          index
        ) => (
          <motion.div
            key={title}
            variants={{
              hidden: {
                opacity: 0,
                y: 40,
                scale: .9,
              },

              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
              },
            }}
            animate={controls}
            transition={{
              duration: .7,
              delay: .2 + index * .15,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              rotateX: -8,
              rotateY: 8,
              scale: 1.04,
              y: -8,
            }}
            style={{
              transformPerspective: 1200,
            }}
            className={`absolute ${position} pointer-events-auto w-64 rounded-3xl border border-(--color-border) bg-(--glass-background) p-5 shadow-2xl backdrop-blur-2xl`}
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm font-semibold text-(--color-text-primary)">
                  {title}
                </p>

                <p className="mt-3 text-lg font-bold text-(--color-text-primary)">
                  {value}
                </p>

                <div className="mt-3 flex items-center gap-2">

                  <FiCheckCircle
                    size={14}
                    className="text-green-500"
                  />

                  <span className="text-xs text-(--color-text-secondary)">
                    {subtitle}
                  </span>

                </div>

              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5">

                <Icon
                  size={24}
                  className={color}
                />

              </div>

            </div>

            <motion.div
              animate={{
                width: ["0%", "100%"],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatDelay: 2,
              }}
              className="mt-5 h-[3px] rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500"
            />

            <div className="mt-5 flex items-center justify-between">

              <div className="flex items-center gap-2">

                <FiActivity
                  size={14}
                  className="text-green-500"
                />

                <span className="text-xs text-(--color-text-secondary)">
                  Real-time
                </span>

              </div>

              <span className="text-xs font-medium text-green-500">
                Active
              </span>

            </div>

          </motion.div>
        )
      )}

    </div>
  );
};

export default HeroInfoCards;