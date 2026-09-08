import type { Project } from '../types';
import hospitalImage from '../images/Hopital.png';
import gymImage from '../images/image.png';
import billingImage from '../images/image copy.png';
import restaurantImage from '../images/image copy 2.png';

// Sample portfolio entries — replace with real case studies before launch.
export const projects: Project[] = [
  {
    id: 'ironpulse',
    title: 'IronPulse — Strength Studio',
    category: 'Web App',
    description: 'A bold fitness studio website for memberships, coaching, training plans and gym community engagement.',
    tags: ['React', 'Fitness', 'Responsive UI'],
    accent: 'from-indigo-500 to-blue-500',
    image: gymImage,
    url: 'https://gym-wwyd.vercel.app/',
  },
  {
    id: 'billing-erp',
    title: 'Billing ERP — Business Management Platform',
    category: 'Web App',
    description: 'A modern billing platform for managing invoices, inventory, sales, payments and business operations.',
    tags: ['React', 'ERP', 'Billing'],
    accent: 'from-emerald-500 to-teal-500',
    image: billingImage,
    url: 'https://billing-software-livid-omega.vercel.app/',
  },
  {
    id: 'saffron-ember',
    title: 'Saffron & Ember — Fine Indian Dining',
    category: 'Web App',
    description: 'An atmospheric restaurant website for showcasing the menu, story, gallery and table reservations.',
    tags: ['React', 'Restaurant', 'Reservations'],
    accent: 'from-amber-500 to-orange-500',
    image: restaurantImage,
    url: 'https://restorent-ruddy.vercel.app/',
  },
  {
    id: 'hospital',
    title: 'Hospital — Healthcare Management Platform',
    category: 'Web App',
    description: 'A modern hospital website for exploring healthcare services, departments, doctors, appointments and patient support in one accessible digital experience.',
    tags: ['React', 'Healthcare', 'Appointments'],
    accent: 'from-fuchsia-500 to-pink-500',
    image: hospitalImage,
    url: 'https://hospital-iota-sable.vercel.app/',
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
