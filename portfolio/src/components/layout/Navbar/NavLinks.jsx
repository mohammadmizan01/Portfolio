import { NAV_LINKS } from "@/constants/navigation";
import { cn } from "@/utils/cn";

const NavLinks = ({ activeSection }) => {
  return (
    <ul className="hidden items-center gap-8 lg:flex">
      {NAV_LINKS.map((link) => (
        <li key={link.id}>
          <a
            href={link.href}
            className={cn(
              "group relative py-2 text-sm font-medium transition-colors duration-300",
              activeSection === link.id
                ? "text-(--color-primary)"
                : "text-(--color-text-secondary) hover:text-(--color-text-primary)"
            )}
          >
            {link.label}

            <span
              className={cn(
                "absolute bottom-0 left-0 h-0.5 w-full origin-left bg-(--color-primary) transition-transform duration-300",
                activeSection === link.id
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              )}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;