import {
  Atom,
  Server,
  Database,
  Boxes,
  FileCode2,
} from "lucide-react";

const techStack = [
  { icon: Atom, label: "React" },
  { icon: Server, label: "Node.js" },
  { icon: Boxes, label: "Express" },
  { icon: Database, label: "MongoDB" },
  { icon: FileCode2, label: "TypeScript" },
];

const HeroTechStack = () => {
  return (
    <div className="mt-12">
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">
        My Tech Stack
      </p>

      <div className="flex flex-wrap gap-3">
        {techStack.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl"
          >
            <Icon size={18} className="text-blue-400" />
            <span className="text-sm text-white">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroTechStack;