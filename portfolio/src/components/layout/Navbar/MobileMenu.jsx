import { useEffect, useState } from "react";
import {
  FiMenu,
  FiX,
  FiUser,
  FiCode,
  FiFolder,
  FiBriefcase,
  FiMail,
} from "react-icons/fi";

import Button from "@/components/ui/Button";
import { NAV_LINKS } from "@/constants/navigation";

import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import SocialLinks from "./SocialLinks";

const ICONS = {
  about: FiUser,
  skills: FiCode,
  projects: FiFolder,
  experience: FiBriefcase,
  contact: FiMail,
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", close);

    return () => {
      window.removeEventListener("keydown", close);
    };
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-(--color-border) bg-(--glass-background) backdrop-blur-md transition hover:border-blue-500/40 hover:text-blue-400 lg:hidden"
      >
        <FiMenu size={22} />
      </button>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-[320px] max-w-[86vw] overflow-y-auto border-l border-(--color-border) bg-(--color-background) transition-transform duration-300 ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <div className="border-b border-(--color-border) px-6 pt-8 pb-6">
          <div className="flex items-start justify-between">
            <Logo mobile />

            <button
              onClick={() => setOpen(false)}
              className="mt-1 rounded-lg p-2 transition hover:bg-white/10"
            >
              <FiX size={24} />
            </button>
          </div>
        </div>

        <div className="px-6 pt-8">
          <nav>
            <ul className="space-y-5">
              {NAV_LINKS.map((link) => {
                const Icon = ICONS[link.id];

                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center gap-4 rounded-xl px-4 py-1.5 text-base font-medium text-(--color-text-secondary) transition-all duration-300 hover:bg-blue-500/10 hover:text-(--color-primary)"
                    >
                      <Icon size={20} />

                      <span className="relative">
                        {link.label}

                        <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

        <div className="mt-8 border-t border-(--color-border) pt-8">

            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-(--color-text-secondary)">
                Theme
              </h3>

              <ThemeToggle />
            </div>

            <div className="mt-8 flex flex-col items-center">
              <h3 className="mb-4 text-sm font-semibold text-(--color-text-secondary)">
                Connect with me
              </h3>

              <SocialLinks mobile />
            </div>

            <div className="mt-8 border-t border-(--color-border) pt-6">
              <a
                href="/Mizan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  className="h-12 w-full rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: document.documentElement.classList.contains("light")
                      ? "#111827"
                      : "linear-gradient(135deg,#3b82f6,#8b5cf6)",
                    color: "#fff",
                  }}
                >
                  Resume
                </Button>
              </a>
            </div>

          </div>

        </div>

      </aside>

    </>
  );
};

export default MobileMenu;