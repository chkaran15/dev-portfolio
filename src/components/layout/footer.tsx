"use client";
import React from "react";
import { ArrowUp, Mail, Github, Linkedin, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="contact" className="bg-dark pt-24 pb-8">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="section-title">Thank you</h2>
          <p className="text-light-gray max-w-xl">
            I&apos;m currently available for freelance work and new
            opportunities. If you&apos;d like to discuss a project or say hello,
            don&apos;t hesitate to get in touch.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 border-b border-dark-gray pb-8">
          <div className="mb-8 md:mb-0">
            <h3 className="font-medium text-xl mb-2">
              Let&apos;s work together
            </h3>
            <a
              href="mailto:hello@developer.com"
              className="text-light-gray hover:text-light transition-colors duration-300"
            >
              hello@developer.com
            </a>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-gray hover:text-light transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-gray hover:text-light transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-gray hover:text-light transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@developer.com"
              className="text-light-gray hover:text-light transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-light-gray text-sm mb-6 md:mb-0">
            &copy; {new Date().getFullYear()} Developer Portfolio. All rights
            reserved.
          </div>

          <button
            onClick={handleScrollToTop}
            className="flex items-center text-light-gray hover:text-light transition-colors duration-300 group"
            aria-label="Back to top"
          >
            <span className="mr-2 text-sm">Back to top</span>
            <ArrowUp className="w-4 h-4 transform transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
