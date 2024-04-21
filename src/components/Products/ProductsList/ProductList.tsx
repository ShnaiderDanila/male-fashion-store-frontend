import { TProduct } from '../../../types/entities/product-entity';
import { FC, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CustomButton from '../../ui/CustomButton/CustomButton';
import ProductsCard from '../ProductsCard/ProductsCard';
import { Pagination } from '@mui/material';
import { filterByPagination } from '../../../utils/functions/filterByPagination';
import { pageSize } from '../../../utils/constants/pageSize';

interface ProductListProps {
  products: TProduct[];
  currentPage: number;
  setCurrentPage: (value: number) => void;
}

const ProductList: FC<ProductListProps> = ({ products, currentPage, setCurrentPage }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const paginationProducts = useMemo(() => {
    return filterByPagination(products, currentPage, pageSize);
  }, [products, currentPage]);

  const handleChangePage = (value: number) => {
    window.scrollTo(0, 0);
    setCurrentPage(value);
  };

  if (!products.length) {
    return (
      <div className="flex flex-col justify-center items-center gap-10 w-full text-center text-xl mt-12 lg:mt-0">
        {location.pathname === '/catalog' ? (
          <p>Товары не найдены!</p>
        ) : (
          <>
            <p>Вы еще не добавляли товары в избранное!</p>
            <CustomButton onClick={() => navigate('/catalog')} maxWidth="384px">
              Перейти в каталог
            </CustomButton>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <ul className="grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginationProducts.map((product: TProduct) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </ul>
      {Math.ceil(products.length / pageSize) > 1 && (
        <div className="flex justify-center mt-10">
          <Pagination
            count={Math.ceil(products.length / pageSize)}
            page={currentPage}
            onChange={(_event, value) => handleChangePage(value)}
            showLastButton
            showFirstButton
          />
        </div>
      )}
    </div>
  );
};

export default ProductList;
