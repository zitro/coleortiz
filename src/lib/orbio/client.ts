import type { OrbioPost, OrbioResponse } from './types';
import type { BlogPost } from '@/types';
import { fallbackPosts } from '@/data/posts';

const ORBIO_SUBDOMAIN = process.env.ORBIO_SUBDOMAIN || 'co';
const ORBIO_API_KEY = process.env.ORBIO_API_KEY || '';
const ORBIO_BASE_URL = `https://${ORBIO_SUBDOMAIN}.orbiocloud.com/api`;

async function orbioFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T | null> {
  if (!ORBIO_API_KEY) {
    console.warn('OrbioCloud API key not configured, using fallback data');
    return null;
  }

  try {
    const response = await fetch(`${ORBIO_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${ORBIO_API_KEY}`,
        ...options.headers,
      },
      next: { revalidate: 60 }, // Cache for 60 seconds
    });

    if (!response.ok) {
      console.error(`OrbioCloud API error: ${response.status}`);
      return null;
    }

    return response.json();
  } catch (error) {
    console.error('OrbioCloud fetch error:', error);
    return null;
  }
}

function transformOrbioPost(post: OrbioPost): BlogPost {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    publishedAt: post.publishedAt,
    author: post.author?.name,
    coverImage: post.coverImage,
    tags: post.tags,
  };
}

export async function getPosts(): Promise<BlogPost[]> {
  const response = await orbioFetch<OrbioResponse<OrbioPost[]>>('/posts');

  if (!response?.data) {
    return fallbackPosts;
  }

  return response.data.map(transformOrbioPost);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const response = await orbioFetch<OrbioResponse<OrbioPost>>(
    `/posts/${slug}`
  );

  if (!response?.data) {
    // Try fallback posts
    const fallbackPost = fallbackPosts.find((post) => post.slug === slug);
    return fallbackPost || null;
  }

  return transformOrbioPost(response.data);
}

export async function getPostSlugs(): Promise<string[]> {
  const posts = await getPosts();
  return posts.map((post) => post.slug);
}
