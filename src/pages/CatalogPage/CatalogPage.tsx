import { productsAPI } from '../../utils/api/services/ProductsService';

import Breadcrumbs from '../../components/ui/Breadcrumbs/Breadcrumbs';
import Products from '../../components/Products/Products';
import PageWrapper from '../../components/ui/PageWrapper/PageWrapper';
import Preloader from '../../components/ui/Preloader/Preloader';

const CatalogPage = () => {
  const { data: products, isLoading, isError } = productsAPI.useGetAllProductsQuery();

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
        <Breadcrumbs />
        <Products products={products} />
      </PageWrapper>
    </>
  );
};

export default CatalogPage;
