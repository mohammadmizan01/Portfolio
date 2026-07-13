import { motion, useInView, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";

import HeroBrowserHeader from "./HeroBrowserHeader";
import HeroBrowserContent from "./HeroBrowserContent";
import HeroBrowserFooter from "./HeroBrowserFooter";

const HeroBrowser = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    amount: .35,
  });

  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        scale: 1,
        rotateX: 0,
        y: 0,
      });
    } else {
      controls.start({
        opacity: 0,
        scale: .92,
        rotateX: 12,
        y: 60,
      });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        scale: .92,
        rotateX: 12,
        y: 60,
      }}
      animate={controls}
      transition={{
        duration: .8,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        rotateX: -3,
        rotateY: 3,
        y: -8,
      }}
      style={{
        transformPerspective: 1800,
      }}
      className="
        relative z-20
        w-full max-w-[760px]
        overflow-hidden
        rounded-[28px]
        border border-(--color-border)
        bg-(--glass-background)
        shadow-2xl
        backdrop-blur-2xl
      "
    >

      <HeroBrowserHeader />

      <HeroBrowserContent />

      <HeroBrowserFooter />

    </motion.div>
  );
};

export default HeroBrowser;