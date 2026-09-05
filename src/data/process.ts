import type { ProcessStep, StatItem } from '../types';

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    description: 'We start with a scoping workshop to understand your goals, users and technical constraints.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Wireframes and prototypes turn requirements into a clear, testable plan before a line of code is written.',
  },
  {
    step: '03',
    title: 'Build',
    description: 'Engineering happens in short, visible milestones so you always know exactly where the project stands.',
  },
  {
    step: '04',
    title: 'Launch & Support',
    description: 'We handle deployment, monitoring and ongoing support so the product keeps running smoothly after launch.',
  },
];

// Note: these figures are illustrative placeholders — replace with your company's real numbers.
export const stats: StatItem[] = [
  { label: 'Projects delivered', value: 120, suffix: '+' },
  { label: 'Client satisfaction', value: 98, suffix: '%' },
  { label: 'Engineers on team', value: 35, suffix: '+' },
  { label: 'Years in operation', value: 7, suffix: '+' },
];
