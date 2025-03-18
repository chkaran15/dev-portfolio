"use client";

import { DrawerProvider } from "@/context/drawer-context";
import React, { useEffect } from "react";
import Navigation from "./navigation";
import Footer from "./footer";

interface LayoutProviderProps {
  children: React.ReactNode;
}

const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");

      if (
        link &&
        link.hash &&
        link.hash.startsWith("#") &&
        link.pathname === window.location.pathname
      ) {
        e.preventDefault();
        const targetElement = document.querySelector(link.hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <DrawerProvider>
      <div className="min-h-screen bg-dark text-light overflow-hidden relative">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </div>
    </DrawerProvider>
  );
};

export default LayoutProvider;
