import {
  Atom,
  Boxes,
  Database,
  FileCode2,
  Server,
} from "lucide-react";

const techCards = [
  {
    icon: Atom,
    label: "React",
    className: "top-4 left-1/2 -translate-x-1/2",
  },
  {
    icon: Server,
    label: "Node.js",
    className: "top-28 right-0",
  },
  {
    icon: Database,
    label: "MongoDB",
    className: "bottom-24 right-6",
  },
  {
    icon: FileCode2,
    label: "TypeScript",
    className: "bottom-4 left-1/2 -translate-x-1/2",
  },
  {
    icon: Boxes,
    label: "Express",
    className: "top-28 left-0",
  },
];

const HeroRight = () => {
  return (
    <div className="relative flex h-[700px] items-center justify-center">

      <div className="absolute h-[500px] w-[500px] rounded-full border border-white/10" />
      <div className="absolute h-[400px] w-[400px] rounded-full border border-white/10" />
      <div className="absolute h-[300px] w-[300px] rounded-full border border-white/10" />

      {techCards.map(({ icon: Icon, label, className }) => (
        <div
          key={label}
          className={`absolute ${className} rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl`}
        >
          <div className="flex items-center gap-2">
            <Icon size={20} />
            <span>{label}</span>
          </div>
        </div>
      ))}

      <div className="w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-white/5">

        <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        <img
          src="/portfolio-preview.png"
          alt="Portfolio Preview"
          className="w-full object-cover"
        />

      </div>

    </div>
  );
};

export default HeroRight;