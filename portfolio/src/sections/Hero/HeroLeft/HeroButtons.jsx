import { motion } from "framer-motion";

import Button from "@/components/ui/Button";

const HeroButtons = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: .4 }}
      transition={{ duration: .7, delay: .25, ease: [0.16, 1, 0.3, 1] }}
      className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center lg:mt-12"
    >

      <motion.div
        whileHover={{ y: -4, scale: 1.03 }}
        whileTap={{ scale: .96 }}
        transition={{ duration: .2 }}
      >
        <Button
          size="lg"
          onClick={() => scrollToSection("contact")}
          className="h-12 w-full rounded-xl px-8 shadow-lg shadow-blue-500/20 sm:w-auto"
        >
          Hire Me
        </Button>
      </motion.div>

      <motion.div
        whileHover={{ y: -4, scale: 1.03 }}
        whileTap={{ scale: .96 }}
        transition={{ duration: .2 }}
      >
        <Button
          variant="outline"
          size="lg"
          onClick={() => scrollToSection("projects")}
          className="h-12 w-full rounded-xl border-(--color-border) bg-(--glass-background) px-8 backdrop-blur-xl hover:bg-white/10 sm:w-auto"
        >
          View Projects
        </Button>
      </motion.div>

    </motion.div>
  );
};

export default HeroButtons;