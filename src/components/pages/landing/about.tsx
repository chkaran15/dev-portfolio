"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (aboutRef.current) {
            aboutRef.current.classList.add("in-view");
          }

          if (imageRef.current) {
            setTimeout(() => {
              imageRef.current?.classList.add("loaded");
            }, 300);
          }
        }
      },
      { threshold: 0.1 },
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="section bg-gray-200 text-gray-800">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className="order-2 lg:order-1">
            <div className="image-reveal h-[50vh] lg:h-[70vh]">
              <Image
                width={600}
                height={800}
                src="/assets/about-image.png"
                alt="About me"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <div ref={aboutRef} className="order-1 lg:order-2 reveal-animation">
            <div
              className="mb-2 animate-fade-up"
              style={{ "--reveal-index": "0" } as React.CSSProperties}
            >
              <div className="caption">About Me</div>
            </div>
            <h2
              className="section-title animate-fade-up"
              style={{ "--reveal-index": "1" } as React.CSSProperties}
            >
              Passionate about creating meaningful digital experiences
            </h2>
            <p
              className="mb-6 animate-fade-up"
              style={{ "--reveal-index": "2" } as React.CSSProperties}
            >
              With over 5 years of experience in web development, I specialize
              in building responsive, accessible, and performant applications
              using modern technologies.
            </p>
            <p
              className="mb-6 animate-fade-up"
              style={{ "--reveal-index": "3" } as React.CSSProperties}
            >
              My approach combines technical expertise with design sensitivity
              to create solutions that are not only functional but also
              aesthetically pleasing and intuitive to use.
            </p>
            <div
              className="animate-fade-up"
              style={{ "--reveal-index": "4" } as React.CSSProperties}
            >
              <Link href="#contact" className="link-underline-light">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
