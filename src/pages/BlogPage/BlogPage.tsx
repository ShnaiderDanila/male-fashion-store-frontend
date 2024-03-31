import BlogHeader from '../../components/Blog/BlogHeader/BlogHeader';
import BlogList from '../../components/Blog/BlogPostList/BlogPostList';
import PageWrapper from '../../components/ui/PageWrapper/PageWrapper';
import Preloader from '../../components/ui/Preloader/Preloader';
import { blogPostsAPI } from '../../utils/api/services/BlogPostsService';

const BlogPage = () => {
  const { data: posts, isLoading, isError } = blogPostsAPI.useGetAllPostsQuery();

  if (isError) {
    return (
      <h3 className="text-center text-2xl m-auto">
        К сожалению не удалось загрузить страницу! <br></br>Пожалуйста повторите попытку позже.
      </h3>
    );
  }

  return (
    <>
      <Preloader isLoading={isLoading} />
      <PageWrapper>
        <BlogHeader />
        <BlogList posts={posts} />
      </PageWrapper>
    </>
  );
};

export default BlogPage;
