export interface Article {
  id: string;
  title: string;
  brief: string;
  tag: string;
  readTime: string;
  date: string; // e.g. "Mar 12, 2025"
  href: string;
  gradient: [string, string];
  isNew?: boolean;
}

// Plausible DevOps / AWS posts for the row.
// Replace with real Hashnode entries once available.
const BLOG_BASE = 'https://devops-aws-cloud.hashnode.dev/';

export const devArticles: Article[] = [
  {
    id: 'iac-modules',
    title: 'Designing Reusable Terraform Modules for Multi-Region Workloads',
    brief:
      'Composable building blocks for VPC, EKS and RDS that scale across AWS regions without copy-paste sprawl.',
    tag: 'Terraform',
    readTime: '11 min read',
    date: 'Jul 18, 2025',
    href: BLOG_BASE,
    gradient: ['#7b42bc', '#1e1b4b'],
    isNew: true,
  },
  {
    id: 'zero-downtime-gha',
    title: 'Shipping Zero-Downtime Deploys with GitHub Actions and ECS',
    brief:
      'Blue/green pipelines, health gates, automatic rollback — and the subtle traps we hit on the way.',
    tag: 'CI/CD',
    readTime: '9 min read',
    date: 'Jun 02, 2025',
    href: BLOG_BASE,
    gradient: ['#2088ff', '#0c1e3a'],
    isNew: true,
  },
  {
    id: 'serverless-iot',
    title: 'A Serverless Data Pipeline for IoT — Lambda, Kinesis, S3',
    brief:
      'Walkthrough of a low-cost, event-driven ingest path that scales from 10 devices to 100k.',
    tag: 'Serverless',
    readTime: '14 min read',
    date: 'Apr 21, 2025',
    href: BLOG_BASE,
    gradient: ['#ff9900', '#1f2937'],
  },
  {
    id: 'cost-savings',
    title: 'Five AWS Cost Wins You Can Apply This Week',
    brief:
      'Gateway endpoints, Graviton, S3 IA, Savings Plans, and the right CloudWatch retention setting.',
    tag: 'AWS',
    readTime: '7 min read',
    date: 'Apr 03, 2025',
    href: BLOG_BASE,
    gradient: ['#ff9900', '#0c0a09'],
  },
  {
    id: 'docker-prod',
    title: 'Production-Grade Dockerfiles — Slim, Cached, Reproducible',
    brief:
      'Multi-stage builds, BuildKit cache mounts, and a checklist for image hygiene.',
    tag: 'Docker',
    readTime: '8 min read',
    date: 'Mar 14, 2025',
    href: BLOG_BASE,
    gradient: ['#2496ed', '#0f172a'],
  },
  {
    id: 'eks-bootstrap',
    title: 'Bootstrapping an EKS Cluster the Boring Way',
    brief:
      'IAM, networking, addons and observability — a checklist you can hand to a junior engineer.',
    tag: 'Kubernetes',
    readTime: '12 min read',
    date: 'Feb 27, 2025',
    href: BLOG_BASE,
    gradient: ['#326ce5', '#0c1e3a'],
  },
  {
    id: 'argocd-gitops',
    title: 'GitOps with ArgoCD — App-of-Apps, In Practice',
    brief:
      'Progressive sync, sync waves, and how we wired drift detection into incident response.',
    tag: 'GitOps',
    readTime: '10 min read',
    date: 'Feb 09, 2025',
    href: BLOG_BASE,
    gradient: ['#ef7b4d', '#1e1b4b'],
  },
  {
    id: 'prometheus-slo',
    title: 'Practical SLO Burn-Rate Alerts in Prometheus',
    brief:
      'Fast and slow burn rates, recording rules, and silencing the noise during incidents.',
    tag: 'Observability',
    readTime: '13 min read',
    date: 'Jan 22, 2025',
    href: BLOG_BASE,
    gradient: ['#e6522c', '#1c1917'],
  },
  {
    id: 'vault-rotation',
    title: 'Rotating Database Credentials with Vault — Without Downtime',
    brief:
      'Dynamic secrets, lease tuning, and the CSI driver that ties it back to Kubernetes pods.',
    tag: 'Security',
    readTime: '11 min read',
    date: 'Jan 05, 2025',
    href: BLOG_BASE,
    gradient: ['#ffd814', '#1c1917'],
  },
  {
    id: 'jenkins-shared-lib',
    title: 'A Jenkins Shared Library That Engineers Actually Like',
    brief:
      'Patterns for declarative-friendly steps, semver-pinned consumers, and easy local testing.',
    tag: 'Jenkins',
    readTime: '9 min read',
    date: 'Dec 14, 2024',
    href: BLOG_BASE,
    gradient: ['#d33833', '#1c1917'],
  },
  {
    id: 'helm-charts',
    title: 'Building an Internal Helm Chart Library',
    brief:
      'Opinionated defaults, value-file ergonomics, and how we ship a chart per release.',
    tag: 'Helm',
    readTime: '8 min read',
    date: 'Nov 30, 2024',
    href: BLOG_BASE,
    gradient: ['#0f1689', '#020617'],
  },
  {
    id: 'cf-workers-edge',
    title: 'Edge Redirects with Cloudflare Workers — KV, Analytics, Cost',
    brief:
      'A small but surprisingly resilient URL shortener built entirely on the edge.',
    tag: 'Cloudflare',
    readTime: '6 min read',
    date: 'Nov 08, 2024',
    href: BLOG_BASE,
    gradient: ['#f48120', '#1c1917'],
  },
];
