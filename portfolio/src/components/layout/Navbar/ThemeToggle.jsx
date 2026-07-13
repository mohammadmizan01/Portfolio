import { FiMoon, FiSun } from "react-icons/fi";
import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

const getInitialTheme = () => {
  if (typeof window === "undefined") return true;

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    return savedTheme === "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const ThemeToggle = () => {
  const [dark, setDark] = useState(getInitialTheme);

  useEffect(() => {
    const html = document.documentElement;

    html.classList.toggle("dark", dark);
    html.classList.toggle("light", !dark);

    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      aria-label="Toggle Theme"
      onClick={() => setDark((prev) => !prev)}
      className={cn(
        "flex h-11 w-11 items-center justify-center rounded-xl",
        "border border-(--color-border) bg-(--glass-background) backdrop-blur-md",
        "transition-all duration-300 hover:-translate-y-1 hover:border-(--color-primary)/40 hover:shadow-lg"
      )}
    >
      {dark ? (
        <FiSun className="text-yellow-400" size={18} />
      ) : (
        <FiMoon className="text-(--color-primary)" size={18} />
      )}
    </button>
  );
};

export default ThemeToggle;