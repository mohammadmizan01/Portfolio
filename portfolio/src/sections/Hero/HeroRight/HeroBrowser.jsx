import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useAnimationControls,
  useMotionValue,
  useSpring,
} from "framer-motion";

import HeroBrowserHeader from "./HeroBrowserHeader";
import HeroBrowserContent from "./HeroBrowserContent";
const HeroBrowser = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: 0.35,
  });

  const controls = useAnimationControls();

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, {
    stiffness: 180,
    damping: 22,
    mass: 0.8,
  });

  const springY = useSpring(rotateY, {
    stiffness: 180,
    damping: 22,
    mass: 0.8,
  });

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        scale: 1,
        y: 0,
      });
    } else {
      controls.start({
        opacity: 0,
        scale: 0.92,
        y: 60,
      });
    }
  }, [controls, isInView]);

  const handleMouseMove = (e) => {
    if (window.innerWidth < 1024) return;

    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateYValue = ((x - rect.width / 2) / rect.width) * 12;
    const rotateXValue = -((y - rect.height / 2) / rect.height) * 12;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        scale: 0.92,
        y: 60,
      }}
      animate={controls}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformPerspective: 1800,
        transformStyle: "preserve-3d",
      }}
      whileHover={
        window.innerWidth >= 1024
          ? {
              y: -10,
            }
         : {}
      }
      className=" relative z-20 w-full max-w-190 overflow-visible rounded-[28px] border border-(--color-border) bg-(--glass-background) shadow-2xl backdrop-blur-2xl"
    >
      <HeroBrowserHeader />

      <HeroBrowserContent />

    </motion.div>
  );
};

export default HeroBrowser;