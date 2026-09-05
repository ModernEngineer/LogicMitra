import type { JobOpening } from '../types';

export const jobOpenings: JobOpening[] = [
  {
    id: 'j1',
    title: 'Senior Frontend Engineer (React)',
    department: 'Engineering',
    location: 'Remote / Prayagraj',
    type: 'Full-time',
    description: 'Build and ship client-facing React applications, working closely with design and backend engineering.',
  },
  {
    id: 'j2',
    title: 'Backend Engineer (Node.js)',
    department: 'Engineering',
    location: 'Remote / Prayagraj',
    type: 'Full-time',
    description: 'Design APIs and data models that power multiple client products, with a focus on reliability and performance.',
  },
  {
    id: 'j3',
    title: 'Product Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    description: 'Own the design process end-to-end for client engagements, from research through to final UI.',
  },
  {
    id: 'j4',
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote',
    type: 'Full-time',
    description: 'Own CI/CD, cloud infrastructure and observability across our client projects.',
  },
  {
    id: 'j5',
    title: 'QA Engineer',
    department: 'Quality',
    location: 'Remote / Prayagraj',
    type: 'Contract',
    description: 'Build automated test suites and lead manual QA passes across active client projects.',
  },
];

export const perks = [
  { title: 'Remote-friendly', description: 'Work from anywhere, with quarterly team meetups.' },
  { title: 'Learning budget', description: 'Annual budget for courses, books and conferences.' },
  { title: 'Health coverage', description: 'Comprehensive health insurance for you and your family.' },
  { title: 'Flexible hours', description: 'Outcome-focused culture — work the hours that suit you.' },
  { title: 'Latest equipment', description: 'A machine and setup of your choice, refreshed regularly.' },
  { title: 'Paid time off', description: 'Generous annual leave plus company holidays.' },
];
