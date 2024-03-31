import { TBlogPost } from '../../../types/entities/blog-post-entity';
import { api } from '../base.api';

export const blogPostsAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query<TBlogPost[], void>({
      query: () => ({
        url: `/posts`,
      }),
    }),
    getPostById: builder.query<TBlogPost, string | undefined>({
      query: (id: string | undefined) => ({
        url: `/posts/${id}`,
      }),
    }),
  }),
});
