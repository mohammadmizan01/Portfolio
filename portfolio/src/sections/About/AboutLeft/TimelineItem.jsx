import { motion, useTransform } from "framer-motion";

const TimelineItem = ({
  item,
  index,
  totalItems,
  progress,
}) => {
  const step = 1 / totalItems;

  const start = index * step;
  const end = Math.min(start + step * 0.7, 1);

  const opacity = useTransform(
    progress,
    [start, end],
    [0, 1]
  );

  const y = useTransform(
    progress,
    [start, end],
    [24, 0]
  );

  const scale = useTransform(
    progress,
    [start, end],
    [0.8, 1]
  );

  const Icon = item.icon;

  return (
    <motion.div
      style={{
        opacity,
        y,
      }}
      className="
        relative
        flex
        items-start
        gap-4

        lg:gap-6
      "
    >
      <motion.div
        style={{
          scale,
        }}
        className="
          relative
          z-10

          flex
          h-9
          w-9

          shrink-0

          items-center
          justify-center

          rounded-full

          border
          border-(--color-border)

          bg-(--glass-background)

          backdrop-blur-xl

          shadow-(--shadow-blue)

          lg:h-10
          lg:w-10
        "
      >
        <Icon
          aria-hidden="true"
          size={18}
          className="text-(--color-primary)"
        />
      </motion.div>

      <div className="min-w-0 flex-1 pb-10 last:pb-0">
        <p
          className="
            text-sm
            font-semibold

            text-(--color-primary)
          "
        >
          {item.year}
        </p>

        <h3
          className="
            mt-2

            text-lg
            font-semibold

            text-(--color-text-primary)

            lg:text-xl
          "
        >
          {item.title}
        </h3>

        <p
          className="
            mt-3

            text-sm
            leading-7

            text-(--color-text-secondary)

            lg:text-base
          "
        >
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default TimelineItem;