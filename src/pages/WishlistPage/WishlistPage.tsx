import { Container } from '@mui/material';
import ProductList from '../../components/Products/ProductsList/ProductList';
import PageWrapper from '../../components/ui/PageWrapper/PageWrapper';
import Preloader from '../../components/ui/Preloader/Preloader';
import { userAPI } from '../../utils/api/services/UserService';
import BadResponceText from '../../components/BadResponceText/BadResponceText';
import { useState } from 'react';

const WishlistPage = () => {
  const { data: wishlist, isLoading, isError } = userAPI.useGetCurrentUserWishlistQuery();

  const [currentPage, setCurrentPage] = useState(1);

  if (isError) {
    return <BadResponceText />;
  }

  return (
    <>
      <Preloader isLoading={isLoading} />
      <PageWrapper>
        <section className="pt-10 pb-48">
          <Container>
            <h2 className="text-center text-2xl mb-10 font-semibold">Избранное</h2>
            {wishlist && (
              <ProductList
                products={wishlist}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            )}
          </Container>
        </section>
      </PageWrapper>
    </>
  );
};

export default WishlistPage;
