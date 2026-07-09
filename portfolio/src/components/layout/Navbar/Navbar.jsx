import { Link } from "react-router-dom";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { NAV_LINKS } from "@/constants/navigation";
import { cn } from "@/utils/cn";
import useScrolled from "@/hooks/useScrolled";
import {Menu, X} from "lucide-react";
import useActiveSection from "@/hooks/useActiveSection";

const Navbar = () => {
  const isScrolled = useScrolled();

  const activeSection = useActiveSection(
    NAV_LINKS.map((link) => link.id)
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-(--z-navbar) transition-all duration-(--duration-normal)",
        isScrolled && "glass-navbar"
      )}
    >
      <Container>
        <nav className="flex h-(--navbar-height) items-center justify-between">
          <Link
              to="/"
              className="shrink-0 whitespace-nowrap text-(length:--font-size-h3) font-bold tracking-tight text-(--color-text-primary)"
            >
              {"<Mizan />"}
            </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                    className={cn(
                      "font-medium transition-colors duration-(--duration-normal)",
                      activeSection === link.id
                        ? "text-(--color-primary)"
                        : "text-(--color-text-secondary) hover:text-(--color-primary)"
                    )}                
                  >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Button size="sm" asChild>
            <a     
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
            Resume</a>
          </Button>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;