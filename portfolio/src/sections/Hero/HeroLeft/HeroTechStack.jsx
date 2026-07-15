import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

const technologies = [
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "Express", icon: SiExpress, color: "text-gray-400 dark:text-gray-300" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "GitHub", icon: FaGithub, color: "text-black dark:text-white" },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: .08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: .9,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: .55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const HeroTechStack = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: .25 }}
      className="mt-12 flex flex-wrap gap-3 lg:mt-14"
    >
      {technologies.map(({ name, icon: Icon, color }) => (
        <motion.div
          key={name}
          variants={item}
          whileHover={{
            y: -5,
            scale: 1.05,
            rotate: -2,
          }}
          whileTap={{ scale: .96 }}
          transition={{ duration: .2 }}
          className="group flex items-center gap-3 rounded-xl border border-(--color-border) bg-(--glass-background) px-4 py-3 backdrop-blur-xl hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10"
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: .6 }}
          >
            <Icon className={color} size={20} />
          </motion.div>

          <span className="text-sm font-medium text-(--color-text-primary)">
            {name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroTechStack;