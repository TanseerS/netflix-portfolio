import {
  SiTerraform,
  SiGithubactions,
  SiDocker,
  SiJenkins,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';
import type { IconType } from 'react-icons';

export interface Experience {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  description: string;
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  link: string;
}

export interface StackItem {
  name: string;
  Icon: IconType;
  color: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
}

export interface Social {
  label: string;
  href: string;
  iconKey: 'linkedin' | 'github' | 'x' | 'hashnode' | 'aws';
}

export const recruiterData = {
  name: 'Tanseer Khan',
  role: 'DevOps Engineer',
  company: 'Skillminds LLP',
  location: 'Nashik, India',
  email: 'ktanseer2@gmail.com',
  phone: '+91 87933 14013',
  website: 'tanseer.qd.je',
  websiteHref: 'https://tanseer.qd.je/',
  cvHref: '/cv/Tanseer-Khan-Resume.pdf',
  bio: "Cloud & DevOps Engineer with 1.5 years of hands-on experience architecting highly complex, secure, scalable and cost-optimised cloud infrastructures. Recognised as an AWS Community Builder (Serverless) for active community engagement. Proven ability to lead end-to-end infrastructure design cycles, from whiteboard to deployment, across mobile and web platforms.",
  socials: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/tanseer-khan-a5905b262/', iconKey: 'linkedin' },
    { label: 'GitHub', href: 'https://github.com/TanseerS', iconKey: 'github' },
    { label: 'X', href: 'https://x.com/KhanTanseer2', iconKey: 'x' },
    { label: 'Hashnode', href: 'https://devops-aws-cloud.hashnode.dev/', iconKey: 'hashnode' },
    { label: 'AWS Community Builder', href: 'https://builder.aws.com/community/@tanseer', iconKey: 'aws' },
  ] satisfies Social[],
  experience: [
    {
      company: 'Skillminds LLP',
      role: 'DevOps Engineer',
      period: '2025 — Present',
      current: true,
      description:
        'Designing and managing scalable AWS infrastructure, automating deployment pipelines using GitHub Actions, and provisioning cloud resources following infrastructure-as-code principles.',
    },
    {
      company: 'Skillminds LLP',
      role: 'DevOps Intern',
      period: '2024 — 2025',
      description:
        'Assisted in building and maintaining cloud infrastructure on AWS, gaining hands-on experience with CI/CD pipelines, containerization, and infrastructure automation.',
    },
  ] satisfies Experience[],
  projects: [
    {
      name: 'Serverless Data Pipeline for IoT',
      description:
        'Event-driven serverless pipeline on AWS for ingesting, processing, and storing IoT telemetry at scale, using Lambda, Kinesis, and S3.',
      tags: ['AWS', 'Serverless', 'IoT'],
      link: 'https://github.com/TanseerS/serverless-data-pipeline',
    },
  ] satisfies Project[],
  stack: [
    { name: 'AWS', Icon: FaAws, color: '#ff9900' },
    { name: 'Terraform', Icon: SiTerraform, color: '#7b42bc' },
    { name: 'GitHub Actions', Icon: SiGithubactions, color: '#2088ff' },
    { name: 'Docker', Icon: SiDocker, color: '#2496ed' },
    { name: 'Jenkins', Icon: SiJenkins, color: '#d33833' },
  ] satisfies StackItem[],
  education: [
    {
      school: 'SIES Graduate School of Technology, Mumbai',
      degree: 'B.E. in Information Technology',
      period: '2020 — 2024',
    },
    {
      school: 'SIES Graduate School of Technology, Mumbai',
      degree: 'Honours in Cybersecurity',
      period: '2022 — 2024',
    },
  ] satisfies EducationItem[],
};
