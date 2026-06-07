import { FaAws } from 'react-icons/fa6';
import { SiDocker } from 'react-icons/si';
import type { IconType } from 'react-icons';

export interface Episode {
  number: number;
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
  Icon: IconType;
  gradient: [string, string];
  current?: boolean;
}

export const devEpisodes: Episode[] = [
  {
    number: 1,
    role: 'DevOps Intern',
    company: 'Skillminds LLP',
    period: '2024 — 2025',
    description:
      'Assisted in building and maintaining cloud infrastructure on AWS, gaining hands-on experience with CI/CD pipelines, containerization, and infrastructure automation.',
    tech: ['AWS', 'Docker', 'CI/CD', 'Linux'],
    Icon: SiDocker,
    gradient: ['#2496ed', '#0c1e3a'],
  },
  {
    number: 2,
    role: 'DevOps Engineer',
    company: 'Skillminds LLP',
    period: '2025 — Present',
    description:
      'Designing and managing scalable AWS infrastructure, automating deployment pipelines using GitHub Actions, and provisioning cloud resources following infrastructure-as-code principles.',
    tech: ['AWS', 'Terraform', 'GitHub Actions', 'IaC'],
    Icon: FaAws,
    gradient: ['#ff9900', '#1f1f23'],
    current: true,
  },
];

