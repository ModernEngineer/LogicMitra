import type { Project } from '../types';

// Sample portfolio entries — replace with real case studies before launch.
export const projects: Project[] = [
  {
    id: 'fintrack',
    title: 'FinTrack — Expense Analytics Platform',
    category: 'Web App',
    description: 'A multi-tenant analytics dashboard for finance teams to track spend across departments in real time.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    accent: 'from-indigo-500 to-blue-500',
  },
  {
    id: 'medqueue',
    title: 'MedQueue — Clinic Appointment System',
    category: 'Mobile App',
    description: 'A patient-facing booking app with real-time queue tracking, cutting average clinic wait time significantly.',
    tags: ['React Native', 'Firebase'],
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'shopcart',
    title: 'ShopCart — Headless Commerce Storefront',
    category: 'E-commerce',
    description: 'A headless storefront with sub-second page loads and a modular checkout built for high-traffic sales events.',
    tags: ['Next.js', 'Stripe', 'Redis'],
    accent: 'from-fuchsia-500 to-pink-500',
  },
  {
    id: 'opsight',
    title: 'OpSight — DevOps Observability Suite',
    category: 'Cloud',
    description: 'Unified logging, metrics and alerting for microservice fleets, deployed across AWS and Kubernetes.',
    tags: ['Kubernetes', 'Grafana', 'Go'],
    accent: 'from-amber-500 to-orange-500',
  },
  {
    id: 'docmind',
    title: 'DocMind — AI Document Assistant',
    category: 'AI / ML',
    description: 'An LLM-powered assistant that extracts, summarises and answers questions over large document sets.',
    tags: ['LLMs', 'Python', 'Vector Search'],
    accent: 'from-violet-500 to-indigo-500',
  },
  {
    id: 'routewise',
    title: 'RouteWise — Fleet Logistics Dashboard',
    category: 'Web App',
    description: 'A live fleet-tracking and route optimisation dashboard used by logistics operators to cut fuel costs.',
    tags: ['React', 'Mapbox', 'PostgreSQL'],
    accent: 'from-sky-500 to-cyan-500',
  },
];

export const projectCategories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];
