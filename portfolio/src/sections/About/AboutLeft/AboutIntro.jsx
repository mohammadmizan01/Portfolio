import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";

const AboutIntro = ({ isInView }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: .7,
      }}
      className="max-w-2xl"
    >

      <div
        className="
          inline-flex
          items-center
          gap-2

          rounded-full

          border
          border-(--color-border)

          bg-(--glass-background)

          px-5
          py-2

          backdrop-blur-xl
        "
      >

        <HiSparkles
          size={16}
          className="text-(--color-primary)"
        />

        <span
          className="
            text-sm
            font-medium

            text-(--color-text-secondary)
          "
        >
          About Me
        </span>

      </div>

      <h2
        className="
          mt-8

          text-4xl
          font-bold
          leading-tight
          tracking-tight

          text-(--color-text-primary)

          lg:text-5xl
        "
      >
        Building software is
        more than writing code
        <br />

        <span
          className="
            bg-linear-to-r
            from-(--color-primary)
            via-(--color-accent)
            to-(--color-secondary)

            bg-clip-text

            text-transparent
          "
        >
          it's solving real problems.
        </span>

      </h2>

      <div
        className="
          mt-8

          max-w-xl

          space-y-6

          text-base
          leading-8

          text-(--color-text-secondary)

          lg:text-lg
        "
      >

        <p>
          I'm Mohammad Mizan, a Full Stack Developer passionate about building modern, scalable and high-performance web applications using the MERN stack.
        </p>

        <p>
          I enjoy transforming ideas into intuitive digital experiences through clean architecture, responsive interfaces and production-ready solutions that deliver real business value.
        </p>

      </div>

    </motion.div>
  );
};

export default AboutIntro;