import { Container } from '@mui/material';
import ProductList from '../../components/Products/ProductsList/ProductList';
import PageWrapper from '../../components/ui/PageWrapper/PageWrapper';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { RootState } from 'src/store/store';
import CustomButton from '../../components/ui/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';

const WishlistPage = () => {
  const currentUser = useAppSelector((state: RootState) => state.userReducer.currentUser);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <section className="pt-10 pb-48">
        <Container>
          <h2 className="text-center text-2xl mb-10 font-semibold">Избранное</h2>
          {currentUser?.wishlist?.length ? (
            <ProductList
              products={currentUser?.wishlist}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          ) : (
            <div className="flex flex-col justify-center items-center gap-10 w-full text-center text-xl mt-12 lg:mt-0">
              <div>
                <p>В списке избранного нет товаров!</p>
                <p className="text-sm mt-3">Для выбора вещей перейдите в каталог</p>
              </div>
              <CustomButton onClick={() => navigate('/catalog')} maxWidth="384px">
                Перейти в каталог
              </CustomButton>
            </div>
          )}
        </Container>
      </section>
    </PageWrapper>
  );
};

export default WishlistPage;
