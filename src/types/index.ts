export interface Service {
  slug: string;
  title: string;
  summary: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  accent: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  initials: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

export interface NavLink {
  label: string;
  path: string;
}
