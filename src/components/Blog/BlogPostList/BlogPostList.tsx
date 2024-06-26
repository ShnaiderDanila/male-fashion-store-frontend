import { FC } from 'react';

import BlogPost from '../BlogPost/BlogPost';

import Container from '../../ui/Container/Container';

import { TBlogPost } from '../../../types/entities/blog-post-entity';

interface BlogPostListProps {
  posts: TBlogPost[];
}

const BlogPostList: FC<BlogPostListProps> = ({ posts }) => {
  return (
    <section>
      <Container>
        <ul className="flex flex-wrap justify-center gap-5 pt-14 lg:pt-20 pb-14">
          {posts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default BlogPostList;
