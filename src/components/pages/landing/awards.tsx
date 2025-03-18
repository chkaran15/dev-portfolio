"use client";

import { awards } from "@/const/awards";
import React, { useEffect, useRef } from "react";

const Awards: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="award" ref={sectionRef} className="bg-light text-dark section">
      <div className="section-container">
        <div ref={revealRef} className="mb-16 reveal-animation">
          <h2
            className="section-title text-dark opacity-0 animate-fade-up"
            style={{ "--reveal-index": 0 } as React.CSSProperties}
          >
            Accolades
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-x-6 gap-y-10">
          {awards.map((award, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center transform transition-transform duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-4">
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 2L27.4 13.1L40 14.9L31 23.6L33.1 36.1L22 30.2L10.9 36.1L13 23.6L4 14.9L16.6 13.1L22 2Z"
                    stroke="#333333"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h3 className="text-sm font-medium mb-1">{award.title}</h3>
              <p className="text-xs text-medium-gray mb-1">
                {award.organization}
              </p>
              <p className="text-xs font-mono text-light-gray">{award.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
