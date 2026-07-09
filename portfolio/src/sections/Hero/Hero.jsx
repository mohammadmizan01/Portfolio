import Container from "@/components/layout/Container";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-20"
    >
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <Container>
        <div className="grid min-h-screen items-center gap-16 lg:grid-cols-[45%_55%]">
          <HeroLeft />
          <HeroRight />
        </div>
      </Container>
    </section>
  );
};

export default Hero;