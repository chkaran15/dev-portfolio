"use client";
import { testimonials } from "@/const/testominaldata";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    const testimonialObserver = new IntersectionObserver(
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
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    testimonialRefs.current.forEach((ref) => {
      if (ref) {
        testimonialObserver.observe(ref);
      }
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      testimonialRefs.current.forEach((ref) => {
        if (ref) {
          testimonialObserver.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="bg-dark-gray section"
    >
      <div className="section-container">
        <div ref={revealRef} className="mb-16 reveal-animation">
          <h2
            className="section-title opacity-0 animate-fade-up"
            style={{ "--reveal-index": 0 } as React.CSSProperties}
          >
            Testimonials
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => {
                testimonialRefs.current[index] = el;
              }}
              className="bg-soft-black p-8 flex flex-col h-full"
            >
              <div className="flex items-start mb-6">
                <div className="image-reveal w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  <Image
                    width={64}
                    height={64}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-light">{testimonial.name}</h3>
                  <p className="text-sm text-light-gray">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>

              <blockquote className="text-light-gray text-lg italic flex-grow">
                &quot;{testimonial.quote}&quot;
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
