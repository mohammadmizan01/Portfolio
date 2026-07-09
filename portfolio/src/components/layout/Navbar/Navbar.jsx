import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import Container from "../Container";
import { NAV_LINKS } from "@/constants/navigation";
import useScrolled from "@/hooks/useScrolled";

const Navbar = () => {
  return (

    const isScrolled = useScrolled();

    <header className={cn(
    "fixed top-0 left-0 z-(--z-navbar) w-full transition-all duration-300",
    isScrolled && "glass-navbar"
  )}
    >
      <Container>
        <nav className="flex h-(--navbar-height) items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight"
          >
            Mizan.
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium transition-colors hover:text-(--color-primary)"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Button size="sm">
            Resume
          </Button>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;