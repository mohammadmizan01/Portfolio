import { motion } from "framer-motion";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { HiChatBubbleLeftRight } from "react-icons/hi2";

const AboutButtons = () => {

  const handleContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

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
        delay: .35,
      }}
      className="
        flex
        flex-wrap
        items-center
        gap-4
      "
    >

      <motion.a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
          y: -4,
          scale: 1.03,
        }}
        whileTap={{
          scale: .98,
        }}
        className="
          inline-flex
          items-center
          gap-2

          rounded-full

          bg-linear-to-r
          from-blue-500
          to-cyan-500

          px-6
          py-3

          font-medium
          text-white

          shadow-[0_15px_40px_rgba(59,130,246,.28)]
        "
      >

        Resume

        <HiArrowTopRightOnSquare size={18} />

      </motion.a>

      <motion.button
        type="button"
        onClick={handleContact}
        whileHover={{
          y: -4,
          scale: 1.03,
        }}
        whileTap={{
          scale: .98,
        }}
        className="
          inline-flex
          items-center
          gap-2

          rounded-full

          border
          border-(--color-border)

          bg-(--glass-background)

          px-6
          py-3

          font-medium

          text-(--color-text-primary)

          backdrop-blur-xl
        "
      >

        Let's Talk

        <HiChatBubbleLeftRight size={18} />

      </motion.button>

    </motion.div>
  );
};

export default AboutButtons;