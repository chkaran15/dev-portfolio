"use client";
import React, { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add in-view class to trigger animations
          if (heroRef.current) {
            heroRef.current.classList.add("in-view");
          }

          // Handle image reveal with a slight delay
          if (imageRef.current) {
            setTimeout(() => {
              imageRef.current?.classList.add("loaded");
            }, 300);
          }
        }
      },
      { threshold: 0.1 },
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen bg-dark flex items-center pt-20 pb-10"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div
            ref={heroRef}
            className="relative z-10 space-y-6 mt-16 lg:mt-0 reveal-animation"
          >
            <div
              className="animate-fade-up"
              style={{ "--reveal-index": "0" } as React.CSSProperties}
            >
              <div className="inline-block font-mono text-xs uppercase tracking-wider text-light-gray py-1 px-3 border border-medium-gray mb-6">
                Full-Stack Developer
              </div>
            </div>
            <h1
              className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight animate-fade-up"
              style={{ "--reveal-index": "1" } as React.CSSProperties}
            >
              Your Name
              <br />
              <span className="font-normal">Developer</span>
            </h1>
            <p
              className="max-w-md text-light-gray animate-fade-up"
              style={{ "--reveal-index": "2" } as React.CSSProperties}
            >
              Crafting elegant digital experiences with clean code and
              thoughtful design. Based in San Francisco, working globally.
            </p>
            <div
              className="pt-6 animate-fade-up"
              style={{ "--reveal-index": "3" } as React.CSSProperties}
            >
              <Link
                href="#about"
                className="inline-flex items-center text-light border-b border-light-gray pb-1 hover:border-light transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#about")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Discover my work
                <ArrowDown className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="relative" ref={imageRef}>
            <div className="image-reveal overflow-hidden h-[70vh] lg:h-[80vh]">
              <Image
                width={800}
                height={800}
                src="./assets/hero-profile.png"
                alt="Developer portrait"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
