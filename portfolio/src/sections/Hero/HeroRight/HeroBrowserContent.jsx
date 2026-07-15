import { motion } from "framer-motion";
// import {
//   FaReact,
//   FaNodeJs,
//   FaGithub,
// } from "react-icons/fa";

// import {
//   SiMongodb,
//   SiExpress,
//   SiTailwindcss,
// } from "react-icons/si";

// const technologies = [
//   {
//     name: "React",
//     icon: FaReact,
//     color: "text-cyan-500",
//   },
//   {
//     name: "Node.js",
//     icon: FaNodeJs,
//     color: "text-green-500",
//   },
//   {
//     name: "Express",
//     icon: SiExpress,
//     color: "text-slate-700 dark:text-white",
//   },
//   {
//     name: "MongoDB",
//     icon: SiMongodb,
//     color: "text-green-500",
//   },
//   {
//     name: "Tailwind",
//     icon: SiTailwindcss,
//     color: "text-sky-500",
//   },
//   {
//     name: "GitHub",
//     icon: FaGithub,
//     color: "text-slate-800 dark:text-white",
//   },
// ];

const HeroBrowserContent = () => {
  return (
    <div className="px-8 py-8">

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: .6,
          delay: .3,
        }}
      >
        <p className="text-sm font-medium text-blue-500">
          Full Stack Developer
        </p>

        <h1 className="mt-3 text-4xl font-bold leading-tight text-(--color-text-primary)">
          Building Fast &
          <br />
          Scalable Web Applications
        </h1>

        <p className="mt-5 max-w-xl leading-7 text-(--color-text-secondary)">
          I create modern web applications using the MERN Stack with
          performance, accessibility, scalability and exceptional user
          experience in mind.
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-2 gap-4">

        <motion.div
          whileHover={{
            y: -5,
            scale: 1.02,
          }}
          className="rounded-2xl border border-(--color-border) p-5"
        >
          <p className="text-sm text-(--color-text-secondary)">
            Projects
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            25+
          </h3>
        </motion.div>

        <motion.div
          whileHover={{
            y: -5,
            scale: 1.02,
          }}
          className="rounded-2xl border border-(--color-border) p-5"
        >
          <p className="text-sm text-(--color-text-secondary)">
            Experience
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            2+
          </h3>
        </motion.div>

      </div>

      {/* <div className="mt-10 flex flex-wrap gap-3">

        {technologies.map(({ name, icon: Icon, color }) => (
          <motion.div
            key={name}
            whileHover={{
              y: -4,
              scale: 1.05,
            }}
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-(--color-border)
              px-4
              py-2
              bg-(--glass-background)
            "
          >
            <Icon
              size={18}
              className={color}
            />

            <span className="text-sm font-medium">
              {name}
            </span>

          </motion.div>
        ))}

      </div> */}

    </div>
  );
};

export default HeroBrowserContent;