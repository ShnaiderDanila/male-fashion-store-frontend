import BadResponceText from '../../components/BadResponceText/BadResponceText';
import BlogHeader from '../../components/Blog/BlogHeader/BlogHeader';
import BlogList from '../../components/Blog/BlogPostList/BlogPostList';
import PageWrapper from '../../components/ui/PageWrapper/PageWrapper';
import Preloader from '../../components/ui/Preloader/Preloader';
import { blogPostsAPI } from '../../utils/api/services/BlogPostsService';

const BlogPage = () => {
  const { data: posts, isLoading, isError } = blogPostsAPI.useGetAllPostsQuery();

  if (isError) {
    return <BadResponceText />;
  }

  return (
    <>
      <Preloader isLoading={isLoading} />
      <PageWrapper>
        <BlogHeader />
        {posts && <BlogList posts={posts} />}
      </PageWrapper>
    </>
  );
};

export default BlogPage;
