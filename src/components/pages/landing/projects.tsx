"use client";
import React, { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { projects } from "@/const/projectdata";
import Link from "next/link";

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (revealRef.current) {
            revealRef.current.classList.add("in-view");
          }
        }
      },
      { threshold: 0.1 },
    );

    const projectObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLDivElement;
            const imageReveal = target.querySelector(".image-reveal");
            if (imageReveal) {
              setTimeout(() => {
                imageReveal.classList.add("loaded");
              }, 100);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    projectRefs.current.forEach((ref) => {
      if (ref) {
        projectObserver.observe(ref);
      }
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      projectRefs.current.forEach((ref) => {
        if (ref) {
          projectObserver.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="bg-dark section">
      <div className="section-container">
        <div ref={revealRef} className="mb-16 reveal-animation">
          <h2
            className="section-title opacity-0 animate-fade-up"
            style={{ "--reveal-index": 0 } as React.CSSProperties}
          >
            Body of work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group"
              ref={(el) => {
                projectRefs.current[index] = el;
              }}
            >
              <Link href={project.link} className="block">
                <div className="image-reveal mb-5 overflow-hidden">
                  <Image
                    width={800}
                    height={800}
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[4/3] object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="space-y-3">
                  <div className="font-mono text-xs uppercase tracking-wider text-light-gray">
                    {project.category}
                  </div>

                  <h3 className="text-xl font-display font-medium group-hover:text-off-white transition-colors duration-300 flex items-center">
                    {project.title}
                    <ExternalLink className="ml-2 w-4 h-4 opacity-0 transform translate-x-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </h3>

                  <p className="text-sm text-light-gray line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
