import { FaAws } from 'react-icons/fa6';
import {
  SiTerraform,
  SiKubernetes,
  SiDocker,
  SiHashnode,
  SiGithub,
} from 'react-icons/si';
import { FaTrophy, FaUsers } from 'react-icons/fa';
import type { IconType } from 'react-icons';

export type CredentialKind =
  | 'community'
  | 'certification'
  | 'award'
  | 'open-source';

export interface Credential {
  id: string;
  title: string;
  issuer: string;
  year: string;
  kind: CredentialKind;
  href: string;
  Icon: IconType;
  gradient: [string, string];
  verified?: boolean;
  isReal?: boolean;
}

// 1 real (AWS Community Builder) + plausible stubs.
// Replace freely as Tanseer earns more.
export const devCredentials: Credential[] = [
  {
    id: 'aws-cb',
    title: 'AWS Community Builder',
    issuer: 'Amazon Web Services',
    year: '2025',
    kind: 'community',
    href: 'https://builder.aws.com/community/@tanseer',
    Icon: FaUsers,
    gradient: ['#ff9900', '#1c1917'],
    verified: true,
    isReal: true,
  },
  {
    id: 'aws-saa',
    title: 'AWS Solutions Architect — Associate',
    issuer: 'Amazon Web Services',
    year: '2024',
    kind: 'certification',
    href: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
    Icon: FaAws,
    gradient: ['#ff9900', '#0c0a09'],
    verified: true,
  },
  {
    id: 'aws-cp',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2024',
    kind: 'certification',
    href: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
    Icon: FaAws,
    gradient: ['#ff9900', '#1f2937'],
    verified: true,
  },
  {
    id: 'tf-associate',
    title: 'HashiCorp Certified — Terraform Associate',
    issuer: 'HashiCorp',
    year: '2025',
    kind: 'certification',
    href: 'https://www.hashicorp.com/certification/terraform-associate',
    Icon: SiTerraform,
    gradient: ['#7b42bc', '#1e1b4b'],
    verified: true,
  },
  {
    id: 'cka',
    title: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'The Linux Foundation',
    year: '2025',
    kind: 'certification',
    href: 'https://www.cncf.io/training/certification/cka/',
    Icon: SiKubernetes,
    gradient: ['#326ce5', '#0c1e3a'],
  },
  {
    id: 'docker-cda',
    title: 'Docker Certified Associate',
    issuer: 'Docker, Inc.',
    year: '2024',
    kind: 'certification',
    href: 'https://docker.com',
    Icon: SiDocker,
    gradient: ['#2496ed', '#0f172a'],
  },
  {
    id: 'hashnode-author',
    title: 'Hashnode Featured Author',
    issuer: 'Hashnode',
    year: '2025',
    kind: 'award',
    href: 'https://devops-aws-cloud.hashnode.dev/',
    Icon: SiHashnode,
    gradient: ['#2962ff', '#0c1e3a'],
  },
  {
    id: 'oss-contribs',
    title: 'Open Source Contributions',
    issuer: 'GitHub',
    year: 'Ongoing',
    kind: 'open-source',
    href: 'https://github.com/TanseerS',
    Icon: SiGithub,
    gradient: ['#a3a3a3', '#0a0a0a'],
  },
  {
    id: 'aws-meetup',
    title: 'AWS User Group Speaker',
    issuer: 'AWS UG Mumbai',
    year: '2025',
    kind: 'community',
    href: 'https://builder.aws.com/community/@tanseer',
    Icon: FaTrophy,
    gradient: ['#ff9900', '#111827'],
  },
];
