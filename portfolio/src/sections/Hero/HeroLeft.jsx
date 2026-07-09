import Button from "@/components/ui/Button";
import HeroStats from "./HeroStats";
import HeroTechStack from "./HeroTechStack";

const HeroLeft = () => {
  return (
    <div className="flex w-full flex-col items-start">

      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400 backdrop-blur-xl">
        <span className="h-2 w-2 rounded-full bg-green-500"></span>
        Available for Remote Work
      </span>

      <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-6xl xl:text-7xl">
        Building

        <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Fast &amp; Scalable
        </span>

        Web Applications
      </h1>

      <p className="mt-6 text-lg leading-8 text-gray-400">
        I'm Mohammad Mizan, a Full Stack Developer specializing in React,
        Node.js, Express, and MongoDB. I build modern, scalable web
        applications focused on performance, clean architecture, and
        exceptional user experience.
      </p>

      <div className="mt-10 flex gap-4">
        <Button>Hire Me</Button>

        <Button variant="outline">
          View Projects
        </Button>
      </div>

      <HeroStats />
      <HeroTechStack/>

    </div>
  );
};

export default HeroLeft;