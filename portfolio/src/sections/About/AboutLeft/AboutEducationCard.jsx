import { motion } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi2";

const AboutEducationCard = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: .3,
      }}
      transition={{
        duration: .6,
        delay: .2,
      }}
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      className="
        w-full
        max-w-xl

        overflow-hidden

        rounded-3xl

        border
        border-(--color-border)

        bg-(--glass-background)

        p-6

        backdrop-blur-2xl

        shadow-[0_25px_70px_rgba(15,23,42,.18)]
      "
    >

      <div className="flex items-start gap-5">

        <div
          className="
            flex
            h-14
            w-14
            shrink-0
            items-center
            justify-center

            rounded-2xl

            bg-linear-to-br
            from-blue-500
            to-cyan-500

            text-white
          "
        >
          <HiAcademicCap size={28} />
        </div>

        <div className="flex-1">

          <span
            className="
              text-sm
              font-medium

              text-blue-400
            "
          >
            EDUCATION
          </span>

          <h3
            className="
              mt-2

              text-xl
              font-semibold

              text-(--color-text-primary)
            "
          >
            Bachelor of Technology
          </h3>

          <p className="mt-1 text-(--color-text-secondary)">
            Computer Science & Engineering
          </p>

          <p className="mt-3 text-sm text-(--color-text-secondary)">
            Graduating in <span className="font-semibold text-(--color-text-primary)">2026</span>
          </p>

        </div>

      </div>

    </motion.div>
  );
};

export default AboutEducationCard;