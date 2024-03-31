import { Navigate, useParams } from 'react-router-dom';
import Breadcrumb from '../../components/ui/Breadcrumbs/Breadcrumbs';
import ProductPageComponent from '../../components/Products/ProductPageComponent/ProductPageComponent';
import PageWrapper from '../../components/ui/PageWrapper/PageWrapper';
import Preloader from '../../components/ui/Preloader/Preloader';
import { productsAPI } from '../../utils/api/services/ProductsService';

const ProductPage = () => {
  const params = useParams();

  const { data: product, isLoading, isError } = productsAPI.useGetProductsByIdQuery(params.id);

  if (isError) {
    return <Navigate to={'/404'} replace={true} />;
  }

  return (
    <>
      <Preloader isLoading={isLoading} />
      <PageWrapper>
        <Breadcrumb currentEndpointName={product?.name} />
        <ProductPageComponent currentProduct={product} />
      </PageWrapper>
    </>
  );
};

export default ProductPage;
