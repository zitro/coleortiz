export interface OrbioPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  author?: {
    name: string;
    avatar?: string;
  };
  coverImage?: string;
  tags?: string[];
}

export interface OrbioResponse<T> {
  data: T;
  meta?: {
    total: number;
    page: number;
    limit: number;
  };
}

export interface OrbioError {
  message: string;
  code: string;
}
