import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

import { NAV_LINKS } from "@/constants/navigation";
import { cn } from "@/utils/cn";

import useScrolled from "@/hooks/useScrolled";
import useActiveSection from "@/hooks/useActiveSection";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const isScrolled = useScrolled();

  const activeSection = useActiveSection(
    NAV_LINKS.map((link) => link.id)
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-(--z-navbar) transition-all duration-300",
        isScrolled && "glass-navbar"
      )}
    >
      <Container>
        <nav className="flex h-(--navbar-height) items-center justify-between">

          <Logo />

          <NavLinks activeSection={activeSection} />

          <div className="flex items-center gap-3">

            <div className="hidden items-center gap-3 lg:flex">

              <SocialLinks />

              <ThemeToggle />

              <a
                href="/Mizan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="primary"
                  size="sm"
                >
                  Resume
                </Button>
              </a>

            </div>

            <MobileMenu />

          </div>

        </nav>
      </Container>
    </header>
  );
};

export default Navbar;