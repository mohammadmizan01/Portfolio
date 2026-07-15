import { motion } from "framer-motion";

import {
  FaGithub,
} from "react-icons/fa";

import {
  HiSignal,
  HiSparkles,
} from "react-icons/hi2";

const github = {
  username: "mohammadmizan01",
  url: "https://github.com/mohammadmizan01",

  lastCommit: "Loading...",
  repositories: "--",

  online: true,
};

const HeroInfoCards = ({ isInView }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
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
        duration: .8,
        delay: .45,
      }}
        className="relative z-20 mt-6 w-full max-w-75 sm:mt-8 sm:max-w-[320px] lg:mt-10"
      >
      <motion.div
        animate={
          isInView
            ? {
                y: [0, -6, 0],
              }
            : {}
        }
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          y: -6,
          scale: 1.03,
        }}
        className=" overflow-hidden rounded-3xl border border-(--color-border) bg-(--glass-background) p-5 backdrop-blur-2xl shadow-[0_25px_70px_rgba(15,23,42,.22)] "
      >

        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div
              className=" flex h-12 w-12 items-center justify-center  rounded-2xl  bg-linear-to-br  from-gray-900  to-gray-700  text-white "
            >
              <FaGithub size={22} />
            </div>

            <div>
              <a
                href={github.url}
                target="_blank"
                rel="noopener noreferrer"
                className=" text-base font-semibold text-(--color-text-primary) transition-colors  hover:text-blue-500"
              >
                GitHub Live
              </a>

              <a
                href={github.url}
                target="_blank"
                rel="noopener noreferrer"
                className=" mt-1 block text-xs text-(--color-text-secondary) transition-colors
                  hover:text-blue-500"
              >
                github.com/{github.username}
              </a>
            </div>
          </div>

          <HiSparkles
            size={18}
            className="text-yellow-400"
          />
        </div>

                <div className="mt-6">

          <p className="text-xs uppercase tracking-wider text-(--color-text-secondary)">
            Last Commit
          </p>

          <h3 className="mt-2 text-lg font-semibold text-(--color-text-primary)">
            {github.lastCommit}
          </h3>

        </div>

        <div className="mt-5">

          <div className="h-2 overflow-hidden rounded-full bg-black/8 dark:bg-white/10">

            <motion.div
              animate={
                isInView
                  ? {
                      width: ["0%", "100%"],
                    }
                  : {}
              }
              transition={{
                duration: 1.8,
              }}
              className="h-full rounded-full bg-linear-to-r  from-blue-500  via-cyan-400  to-emerald-400 "
            />

          </div>

        </div>

        <div className="mt-6">

          <div
            className=" flex items-center justify-between rounded-2xl border border-(--color-border) bg-white/5 px-4 py-3"
          >

            <span className="text-sm text-(--color-text-secondary)">
              Public Repositories
            </span>

            <span className="font-semibold text-(--color-text-primary)">
              {github.repositories}
            </span>

          </div>

        </div>

        <div
          className=" mt-6 flex items-center justify-between border-t border-(--color-border) pt-4 "
        >

          <div className="flex items-center gap-2">

            <motion.span
              animate={
                github.online
                  ? {
                      scale: [1, 1.3, 1],
                      opacity: [.6, 1, .6],
                    }
                  : {}
              }
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="h-2.5 w-2.5 rounded-full bg-green-500"
            />

            <span className="text-xs text-(--color-text-secondary)">
              Updated Live
            </span>

          </div>

          <div className="flex items-center gap-1">

            <HiSignal
              size={16}
              className="text-green-500"
            />

            <span className="text-xs font-medium text-green-500">
              Online
            </span>

          </div>

        </div>

      </motion.div>

    </motion.div>
  );
};

export default HeroInfoCards;