import { GitHubIcon } from '@/components/icons/github'
import { LinkedInIcon } from '@/components/icons/linkedin'
import { TelegramIcon } from '@/components/icons/telegram'
import { GitHubActionsIcon } from '@/components/icons/tags/githubActions'
import { ZomatoIcon } from '@/components/icons/tags/zomato'
import { UberIcon } from '@/components/icons/tags/uber'
import { PrometheusIcon } from '@/components/icons/tags/prometheus'
import { AWSEKSIcon } from '@/components/icons/tags/awsEKS'
import { LinuxIcon } from '@/components/icons/tags/linux'
import { JenkinsIcon } from '@/components/icons/tags/jenkins'
import { KubernetesIcon } from '@/components/icons/tags/kubernetes'
import { DockerIcon } from '@/components/icons/tags/docker'
import { AzureIcon } from '@/components/icons/tags/azure'
import { AWSIcon } from '@/components/icons/tags/aws'
import { TerraformIcon } from '@/components/icons/tags/terraform'
import { AnsibleIcon } from '@/components/icons/tags/ansible'
import { AzureDevOpsIcon } from '@/components/icons/tags/azureDevOps'
import { DevOpsIcon } from '@/components/icons/tags/devops'
import { FileTextIcon, LinkIcon, MailIcon } from 'lucide-react'

export const AVATAR = {
  name: 'Dushyanth',
  initials: 'DB'
}

export const ABOUT = {
  title: `Cloud & DevOps Engineer specializing in AWS infrastructure, automation, and scalable solutions. Based in United States 🇺🇸`,
  description: `I'm a passionate Cloud & DevOps Engineer with expertise in AWS infrastructure, automation, and modern deployment practices. With a strong foundation in cloud computing, infrastructure as code, and DevOps methodologies, I specialize in building resilient, scalable systems and optimizing operational workflows. My experience spans across AWS services, Kubernetes orchestration, CI/CD pipeline development, and infrastructure automation using Terraform and PowerShell. I focus on implementing security best practices, cost optimization strategies, and creating robust monitoring solutions to ensure high availability and performance of cloud-native applications.`
}

export const LINKS = [
  {
    title: 'GitHub',
    url: 'https://github.com/dushf12',
    icon: GitHubIcon
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dushyanthbandaru/',
    icon: LinkedInIcon
  },
  {
    title: 'Resume',
    url: 'https://cv2-nu.vercel.app/',
    icon: FileTextIcon
  },
  {
    title: 'Portfolio',
    url: '',
    icon: LinkIcon
  }
]

export const CAREER = [
  {
    company: 'Optus InfoTech',
    link: 'https://optusinfotech.com',
    badges: ['Full-time'],
    jobs: [
      {
        title: 'Software Associate (AWS)',
        start: 'Sep, 2021',
        end: 'Oct, 2024',
        description: [
          'Developed PowerShell automation for EC2/RDS provisioning with scoped IAM roles, reducing environment setup time by 65%.',
          'Created modular Terraform stacks with input validation and backend state locking, improving infrastructure consistency across teams.',
          'Designed secure CI/CD pipelines using GitHub Actions and Jenkins, reducing release rollback incidents by 70%.',
          'Deployed microservices on ECS Fargate and Kubernetes with autoscaling, improving app performance by 45%.',
          'Integrated Grafana, Prometheus, and CloudWatch for full-stack observability, cutting incident response time by 50%.'
        ]
      }
    ]
  },
  {
    company: 'Florida State University',
    link: 'https://fsu.edu',
    badges: ['Graduate'],
    jobs: [
      {
        title: 'Master of Science in Information Technology',
        start: 'Jan, 2023',
        end: 'Dec, 2024',
        description: [
          'Advanced studies in cloud computing, DevOps practices, and modern software development methodologies.',
          'Specialized coursework in AWS services, containerization, and infrastructure automation.',
          'Research focus on scalable cloud architectures and operational excellence.'
        ]
      }
    ]
  },
  {
    company: 'Jawaharlal Nehru Technological University',
    link: 'https://jntuh.ac.in',
    badges: ['Undergraduate'],
    jobs: [
      {
        title: 'Bachelor of Technology in Information Technology',
        start: 'Jul, 2017',
        end: 'Aug, 2021',
        description: [
          'Comprehensive foundation in software engineering, database systems, and network technologies.',
          'Published research paper on "Student Placement Prediction Using Machine Learning".',
          'Developed strong analytical DSA and problem-solving skills through hands-on projects.'
        ]
      }
    ]
  }
];

const TAGS = {
  GITHUB: {
    name: 'GitHub',
    icon: GitHubIcon
  },
  GITHUB_ACTIONS: {
    name: 'GitHub Actions',
    icon: GitHubActionsIcon
  },
  ZOMATO: {
    name: 'Zomato',
    icon: ZomatoIcon
  },
  UBER: {
    name: 'Uber',
    icon: UberIcon
  },
  PROMETHEUS: {
    name: 'Prometheus',
    icon: PrometheusIcon
  },
  AWS_EKS: {
    name: 'AWS EKS',
    icon: AWSEKSIcon
  },
  LINUX: {
    name: 'Linux',
    icon: LinuxIcon
  },
  JENKINS: {
    name: 'Jenkins',
    icon: JenkinsIcon
  },
  KUBERNETES: {
    name: 'Kubernetes',
    icon: KubernetesIcon
  },
  DOCKER: {
    name: 'Docker',
    icon: DockerIcon
  },
  AZURE: {
    name: 'Azure',
    icon: AzureIcon
  },
  AWS: {
    name: 'AWS',
    icon: AWSIcon
  },
  TERRAFORM: {
    name: 'Terraform',
    icon: TerraformIcon
  },
  ANSIBLE: {
    name: 'Ansible',
    icon: AnsibleIcon
  },
  AZURE_DEVOPS: {
    name: 'Azure DevOps',
    icon: AzureDevOpsIcon
  },
  DEVOPS: {
    name: 'DevOps',
    icon: DevOpsIcon
  }
}

export const PROJECTS = [
  {
    title: 'Automated AWS Infrastructure Management',
    tags: [TAGS.AWS, TAGS.TERRAFORM, TAGS.DOCKER, TAGS.KUBERNETES, TAGS.LINUX, TAGS.JENKINS, TAGS.DEVOPS],
    description: 'Comprehensive infrastructure automation platform using Terraform, PowerShell, and AWS services. Features multi-account support, automated provisioning, and compliance monitoring with 65% reduction in setup time.',
    link: {
      github: 'https://github.com/dushf12?tab=repositories',
      preview: 'https://infra-automation.demo.com'
    },
  },
  {
    title: 'CI/CD Pipeline Optimization Suite',
    tags: [TAGS.GITHUB_ACTIONS, TAGS.JENKINS, TAGS.DOCKER, TAGS.KUBERNETES, TAGS.DEVOPS],
    description: 'Advanced CI/CD pipeline implementation using GitHub Actions, Jenkins, and Argo CD. Includes automated testing, security scanning, and deployment validation with 70% reduction in rollback incidents.',
    link: {
      github: 'https://github.com/dushf12?tab=repositories',
      preview: 'https://cicd-suite.demo.com'
    },
  },
  {
    title: 'Cloud Monitoring & Observability Platform',
    tags: [TAGS.AWS, TAGS.PROMETHEUS, TAGS.GITHUB_ACTIONS, TAGS.DEVOPS],
    description: 'Full-stack monitoring solution integrating Grafana, Prometheus, and CloudWatch. Features custom metrics, anomaly detection, and automated alerting with 50% faster incident response.',
    link: {
      github: 'https://github.com/dushf12?tab=repositories',
      preview: 'https://monitoring.demo.com'
    },
  },
  {
    title: 'Multi-Region Disaster Recovery System',
    tags: [TAGS.AWS, TAGS.TERRAFORM, TAGS.DEVOPS],
    description: 'Automated disaster recovery solution with multi-region failover capabilities for RDS and S3. Achieves 99.99% durability and 15-minute recovery point objective.',
    link: {
      github: 'https://github.com/dushf12?tab=repositories',
      preview: 'https://dr-system.demo.com'
    },
  },
  {
    title: 'Security Compliance Automation',
    tags: [TAGS.AWS, TAGS.LINUX, TAGS.DEVOPS],
    description: 'Automated compliance monitoring and security auditing system using Bash and AWS CLI. Provides daily audit logs across IAM, EC2, and S3 with rapid forensic analysis capabilities.',
    link: {
      github: 'https://github.com/dushf12?tab=repositories',
      preview: 'https://compliance.demo.com'
    },
  },
  {
    title: 'Cost Optimization & Resource Management',
    tags: [TAGS.AWS, TAGS.TERRAFORM, TAGS.DEVOPS],
    description: 'Intelligent cloud cost optimization platform with automated resource tracking across EC2, RDS, S3, and CloudFront. Achieved 30% cost savings through automated resource management.',
    link: {
      github: 'https://github.com/dushf12?tab=repositories',
      preview: 'https://cost-opt.demo.com'
    },
  }
];
