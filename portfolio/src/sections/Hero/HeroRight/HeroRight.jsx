import HeroBrowser from "./HeroBrowser";
import HeroFloatingIcons from "./HeroFloatingIcons";
import HeroInfoCards from "./HeroInfoCards";
import HeroOrbit from "./HeroOrbit";
import HeroParticles from "./HeroParticles";

const HeroRight = ({ isInView }) => {
  return (
    <div
      className=" relative mx-auto flex w-full max-w-190 flex-col items-center lg:-translate-y-10 xl:-translate-y-24"
    >
      <HeroParticles isInView={isInView} />
      <HeroOrbit isInView={isInView} />
      <HeroFloatingIcons isInView={isInView} />
      <HeroBrowser isInView={isInView} />
      <HeroInfoCards isInView={isInView} />
    </div>
  );
};

export default HeroRight;