import NextLink from 'next/link';
import { Card, CardTitle, CardDescription, Badge } from '@/components/ui';
import type { BlogPost } from '@/types';

interface PostCardProps {
  post: BlogPost;
}

export function PostCard({ post }: PostCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <NextLink href={`/journal/${post.slug}`} className="block group">
      <Card hover className="h-full">
        {post.coverImage && (
          <div className="aspect-video bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl mb-4 overflow-hidden">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        {!post.coverImage && (
          <div className="aspect-video bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl mb-4 flex items-center justify-center">
            <span className="text-4xl">📝</span>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags?.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <CardTitle className="group-hover:text-secondary transition-colors">
          {post.title}
        </CardTitle>
        <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>

        <div className="mt-4 flex items-center justify-between text-sm text-muted">
          <span>{formattedDate}</span>
          {post.author && <span>By {post.author}</span>}
        </div>
      </Card>
    </NextLink>
  );
}
