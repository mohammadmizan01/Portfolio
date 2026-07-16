import { motion } from "framer-motion";
import {
  HiAcademicCap,
  HiCalendarDays,
  HiMapPin,
} from "react-icons/hi2";

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
        once: false,
        amount: 0.3,
      }}
      transition={{
        duration: 0.7,
      }}
      whileHover={{
        y: -6,
      }}
      className="
        overflow-hidden
        rounded-3xl

        border
        border-(--color-border)

        bg-(--glass-background)

        backdrop-blur-2xl

        shadow-(--shadow-glass)
      "
    >

      <div
        className="
          h-1

          bg-linear-to-r
          from-(--color-primary)
          via-(--color-accent)
          to-(--color-secondary)
        "
      />

      <div className="p-7">

        <div className="flex items-center gap-4">

          <div
            className="
              flex
              h-14
              w-14

              items-center
              justify-center

              rounded-2xl

              bg-(--color-background)

              shadow-(--shadow-blue)
            "
          >

            <HiAcademicCap
              size={28}
              className="text-(--color-primary)"
            />

          </div>

          <div>

            <p className="text-sm text-(--color-text-secondary)">
              Education
            </p>

            <h3
              className="
                mt-1

                text-xl
                font-semibold

                text-(--color-text-primary)
              "
            >
              B.Tech
            </h3>

          </div>

        </div>

        <div className="mt-8 space-y-5">

          <div className="flex items-start gap-3">

            <HiAcademicCap
              size={18}
              className="
                mt-1
                text-(--color-primary)
              "
            />

            <div>

              <p className="text-sm text-(--color-text-secondary)">
                Degree
              </p>

              <h4 className="font-medium text-(--color-text-primary)">
                Bachelor of Technology
              </h4>

              <p className="text-sm text-(--color-text-secondary)">
                Computer Science & Engineering
              </p>

            </div>

          </div>

          <div className="flex items-start gap-3">

            <HiCalendarDays
              size={18}
              className="
                mt-1
                text-(--color-primary)
              "
            />

            <div>

              <p className="text-sm text-(--color-text-secondary)">
                Duration
              </p>

              <h4 className="font-medium text-(--color-text-primary)">
                2022 — Present
              </h4>

            </div>

          </div>

          <div className="flex items-start gap-3">

            <HiMapPin
              size={18}
              className="
                mt-1
                text-(--color-primary)
              "
            />

            <div>

              <p className="text-sm text-(--color-text-secondary)">
                Location
              </p>

              <h4 className="font-medium text-(--color-text-primary)">
                India
              </h4>

            </div>

          </div>

        </div>

      </div>

    </motion.div>
  );
};

export default AboutEducationCard;