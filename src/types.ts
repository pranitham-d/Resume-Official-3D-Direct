export interface Skill {
  name: string;
  level: number;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
}

export interface Certification {
  name: string;
  issuer: string;
}