interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  description: string;
}

export const educationItems: EducationItem[] = [
  {
    period: "2015 - 2017",
    degree: "Masters in Computer Science",
    institution: "Stanford University",
    description:
      "Specialized in artificial intelligence and machine learning, with a thesis on neural network optimization algorithms.",
  },
  {
    period: "2011 - 2015",
    degree: "Bachelor of Science in Computer Engineering",
    institution: "MIT",
    description:
      "Graduated with honors, focusing on software architecture and distributed systems. Active member of the university's tech innovation lab.",
  },
  {
    period: "2010 - 2011",
    degree: "Certificate in UX Design",
    institution: "Design Academy",
    description:
      "Intensive program covering user research, wireframing, prototyping, and usability testing methodologies.",
  },
];
