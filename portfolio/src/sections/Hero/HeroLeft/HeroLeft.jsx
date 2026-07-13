import { motion } from "framer-motion";

import HeroBadge from "./HeroBadge";
import HeroHeading from "./HeroHeading";
import HeroDescription from "./HeroDescription";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import HeroTechStack from "./HeroTechStack";

const HeroLeft = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-20 flex w-full max-w-[680px] flex-col justify-center self-center py-6 lg:py-0 lg:pr-12 xl:pr-16"
    >
      <HeroBadge />

      <HeroHeading />

      <HeroDescription />

      <HeroButtons />

      <HeroStats />

      <HeroTechStack />
    </motion.div>
  );
};

export default HeroLeft;