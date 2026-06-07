import {
  SiTerraform,
  SiDocker,
  SiJenkins,
  SiGithubactions,
  SiKubernetes,
  SiHelm,
  SiPrometheus,
  SiGrafana,
  SiNginx,
  SiVault,
  SiPulumi,
  SiArgo,
  SiAnsible,
  SiCloudflare,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';
import type { IconType } from 'react-icons';

export interface DevProject {
  id: string;
  title: string;
  tagline: string;
  tech: string[];
  link?: string;
  Icon: IconType;
  gradient: [string, string];
  topTenRank?: number;
  recentlyAdded?: boolean;
  isReal?: boolean;
}

// 1 real project + 14 plausible DevOps stubs.
// Replace title/tagline/link with real entries as projects ship.
export const devProjects: DevProject[] = [
  {
    id: 'serverless-iot',
    title: 'Serverless Data Pipeline for IoT',
    tagline: 'Event-driven ingest on AWS Lambda, Kinesis, S3',
    tech: ['AWS', 'Lambda', 'Kinesis'],
    link: 'https://github.com/TanseerS/serverless-data-pipeline',
    Icon: FaAws,
    gradient: ['#ff9900', '#1f2937'],
    topTenRank: 1,
    isReal: true,
  },
  {
    id: 'terraform-modules',
    title: 'Multi-Region Terraform Modules',
    tagline: 'Composable IaC for VPC, EKS, RDS across regions',
    tech: ['Terraform', 'AWS'],
    Icon: SiTerraform,
    gradient: ['#7b42bc', '#1e1b4b'],
    topTenRank: 2,
  },
  {
    id: 'gha-zero-downtime',
    title: 'Zero-Downtime Deploys with GitHub Actions',
    tagline: 'Blue/green pipeline with health gates and auto-rollback',
    tech: ['GitHub Actions', 'AWS', 'ECS'],
    Icon: SiGithubactions,
    gradient: ['#2088ff', '#0c1e3a'],
    topTenRank: 3,
    recentlyAdded: true,
  },
  {
    id: 'docker-microservices',
    title: 'Dockerized Microservices Stack',
    tagline: 'Local compose + ECS Fargate parity for 8 services',
    tech: ['Docker', 'ECS', 'Compose'],
    Icon: SiDocker,
    gradient: ['#2496ed', '#0f172a'],
  },
  {
    id: 'jenkins-pac-lib',
    title: 'Jenkins Pipeline-as-Code Library',
    tagline: 'Shared library for build, scan, deploy across 20+ repos',
    tech: ['Jenkins', 'Groovy'],
    Icon: SiJenkins,
    gradient: ['#d33833', '#1c1917'],
    topTenRank: 4,
  },
  {
    id: 'eks-bootstrap',
    title: 'EKS Cluster Bootstrap Toolkit',
    tagline: 'One-command bring-up — networking, addons, observability',
    tech: ['Kubernetes', 'EKS', 'Terraform'],
    Icon: SiKubernetes,
    gradient: ['#326ce5', '#0c1e3a'],
    recentlyAdded: true,
  },
  {
    id: 'helm-charts',
    title: 'Internal Helm Chart Library',
    tagline: 'Opinionated charts for stateless apps + cronjobs',
    tech: ['Helm', 'Kubernetes'],
    Icon: SiHelm,
    gradient: ['#0f1689', '#020617'],
  },
  {
    id: 'cost-optimizer',
    title: 'AWS Cost Optimizer Dashboard',
    tagline: 'Cross-account spend insights with rightsizing hints',
    tech: ['AWS', 'Athena', 'QuickSight'],
    Icon: FaAws,
    gradient: ['#ff9900', '#111827'],
    topTenRank: 5,
  },
  {
    id: 'prometheus-stack',
    title: 'Prometheus Observability Stack',
    tagline: 'Federated scrape, recording rules, SLO burn alerts',
    tech: ['Prometheus', 'Alertmanager'],
    Icon: SiPrometheus,
    gradient: ['#e6522c', '#1c1917'],
  },
  {
    id: 'grafana-dashboards',
    title: 'Golden-Signal Grafana Dashboards',
    tagline: 'Latency, traffic, errors, saturation per service',
    tech: ['Grafana', 'Loki'],
    Icon: SiGrafana,
    gradient: ['#f46800', '#0c0a09'],
  },
  {
    id: 'argocd-gitops',
    title: 'ArgoCD GitOps Pipeline',
    tagline: 'App-of-apps pattern with progressive sync',
    tech: ['ArgoCD', 'Kubernetes'],
    Icon: SiArgo,
    gradient: ['#ef7b4d', '#1e1b4b'],
    topTenRank: 6,
    recentlyAdded: true,
  },
  {
    id: 'ansible-baseline',
    title: 'Ansible Baseline Hardening',
    tagline: 'CIS benchmark roles for Amazon Linux + Ubuntu',
    tech: ['Ansible', 'Linux'],
    Icon: SiAnsible,
    gradient: ['#bb0000', '#0a0a0a'],
  },
  {
    id: 'vault-secrets',
    title: 'Vault Secrets Rotation Workflow',
    tagline: 'Dynamic DB creds + KV2 sync to K8s with CSI driver',
    tech: ['Vault', 'Kubernetes'],
    Icon: SiVault,
    gradient: ['#ffd814', '#1c1917'],
  },
  {
    id: 'nginx-edge',
    title: 'NGINX Edge Reverse-Proxy',
    tagline: 'mTLS termination + per-route rate limits',
    tech: ['NGINX', 'Lua'],
    Icon: SiNginx,
    gradient: ['#009639', '#052e16'],
  },
  {
    id: 'cf-workers',
    title: 'Cloudflare Workers URL Shortener',
    tagline: 'Edge-rendered redirects with KV-backed analytics',
    tech: ['Cloudflare', 'Workers'],
    Icon: SiCloudflare,
    gradient: ['#f48120', '#1c1917'],
  },
  {
    id: 'pulumi-platform',
    title: 'Pulumi Platform Stack',
    tagline: 'Typed IaC for internal devs — paved-road components',
    tech: ['Pulumi', 'TypeScript'],
    Icon: SiPulumi,
    gradient: ['#8a3391', '#020617'],
    recentlyAdded: true,
  },
];
