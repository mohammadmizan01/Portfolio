import { motion } from "framer-motion";

import AboutIntro from "./AboutIntro";
import AboutTimeline from "./AboutTimeline";
import AboutEducationCard from "./AboutEducationCard";
import AboutButtons from "./AboutButtons";

const AboutLeft = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: false,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
      }}
      className="flex flex-col"
    >
      <AboutIntro />

      <div
        className="
          mt-14

          grid
          gap-10

          xl:grid-cols-[minmax(0,1fr)_360px]
          xl:items-start
        "
      >
        <AboutTimeline />

        <div
          className="
            xl:sticky
            xl:top-28
          "
        >
          <AboutEducationCard />
        </div>
      </div>

      <div className="mt-10">
        <AboutButtons />
      </div>
    </motion.div>
  );
};

export default AboutLeft;