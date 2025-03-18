interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
}

export const experienceItems: ExperienceItem[] = [
  {
    period: "2021 - Present",
    role: "Senior Software Engineer",
    company: "TechVision Inc.",
    description:
      "Lead developer for the company's flagship SaaS platform, managing a team of 5 developers and establishing best practices for code quality and deployment.",
  },
  {
    period: "2018 - 2021",
    role: "Full-Stack Developer",
    company: "Innovative Solutions",
    description:
      "Developed and maintained multiple client projects, specializing in React/Node.js applications with complex state management and third-party integrations.",
  },
  {
    period: "2017 - 2018",
    role: "Front-End Developer",
    company: "Digital Crafts",
    description:
      "Created responsive web applications and optimized existing codebases for performance, reducing load times by 40% through advanced caching and code splitting.",
  },
];
