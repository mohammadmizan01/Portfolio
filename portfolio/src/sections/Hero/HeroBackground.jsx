const HeroBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-30 overflow-hidden">

      <div className="absolute inset-0 bg-(--color-background)" />

      <div
        className="
          absolute
          left-1/2
          top-[46%]
          h-170
          w-170
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle,var(--color-primary)_0%,transparent_72%)]
          opacity-18
          blur-3xl
          will-change-transform
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)]
          bg-size-[72px_72px]
          opacity-[0.02]
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_45%,var(--color-background)_100%)]
        "
      />

    </div>
  );
};

export default HeroBackground; 