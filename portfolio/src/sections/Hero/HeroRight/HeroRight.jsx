import { motion } from "framer-motion";
import HeroBrowser from "./HeroBrowser";
import HeroOrbit from "./HeroOrbit";
import HeroFloatingIcons from "./HeroFloatingIcons";
import HeroInfoCards from "./HeroInfoCards";
import HeroParticles from "./HeroParticles";

const HeroRight = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: .25 }}
      transition={{ duration: .85, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex min-h-[620px] items-center justify-center lg:min-h-[700px] xl:min-h-[760px]"
    >
      <HeroParticles />

      <HeroOrbit />

      <HeroBrowser/>

      <HeroFloatingIcons />

      <HeroInfoCards />

    </motion.div>
  );
};

export default HeroRight;