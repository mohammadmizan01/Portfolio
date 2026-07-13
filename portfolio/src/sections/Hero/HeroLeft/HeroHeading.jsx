import { motion } from "framer-motion";

const lineVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: .8,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const HeroHeading = () => {
  return (
    <div className="mt-8 lg:mt-10">

      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: .4 }}
        className="max-w-[720px] text-[clamp(2.8rem,6vw,5.2rem)] font-bold leading-[.92] tracking-[-.04em] text-(--color-text-primary)"
      >

        <motion.span
          custom={.15}
          variants={lineVariants}
          className="block"
        >
          Building
        </motion.span>

        <motion.span
          custom={.3}
          variants={lineVariants}
          className="mt-2 block bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 bg-clip-text text-transparent"
        >
          Fast & Scalable
        </motion.span>

        <motion.span
          custom={.45}
          variants={lineVariants}
          className="mt-2 block"
        >
          Web Applications
        </motion.span>

      </motion.h1>

    </div>
  );
};

export default HeroHeading;