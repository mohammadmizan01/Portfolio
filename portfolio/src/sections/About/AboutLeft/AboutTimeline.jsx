import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";

import { timeline } from "../../../constants/timeline";
import TimelineItem from "./TimelineItem";

const AboutTimeline = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 25%"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    mass: 0.35,
  });

  return (
    <div
      ref={ref}
      className="
        relative
        w-full
      "
    >
      <motion.div
        style={{
          scaleY: progress,
          transformOrigin: "top",
        }}
        className="
          absolute
          left-[19px]
          top-5
          bottom-10

          w-px

          rounded-full

          bg-linear-to-b
          from-(--color-primary)
          via-(--color-accent)
          to-(--color-secondary)
        "
      />

      <div className="space-y-10">
        {timeline.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            index={index}
            totalItems={timeline.length}
            progress={progress}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutTimeline;