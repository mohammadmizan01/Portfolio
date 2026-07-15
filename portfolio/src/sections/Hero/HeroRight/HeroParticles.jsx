import { motion } from "framer-motion";

const particles = [
  { id: 1, size: 6, left: "8%", top: "76%", delay: 0, duration: 8 },
  { id: 2, size: 5, left: "18%", top: "88%", delay: .5, duration: 9 },
  { id: 3, size: 4, left: "28%", top: "68%", delay: 1, duration: 8.5 },
  { id: 4, size: 5, left: "42%", top: "84%", delay: .8, duration: 10 },
  { id: 5, size: 6, left: "58%", top: "58%", delay: 1.2, duration: 9 },
  { id: 6, size: 5, left: "70%", top: "48%", delay: .6, duration: 8 },
  { id: 7, size: 4, left: "82%", top: "34%", delay: 1.5, duration: 9.5 },
  { id: 8, size: 5, left: "90%", top: "22%", delay: .9, duration: 8.5 },
];

const HeroParticles = ({ isInView }) => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block"
    >
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          animate={
            isInView
              ? {
                  y: [0, -14, 0],
                  opacity: [.15, .5, .15],
                  scale: [1, 1.15, 1],
                }
              : {}
          }
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            top: particle.top,
          }}
          className="absolute rounded-full bg-linear-to-r from-blue-500 to-cyan-400 shadow-[0_0_14px_rgba(59,130,246,.28)]"
        />
      ))}
    </div>
  );
};

export default HeroParticles;