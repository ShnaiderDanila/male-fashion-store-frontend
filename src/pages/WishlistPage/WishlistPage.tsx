import { Container } from '@mui/material';
import ProductList from '../../components/Products/ProductsList/ProductList';
import PageWrapper from '../../components/ui/PageWrapper/PageWrapper';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { RootState } from 'src/store/store';

const WishlistPage = () => {
  const currentUser = useAppSelector((state: RootState) => state.userReducer.currentUser);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <PageWrapper>
      <section className="pt-10 pb-48">
        <Container>
          <h2 className="text-center text-2xl mb-10 font-semibold">Избранное</h2>
          {currentUser?.wishlist && (
            <ProductList
              products={currentUser?.wishlist}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </Container>
      </section>
    </PageWrapper>
  );
};

export default WishlistPage;
