import { motion } from "framer-motion";

const HeroDescription = () => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: .4 }}
      transition={{ duration: .7, delay: .15, ease: [0.16, 1, 0.3, 1] }}
      className="mt-8 max-w-[620px] text-[15px] leading-7 text-(--color-text-secondary) sm:text-base sm:leading-8 lg:mt-10 lg:text-lg lg:leading-9"
    >
      I'm{" "}
      <span className="font-semibold text-(--color-text-primary)">
        Mohammad Mizan
      </span>
      , a Full Stack Developer specializing in{" "}
      <span className="font-medium text-(--color-text-primary)">
        React, Node.js, Express, MongoDB
      </span>
      . I build fast, scalable and production-ready web applications with
      clean architecture, exceptional user experience, accessibility and
      high-performance frontend engineering.
    </motion.p>
  );
};

export default HeroDescription;