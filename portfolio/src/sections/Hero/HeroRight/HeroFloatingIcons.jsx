import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJs,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";
const icons = [
  {
    id: "react",
    Icon: FaReact,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    shadow: "0 0 28px rgba(34,211,238,.35)",
    size: 60,
    desktop: {
      left: "5%",
      top: "18%",
    },
    tablet: {
      left: "3%",
      top: "16%",

    },
    mobile: {
      left: "8%",
      top: "12%",
    },
    duration: 6,
    delay: 0,
    float: 14,
    hover: "spin",
  },

  {
    id: "node",
    Icon: FaNodeJs,
    color: "text-green-500",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    shadow: "0 0 28px rgba(34,197,94,.30)",
    size: 58,
    desktop: {
      right: "4%",
      top: "22%",
    },
    tablet: {
      right: "2%",
      top: "20%",
    },
    mobile: {
      right: "8%",
      top: "14%",
    },
    duration: 7,
    delay: .4,
    float: 16,
    hover: "spin",
  },
  {
    id: "mongodb",
    Icon: SiMongodb,
    color: "text-green-500",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    shadow: "0 0 28px rgba(74,222,128,.28)",
    size: 56,
    desktop: {
      left: "4%",
      bottom: "20%",
    },
    tablet: {
      left: "2%",
      bottom: "18%",
    },
    mobile: {
      left: "10%",
      bottom: "10%",
    },
    duration: 6.5,
    delay: .8,
    float: 14,
    hover: "spin",
  },

  {
    id: "express",
    Icon: SiExpress,
    bg: "bg-slate-500/10",
    border: "border-slate-400/20",
    shadow: "0 0 24px rgba(148,163,184,.22)",
    size: 52,
    desktop: {
      right: "3%",
      bottom: "20%",
    },
    tablet: {
      right: "2%",
      bottom: "18%",
    },
    mobile: null,
    duration: 7,
    delay: 1,
    float: 12,
    hover: "bounce",
  },

  {
    id: "tailwind",
    Icon: SiTailwindcss,
    color: "text-sky-500",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
    shadow: "0 0 28px rgba(14,165,233,.30)",
    size: 56,
    desktop: {
      left: "18%",
      top: "-2%",
    },
    tablet: {
      left: "16%",
      top: "-2%",
    },
    mobile: null,
    duration: 6,
    delay: .3,
    float: 10,
    hover: "spin",
  },

  {
    id: "javascript",
    Icon: FaJs,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20",
    shadow: "0 0 28px rgba(250,204,21,.30)",
    size: 56,
    desktop: {
      right: "18%",
      top: "-2%",
    },
    tablet: {
      right: "16%",
      top: "-2%",
    },
    mobile: {
      right: "10%",
      bottom: "10%",
    },
    duration: 6.8,
    delay: .5,
    float: 13,
    hover: "spin",
  },
];

const HeroFloatingIcons = ({ isInView }) => {
  const getPosition = (icon) => {
    if (typeof window === "undefined") {
      return icon.desktop;
    }
    if (window.innerWidth < 768) {
      return icon.mobile ?? null;
    }
    if (window.innerWidth < 1280) {
      return icon.tablet;
    }
    return icon.desktop;
  };
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-visible"
    >
      {icons.map((icon) => {
        const position = getPosition(icon);
        if (!position) return null;
        return (
          <motion.div
            key={icon.id}
            animate={
              isInView
                ? {
                    y: [0, -icon.float, 0],
                    rotate: [-2, 2, -2],
                  }
                : {}
            }
            transition={{duration: icon.duration, delay: icon.delay,  repeat: Infinity,  ease: "easeInOut",}}
            className="absolute z-40"
            style={position}
          >
            <motion.div
              whileHover={
                icon.hover === "spin"
                  ? { rotate: 360, scale: 1.15}
                  : { y: -8, scale: 1.15,}
              }
              transition={{  type: "spring",  stiffness: 260, damping: 16, }}

              style={{ width: icon.size, height: icon.size, boxShadow: icon.shadow,
              }}
              className={` pointer-events-auto flex items-center justify-center rounded-2xl border ${icon.border} ${icon.bg} backdrop-blur-xl shadow-lg `}
            >
              <IconWrapper icon={icon} />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

const IconWrapper = ({ icon }) => {
  const Icon = icon.Icon;

  return (

    <Icon
      size={icon.size * .48}
      className={icon.color}
    />
  );
};



export default HeroFloatingIcons;