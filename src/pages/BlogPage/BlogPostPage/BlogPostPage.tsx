import { Navigate, useParams } from 'react-router-dom';

import Breadcrumb from '../../../components/ui/Breadcrumbs/Breadcrumbs';
import PageWrapper from '../../../components/ui/PageWrapper/PageWrapper';
import Container from '../../../components/ui/Container/Container';
import Preloader from '../../../components/ui/Preloader/Preloader';
import { formatCreationDate } from '../../../utils/functions/formatCreationDate';
import { blogPostsAPI } from '../../../utils/api/services/BlogPostsService';

const BlogPostPage = () => {
  const params = useParams();

  const { data: post, isLoading, isError } = blogPostsAPI.useGetPostByIdQuery(params.id);

  if (isError) {
    return <Navigate to={'/404'} replace={true} />;
  }

  return (
    <>
      <Preloader isLoading={isLoading} />
      <PageWrapper>
        <Breadcrumb currentEndpointName={post?.title} />
        <section className="py-16 sm:py-24 text-center">
          <Container>
            <h2 className="text-3xl mb-5">{post?.title}</h2>
            <p className="text-primary-light mb-5">{formatCreationDate(post?.createdAt)}</p>
            <h3 className="m-auto mb-5">{post?.subTitle}</h3>
            <img
              className="max-w-full max-h-full m-auto mb-5"
              src={`${import.meta.env.VITE_REACT_API_URL}/${post?.image}`}
              alt=""
            />
            <p>{post?.description}</p>
          </Container>
        </section>
      </PageWrapper>
    </>
  );
};

export default BlogPostPage;
