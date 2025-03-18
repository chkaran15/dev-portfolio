interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Working with this developer was an incredible experience. They delivered a complex application ahead of schedule and with exceptional quality. Their attention to detail and problem-solving skills are outstanding.",
    name: "Sarah Johnson",
    role: "CEO",
    company: "Elevate Digital",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
  },
  {
    quote:
      "I was impressed by their ability to translate our complex requirements into a user-friendly application. They're not just a developer, but a strategic partner who understands business needs.",
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateHub",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
  },
  {
    quote:
      "Their technical expertise is matched only by their communication skills. We always knew the status of our project and felt confident in their solutions to complex technical challenges.",
    name: "Alexandra Torres",
    role: "CTO",
    company: "TechForward",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
  },
  {
    quote:
      "The level of code quality and documentation exceeded our expectations. Six months after project completion, we're still benefiting from the maintainable and scalable architecture they designed.",
    name: "David Kim",
    role: "Engineering Director",
    company: "FutureSoft",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
  },
];
