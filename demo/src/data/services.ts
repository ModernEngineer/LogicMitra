import type { Service } from '../types';

export const services: Service[] = [
  {
    slug: 'web-development',
    title: 'Web App Development',
    summary: 'Fast, scalable web applications built with modern frameworks.',
    description:
      'We design and engineer production-grade web applications using React, TypeScript and Node.js — from marketing sites to complex SaaS dashboards, built for performance and long-term maintainability.',
    icon: 'Globe',
    features: ['React / Next.js', 'API design & integration', 'Performance & SEO optimisation', 'Design systems'],
  },
  {
    slug: 'mobile-development',
    title: 'Mobile App Development',
    summary: 'Cross-platform iOS & Android apps from a single codebase.',
    description:
      'Native-feeling mobile experiences built with React Native and Flutter, integrated with your existing backend and shipped to both app stores with CI/CD in place.',
    icon: 'Smartphone',
    features: ['React Native & Flutter', 'Offline-first architecture', 'Push notifications', 'App store release management'],
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps',
    summary: 'Reliable infrastructure that scales with your product.',
    description:
      'We architect cloud infrastructure on AWS, GCP and Azure, set up CI/CD pipelines, containerize workloads and put observability in place so you can ship confidently and scale predictably.',
    icon: 'Cloud',
    features: ['AWS / GCP / Azure', 'Docker & Kubernetes', 'CI/CD pipelines', 'Monitoring & alerting'],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    summary: 'Interfaces that are as usable as they are beautiful.',
    description:
      'A research-driven design process — wireframes, prototypes and design systems — that turns complex workflows into interfaces people enjoy using.',
    icon: 'PenTool',
    features: ['User research', 'Wireframing & prototyping', 'Design systems', 'Usability testing'],
  },
  {
    slug: 'ai-ml-solutions',
    title: 'AI & Automation',
    summary: 'Practical AI features that solve real business problems.',
    description:
      'From LLM-powered assistants to document automation and predictive models, we help you identify where AI adds real value and ship it responsibly.',
    icon: 'BrainCircuit',
    features: ['LLM integrations', 'Workflow automation', 'Data pipelines', 'Model evaluation'],
  },
  {
    slug: 'quality-assurance',
    title: 'QA & Testing',
    summary: 'Automated and manual testing that catches issues early.',
    description:
      'A dedicated QA process combining automated test suites with manual exploratory testing, so regressions are caught before your users find them.',
    icon: 'ShieldCheck',
    features: ['Test automation', 'Manual & exploratory QA', 'Load & performance testing', 'Security testing'],
  },
];
