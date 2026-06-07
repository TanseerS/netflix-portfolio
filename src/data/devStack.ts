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
  SiArgo,
  SiAnsible,
  SiLinux,
  SiPython,
  SiGnubash,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';
import type { IconType } from 'react-icons';

export type Category =
  | 'Cloud'
  | 'IaC'
  | 'Container'
  | 'CI/CD'
  | 'Observability'
  | 'GitOps'
  | 'OS / Scripting';

export type Proficiency = 'Daily' | 'Frequent' | 'Familiar';

export interface TechItem {
  id: string;
  name: string;
  Icon: IconType;
  color: string;
  category: Category;
  proficiency: Proficiency;
}

export const devStack: TechItem[] = [
  { id: 'aws', name: 'AWS', Icon: FaAws, color: '#ff9900', category: 'Cloud', proficiency: 'Daily' },
  { id: 'terraform', name: 'Terraform', Icon: SiTerraform, color: '#7b42bc', category: 'IaC', proficiency: 'Daily' },
  { id: 'gha', name: 'GitHub Actions', Icon: SiGithubactions, color: '#2088ff', category: 'CI/CD', proficiency: 'Daily' },
  { id: 'docker', name: 'Docker', Icon: SiDocker, color: '#2496ed', category: 'Container', proficiency: 'Daily' },
  { id: 'jenkins', name: 'Jenkins', Icon: SiJenkins, color: '#d33833', category: 'CI/CD', proficiency: 'Frequent' },
  { id: 'kubernetes', name: 'Kubernetes', Icon: SiKubernetes, color: '#326ce5', category: 'Container', proficiency: 'Frequent' },
  { id: 'helm', name: 'Helm', Icon: SiHelm, color: '#0f1689', category: 'Container', proficiency: 'Frequent' },
  { id: 'argocd', name: 'ArgoCD', Icon: SiArgo, color: '#ef7b4d', category: 'GitOps', proficiency: 'Familiar' },
  { id: 'ansible', name: 'Ansible', Icon: SiAnsible, color: '#bb0000', category: 'IaC', proficiency: 'Familiar' },
  { id: 'prometheus', name: 'Prometheus', Icon: SiPrometheus, color: '#e6522c', category: 'Observability', proficiency: 'Frequent' },
  { id: 'grafana', name: 'Grafana', Icon: SiGrafana, color: '#f46800', category: 'Observability', proficiency: 'Frequent' },
  { id: 'nginx', name: 'NGINX', Icon: SiNginx, color: '#009639', category: 'OS / Scripting', proficiency: 'Frequent' },
  { id: 'linux', name: 'Linux', Icon: SiLinux, color: '#fcc624', category: 'OS / Scripting', proficiency: 'Daily' },
  { id: 'bash', name: 'Bash', Icon: SiGnubash, color: '#4eaa25', category: 'OS / Scripting', proficiency: 'Daily' },
  { id: 'python', name: 'Python', Icon: SiPython, color: '#3776ab', category: 'OS / Scripting', proficiency: 'Frequent' },
];
