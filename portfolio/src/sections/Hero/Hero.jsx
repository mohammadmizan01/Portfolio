import { useRef } from "react";
import { useInView } from "framer-motion";

import HeroBackground from "./HeroBackground";
import HeroLeft from "./HeroLeft/HeroLeft";
import HeroRight from "./HeroRight/HeroRight";

const Hero = () => {
  const heroRef = useRef(null);

  const isInView = useInView(heroRef, {
    amount: 0.35,
  });

  return (
    <section
      id="home"
      ref={heroRef}
      aria-label="Hero Section"
      className="relative overflow-hidden"
    >
      <div className="mx-auto flex min-h-screen w-full max-w-[1600px] items-center px-6 pt-28 pb-16 sm:px-8 lg:px-10 xl:px-14">
        <HeroBackground
          isInView={isInView}
        />

        <div
          className="
          relative
          z-10
          grid
          w-full
          items-center
          gap-14
          lg:grid-cols-2
          xl:gap-20
        "
        >
          <HeroLeft
            isInView={isInView}
          />

          <HeroRight
            isInView={isInView}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;