import Container from "@/components/layout/Container";

import HeroBackground from "./HeroBackground";
import HeroLeft from "./HeroLeft/HeroLeft";
import HeroRight from "./HeroRight/HeroRight";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-(--navbar-height)"
    >
      <HeroBackground />

      <Container className="relative z-10">
        <div
          className="
            grid min-h-[calc(100svh-var(--navbar-height))]
            items-center gap-10 py-8
            lg:grid-cols-[48%_52%] lg:gap-12 lg:py-0
            xl:grid-cols-[46%_54%]
            2xl:min-h-[calc(100vh-var(--navbar-height))]
          "
        >
          <HeroLeft />

          <HeroRight />
        </div>
      </Container>
    </section>
  );
};

export default Hero;