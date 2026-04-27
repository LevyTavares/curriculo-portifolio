export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
  category: 'web' | 'mobile' | 'backend';
  featured: boolean;
  date: string;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  timezone: string;
}
