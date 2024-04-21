import Breadcrumbs from '../../components/ui/Breadcrumbs/Breadcrumbs';
import Products from '../../components/Products/Products';
import PageWrapper from '../../components/ui/PageWrapper/PageWrapper';
import Preloader from '../../components/ui/Preloader/Preloader';
import BadResponceText from '../../components/BadResponceText/BadResponceText';
import { productsAPI } from '../../utils/api/services/ProductsService';
import { useDispatch } from 'react-redux';
import { addFilterCategories } from '../../store/slices/filterSlice';
import { useEffect } from 'react';

const CatalogPage = () => {
  const { data: products, isLoading, isError } = productsAPI.useGetAllProductsQuery();

  const dispatch = useDispatch();

  useEffect(() => {
    if (products) {
      dispatch(addFilterCategories(products));
    }
  }, [dispatch, products]);

  if (isError) {
    return <BadResponceText />;
  }

  return (
    <>
      <Preloader isLoading={isLoading} />
      <PageWrapper>
        <Breadcrumbs />
        {products && <Products products={products} />}
      </PageWrapper>
    </>
  );
};

export default CatalogPage;
