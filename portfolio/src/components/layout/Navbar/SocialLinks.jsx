import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { cn } from "@/utils/cn";

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/yourusername",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
  },
  {
    icon: HiOutlineMail,
    href: "mailto:youremail@gmail.com",
    label: "Email",
  },
];

const SocialLinks = ({ mobile = false }) => {
  return (
    <div
      className={cn(
        "items-center",
        mobile
          ? "flex justify-center gap-3"
          : "hidden xl:flex gap-2"
      )}
    >
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={cn(
            "group flex items-center justify-center rounded-xl",
            "border border-(--color-border) bg-(--glass-background) backdrop-blur-md",
            "transition-all duration-300 hover:-translate-y-1 hover:border-(--color-primary)/40 hover:shadow-lg hover:shadow-blue-500/20",
            mobile ? "h-11 w-11" : "h-10 w-10"
          )}
        >
          <Icon
            size={mobile ? 20 : 18}
            className="text-(--color-text-secondary) transition-colors duration-300 group-hover:text-(--color-primary)"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;