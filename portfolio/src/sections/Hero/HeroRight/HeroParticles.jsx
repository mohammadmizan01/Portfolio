import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";

const HeroParticles = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: .2,
  });

  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    } else {
      controls.stop();
    }
  }, [isInView, controls]);

  const particles = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        size: Math.random() * 7 + 3,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 6 + 8,
        delay: Math.random() * 2,
        opacity: Math.random() * .35 + .15,
      })),
    []
  );

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >

      {particles.map(
        ({
          id,
          size,
          left,
          top,
          duration,
          delay,
          opacity,
        }) => (
          <motion.span
            key={id}
            animate={controls}
            variants={{
              animate: {
                y: [0, -40, 0],
                x: [0, 12, -12, 0],
                opacity: [opacity, opacity + .3, opacity],
                scale: [1, 1.3, 1],
              },
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }}
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
            }}
            className="absolute rounded-full bg-blue-400/30 blur-[1px]"
          />
        )
      )}

    </div>
  );
};

export default HeroParticles;