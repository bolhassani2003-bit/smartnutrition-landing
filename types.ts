import { LucideIcon } from 'lucide-react';

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon?: LucideIcon;
  type?: 'link' | 'social' | 'contact';
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SocialItem {
  id: string;
  title: string;
  url: string;
  icon: LucideIcon;
}
