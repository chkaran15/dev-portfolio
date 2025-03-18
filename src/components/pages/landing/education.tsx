"use client";

import { educationItems } from "@/const/educationdata";
import { experienceItems } from "@/const/experiencedata";
import React, { useEffect, useRef } from "react";

const Education: React.FC = () => {
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
    <section
      id="education"
      ref={sectionRef}
      className="bg-off-white text-dark section"
    >
      <div className="section-container">
        <div ref={revealRef} className="mb-16 reveal-animation">
          <h2
            className="section-title text-dark opacity-0 animate-fade-up"
            style={{ "--reveal-index": 0 } as React.CSSProperties}
          >
            Education & Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <h3 className="font-mono text-sm uppercase tracking-wider text-medium-gray mb-8">
              Education
            </h3>

            {educationItems.map((item, index) => (
              <div key={index} className="group">
                <div className="grid grid-cols-[1fr,3fr] gap-6">
                  <div className="font-mono text-xs text-medium-gray">
                    {item.period}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-medium">{item.degree}</h4>
                    <div className="text-medium-gray">{item.institution}</div>
                    <p className="text-sm text-dark-gray pt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-12">
            <h3 className="font-mono text-sm uppercase tracking-wider text-medium-gray mb-8">
              Experience
            </h3>

            {experienceItems.map((item, index) => (
              <div key={index} className="group">
                <div className="grid grid-cols-[1fr,3fr] gap-6">
                  <div className="font-mono text-xs text-medium-gray">
                    {item.period}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-medium">{item.role}</h4>
                    <div className="text-medium-gray">{item.company}</div>
                    <p className="text-sm text-dark-gray pt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
