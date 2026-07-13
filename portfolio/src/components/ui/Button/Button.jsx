import { cn } from "@/utils/cn";

const variants = {
  primary: `
    bg-(--color-primary)
    text-white
    hover:brightness-110
  `,

  secondary: `
    bg-(--color-surface)
    text-(--color-text-primary)
    hover:brightness-110
  `,

  outline: `
    border
    border-(--color-border)
    bg-transparent
    text-(--color-text-primary)
    hover:bg-(--glass-background)
  `,

  ghost: `
    bg-transparent
    text-(--color-text-primary)
    hover:bg-(--glass-background)
  `,
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-10 px-5 text-base",
  lg: "h-12 px-7 text-base",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        `
        inline-flex
        items-center
        justify-center
        rounded-xl
        font-medium

        transition-all
        duration-300

        cursor-pointer

        focus:outline-none
        focus:ring-2
        focus:ring-(--color-primary)

        disabled:pointer-events-none
        disabled:opacity-50
        `,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;