import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";

const Logo = ({ mobile = false }) => {
  return (
    <Link
      to="/"
      className="flex shrink-0 items-center gap-3"
    >
      <div
        className={cn(
          "flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 text-white shadow-lg shadow-blue-500/20",
          mobile ? "h-12 w-12 text-xl font-bold" : "h-11 w-11 text-lg font-bold"
        )}
      >
        M
      </div>

      <div className={mobile ? "block" : "hidden sm:block"}>
        <h2
          className={cn(
            "font-bold text-(--color-text-primary)",
            mobile ? "text-xl" : "text-lg"
          )}
        >
          Mohammad Mizan
        </h2>

        <p className="text-sm text-(--color-text-secondary)">
          Full Stack Developer
        </p>
      </div>
    </Link>
  );
};

export default Logo;