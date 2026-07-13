import { motion } from "framer-motion";

const stats = [
  { value: "25+", label: "Projects Completed" },
  { value: "2+", label: "Years Learning" },
  { value: "100%", label: "Client Focus" },
  { value: "24/7", label: "Availability" },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: .12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: .65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const HeroStats = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: .3 }}
      className="mt-12 grid grid-cols-2 gap-4 xl:grid-cols-4"
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          variants={item}
          whileHover={{ y: -8, scale: 1.03 }}
          whileTap={{ scale: .98 }}
          transition={{ duration: .22 }}
          className="group rounded-2xl border border-(--color-border) bg-(--glass-background) p-5 backdrop-blur-xl hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10"
        >
          <motion.h3
            whileHover={{ scale: 1.06 }}
            transition={{ duration: .2 }}
            className="text-2xl font-bold text-(--color-text-primary) lg:text-3xl"
          >
            {stat.value}
          </motion.h3>

          <p className="mt-2 text-sm leading-6 text-(--color-text-secondary)">
            {stat.label}
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: false }}
            transition={{ duration: .8, delay: .15 }}
            className="mt-4 h-[2px] rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500"
          />

        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroStats;