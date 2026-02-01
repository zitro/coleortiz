'use client';

import { StaggerContainer, StaggerItem } from '@/components/animations';
import { PostCard } from './PostCard';
import type { BlogPost } from '@/types';

interface PostListProps {
  posts: BlogPost[];
}

export function PostList({ posts }: PostListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted text-lg">No posts available yet.</p>
      </div>
    );
  }

  return (
    <StaggerContainer
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      staggerDelay={0.1}
    >
      {posts.map((post) => (
        <StaggerItem key={post.id}>
          <PostCard post={post} />
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
