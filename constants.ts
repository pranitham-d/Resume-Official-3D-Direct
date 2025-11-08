import { Skill, Experience, Project, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Pranitham Devarakonda",
  title: "Linux | Azure | Infrastructure & Automation Administrator",
  summary: "Automation-focused Linux & Azure Infrastructure Engineer with 2 years of hands-on experience administering RHEL environments and Microsoft Azure cloud platforms. Certified Azure Administrator (AZ-104), skilled in patch management, system reliability, and automation using Ansible, Bash, and Python. Proven success in optimizing performance, reducing downtime, and supporting scalable, secure infrastructure within managed services environments. Detail-oriented and results-driven, with a strong commitment to proactive maintenance, service delivery excellence, and continuous improvement. Seeking to contribute to a dynamic, cloud-focused team in a growth-oriented role.",
  contact: {
    email: "pranitham12374@gmail.com",
    phone: "+91 8096054500",
    website: "https://pranithamdevarakonda.netlify.app/",
  },
  profiles: {
    linkedin: "https://www.linkedin.com/in/pranitham-devarakonda/",
    github: "https://github.com/pranitham-d",
  }
};

export const SKILLS: Skill[] = [
  { name: "RHEL Administration", level: 90 },
  { name: "Microsoft Azure", level: 85 },
  { name: "Ansible", level: 80 },
  { name: "Python", level: 75 },
  { name: "Bash Scripting", level: 88 },
  { name: "Patch Management", level: 92 },
  { name: "Veritas Cluster", level: 70 },
  { name: "ServiceNow", level: 78 },
  { name: "Splunk", level: 72 },
  { name: "VM Provisioning", level: 85 },
  { name: "Incident Response", level: 80 },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Cloud4c Services",
    role: "Linux Engineer",
    period: "June 2024 - Present",
    location: "Hyderabad",
    description: [
      "Administer and monitor a large-scale infrastructure of approximately 330 Linux servers, ensuring optimal performance, availability, and security through 24×7 operational support.",
      "Perform regular patch management and updates, minimizing vulnerabilities and maintaining compliance.",
      "Support build and deployment operations, including provisioning new virtual machines and configuring Veritas Clusters.",
      "Troubleshoot system issues, perform root cause analysis, and implement corrective actions.",
      "Apply basic Ansible automation for routine task execution and system configuration.",
    ],
  },
  {
    company: "Cloud4c Services",
    role: "Digital Ops Intern",
    period: "Feb 2024 - May 2024",
    location: "Hyderabad",
    description: [
      "Worked on ServiceNow ticket categorization and triaging, while monitoring event alerts (CPU, memory, I/O).",
      "Gained practical experience with Azure operations, including snapshot management and basic resource administration.",
      "Assisted in vulnerability management analysis to identify and prioritize security risks.",
      "Collaborated with cross-functional teams to ensure infrastructure stability.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Patch Management Automation",
    description: "Automated the patch management lifecycle of Linux VMs using Ansible scripts to install updates, remove outdated kernels, enhance security posture, and reduce manual overhead in a cloud-based environment.",
    technologies: ["Ansible", "Linux (RHEL)", "Security Updates", "Azure VMs"],
    imageUrl: "https://picsum.photos/seed/project1/400/300",
  },
  {
    title: "Chat-with-PDF Notes System",
    description: "Developed an AI-powered web app for interactive Q&A with PDF documents using Python Flask, LangChain, and a local LLM. Features included local vector search, PDF preview, and chat history.",
    technologies: ["Python", "Flask", "LangChain", "HuggingFace", "FAISS"],
    imageUrl: "https://picsum.photos/seed/project2/400/300",
  },
  {
    title: "Phishing Website Detection",
    description: "Built a machine learning system to detect phishing websites by analyzing URL features. Implemented and evaluated over 10 models, achieving 97.4% accuracy with Gradient Boosting.",
    technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Machine Learning"],
    imageUrl: "https://picsum.photos/seed/project3/400/300",
  },
];

export const CERTIFICATIONS: Certification[] = [
    { name: "Azure Administrator Associate (AZ-104)", issuer: "Microsoft" },
    { name: "LFS101", issuer: "The Linux Foundation" },
    { name: "Intermediate Python Certification", issuer: "Kaggle" },
    { name: "SOC & Cloud Security Fundamentals", issuer: "Palo Alto Networks" },
    { name: "HTML, CSS, and JavaScript for Web Developers", issuer: "Johns Hopkins University" },
    { name: "Java Full Stack Course", issuer: "Wipro" },
];