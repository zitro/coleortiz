export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface Venture {
  name: string;
  role: string;
  description: string;
  href: string;
  logo?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  author?: string;
  coverImage?: string;
  tags?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  turnstileToken: string;
}

export interface FilmProject {
  title: string;
  year: number;
  description: string;
  role: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  awards?: string[];
}

export interface MusicProject {
  title: string;
  artist?: string;
  year: number;
  description?: string;
  embedUrl?: string;
  coverUrl?: string;
}

export interface ActingCredit {
  title: string;
  role: string;
  year: number;
  type: 'film' | 'tv' | 'theater' | 'commercial';
  director?: string;
}
