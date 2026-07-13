// import { useEffect, useState } from "react";
// import {
//   FiMenu,
//   FiX,
//   FiUser,
//   FiCode,
//   FiFolder,
//   FiBriefcase,
//   FiMail,
// } from "react-icons/fi";

// import Button from "@/components/ui/Button";
// import { NAV_LINKS } from "@/constants/navigation";

// import Logo from "./Logo";
// import ThemeToggle from "./ThemeToggle";
// import SocialLinks from "./SocialLinks";

// const ICONS = {
//   about: FiUser,
//   skills: FiCode,
//   projects: FiFolder,
//   experience: FiBriefcase,
//   contact: FiMail,
// };

// const MobileMenu = () => {
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "";

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [open]);

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === "Escape") {
//         setOpen(false);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, []);

//   return (
//     <>
//       <button
//         onClick={() => setOpen(true)}
//         aria-label="Open Menu"
//         className="flex h-11 w-11 items-center justify-center rounded-xl border border-(--color-border) bg-(--glass-background) backdrop-blur-md transition-all duration-300 hover:border-(--color-primary)/40 hover:-translate-y-1 lg:hidden"
//       >
//         <FiMenu size={22} />
//       </button>

//       <div
//         onClick={() => setOpen(false)}
//         className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
//           open
//             ? "opacity-100"
//             : "pointer-events-none opacity-0"
//         }`}
//       />

//       <aside
//         className={`fixed right-0 top-0 z-50 h-screen w-[320px] max-w-[86vw] overflow-y-auto border-l border-(--color-border) bg-(--color-background) transition-transform duration-300 ${
//           open
//             ? "translate-x-0"
//             : "translate-x-full"
//         }`}
//       >
//         <div className="border-b border-(--color-border) px-6 pb-6 pt-8">
//           <div className="flex items-start justify-between">
//             <Logo mobile />

//             <button
//               onClick={() => setOpen(false)}
//               aria-label="Close Menu"
//               className="mt-1 rounded-lg p-2 transition-colors duration-300 hover:bg-(--glass-background)"
//             >
//               <FiX size={24} />
//             </button>
//           </div>
//         </div>

//         <div className="px-6 pt-8">
//           <nav>
//             <ul className="space-y-5">
//               {NAV_LINKS.map((link) => {
//                 const Icon = ICONS[link.id];

//                 return (
//                   <li key={link.id}>
//                     <a
//                       href={link.href}
//                       onClick={() => setOpen(false)}
//                       className="group flex items-center gap-4 rounded-xl px-4 py-2 text-base font-medium text-(--color-text-secondary) transition-all duration-300 hover:bg-(--glass-background) hover:text-(--color-primary)"
//                     >
//                       <Icon size={20} />

//                       <span className="relative">
//                         {link.label}

//                         <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-(--color-primary) transition-all duration-300 group-hover:w-full" />
//                       </span>
//                     </a>
//                   </li>
//                 );
//               })}
//             </ul>
//           </nav>

//           <div className="mt-8 border-t border-(--color-border) pt-8">
//             <div className="flex items-center justify-between">
//               <h3 className="text-sm font-semibold text-(--color-text-secondary)">
//                 Theme
//               </h3>

//               <ThemeToggle />
//             </div>

//             <div className="mt-8 flex flex-col items-center">
//               <h3 className="mb-4 text-sm font-semibold text-(--color-text-secondary)">
//                 Connect with me
//               </h3>

//               <SocialLinks mobile />
//             </div>

//             <div className="mt-8 border-t border-(--color-border) pt-6">
//               <a
//                 href="/Mizan_Resume.pdf"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block"
//               >
//                 <Button variant="primary" size="lg" className="h-12 w-full rounded-xl">
//                   Resume
//                 </Button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default MobileMenu;