import React, { useEffect, useRef } from "react";

import { Menu, X, ArrowUpRight } from "lucide-react";
import { useDrawer } from "@/context/drawer-context";
import Link from "next/link";

interface NavItem {
  name: string;
  href: string;
  external?: boolean;
}

const navItems: NavItem[] = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Accolades", href: "#accolades" },
  { name: "Contact", href: "#contact" },
  {
    name: "GitHub",
    href: "https://github.com/",
    external: true,
  },
];

const Navigation: React.FC = () => {
  const { isOpen, toggleDrawer, closeDrawer } = useDrawer();
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        closeDrawer();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDrawer();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, closeDrawer]);

  const handleNavLinkClick = (href: string) => {
    closeDrawer();
    if (!href.startsWith("http")) {
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-30 py-5 bg-black/60 md:py-6 px-5 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-light font-display text-xl tracking-tight">
            <Link href="#" className="flex items-center">
              <span className="font-light">Developer</span>
              <span className="font-medium ml-1">Portfolio</span>
            </Link>
          </div>
        </div>
        <button
          onClick={toggleDrawer}
          className="flex items-center space-x-1 text-light hover:text-off-white transition-all duration-300 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className="text-sm tracking-wide font-medium pr-2 hidden sm:inline-block">
            Menu
          </span>
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Backdrop */}
      <div
        className={`drawer-backdrop ${isOpen ? "open" : ""}`}
        onClick={closeDrawer}
      ></div>

      {/* Drawer */}
      <div ref={drawerRef} className={`drawer ${isOpen ? "open" : ""}`}>
        <div className="p-8 md:p-12 h-full flex flex-col">
          <div className="flex justify-end mb-8">
            <button
              onClick={closeDrawer}
              aria-label="Close menu"
              className="flex items-center text-light hover:text-off-white transition-all duration-300 focus:outline-none"
            >
              <span className="text-sm tracking-wide font-medium pr-2">
                Close
              </span>
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-6 mt-8">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className="overflow-hidden"
                style={{
                  animationDelay: isOpen ? `${0.1 + index * 0.05}s` : "0s",
                  opacity: 0,
                  animation: isOpen ? "fade-up 0.6s ease-out forwards" : "none",
                }}
              >
                <Link
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick(item.href);
                  }}
                  className="text-3xl md:text-4xl lg:text-5xl font-display text-light hover:text-off-white transition-all duration-300 flex items-center group"
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                >
                  <span className="link-underline">{item.name}</span>
                  {item.external && (
                    <ArrowUpRight className="ml-2 w-5 h-5 transform opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  )}
                </Link>
              </div>
            ))}
          </nav>

          <div
            className="mt-auto opacity-0"
            style={{
              animation: isOpen
                ? "fade-up 0.6s ease-out 0.6s forwards"
                : "none",
            }}
          >
            <div className="pt-12 text-light-gray">
              <div className="font-mono text-xs uppercase tracking-wider mb-2">
                Get in touch
              </div>
              <a
                href="mailto:hello@developer.com"
                className="text-light link-underline"
              >
                hello@developer.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
