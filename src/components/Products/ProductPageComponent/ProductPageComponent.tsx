import { FC, useState } from 'react';
import { TProduct } from '../../../types/entities/product-entity';
import { formatCost } from '../../../utils/functions/formatCost';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../store/slices/cartSlice';
import { useAppSelector } from '../../../hooks/redux';
import { RootState } from '../../../store/store';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

import CustomButton from '../../ui/CustomButton/CustomButton';
import Container from '../../ui/Container/Container';
import QuantityButton from '../../ui/QuantityButton/QuantityButton';
import ProductDescription from '../ProductDescription/ProductDescription';
import { productsAPI } from '../../../utils/api/services/ProductsService';
import { toast } from 'react-toastify';
import { TErrorResponce } from '../../../types/error-responce';
import { checkLikedProduct } from '../../../utils/functions/checkLikedProduct';
import { findExistProduct } from '../../../utils/functions/findExistProduct';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../../../store/slices/userSlice';

interface ProductPageComponentProps {
  currentProduct: TProduct;
}

const ProductPageComponent: FC<ProductPageComponentProps> = ({ currentProduct }) => {
  const [selectedSize, setSelectedSize] = useState<string>(currentProduct.availableSize[0]);

  const currentUser = useAppSelector((state: RootState) => state.userReducer.currentUser);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const productForCart = {
    ...currentProduct,
    size: selectedSize,
    count: 1,
  };

  const existingProductInCart = useAppSelector((state: RootState) => {
    return findExistProduct(state.cartReducer, productForCart);
  });

  const thisProductIsLiked = checkLikedProduct(currentUser?.wishlist, currentProduct);

  const [likeProduct] = productsAPI.useToggleLikeProductByIdMutation();

  const handleLikeProduct = async () => {
    if (currentUser) {
      await likeProduct(currentProduct.id)
        .unwrap()
        .then((user) => {
          if (user) {
            dispatch(updateUser(user));
          }
        })
        .catch((error: TErrorResponce) => {
          if (error.data) {
            toast.error(error.data.message);
          } else {
            toast.error('Ошибка сервера! Пожалуйста, повторите попытку позже.');
          }
        });
    } else {
      navigate('/signin');
    }
  };

  return (
    <section className="pt-10 lg:pt-16 pb-16">
      <Container>
        <div className="mb-12 lg:mb-10 flex flex-wrap justify-center gap-5 lg:flex-nowrap lg:justify-between">
          <div className="max-w-[600px] lg:min-h-96">
            <img
              className="w-full object-cover object-center"
              src={`${import.meta.env.VITE_REACT_API_URL}/${currentProduct.image}`}
              alt={currentProduct.name}
            />
          </div>
          <div className="flex flex-col items-center text-center gap-5 w-full ">
            <h6 className="font-bold text-2xl">{currentProduct.brand}</h6>
            <span className="text-primary-light text-xl">{currentProduct.name}</span>
            <div className="max-w-96 border-b border-gray pb-5">
              <span className="inline-block mb-5">Доступные размеры</span>
              <ul className="flex flex-wrap gap-3 justify-center">
                {currentProduct.availableSize.map((size: string) => (
                  <li
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`${selectedSize === size ? 'text-white bg-primary' : 'bg-gray hover:bg-primary-light'} 
                    transition-all duration-200 cursor-pointer py-1 px-4`}
                  >
                    {size}
                  </li>
                ))}
              </ul>
            </div>
            <p className="font-bold text-2xl">
              {currentProduct.price && formatCost(currentProduct.price)}
            </p>
            <div className="w-full max-w-96 flex flex-col gap-5">
              <CustomButton backgroundColor="#e5e5e5" color="#111111" onClick={handleLikeProduct}>
                {thisProductIsLiked ? (
                  <>
                    <span>Убрать из избранного</span>
                    <FaHeart />
                  </>
                ) : (
                  <>
                    <span>Добавить в избранное</span>
                    <FaRegHeart />
                  </>
                )}
              </CustomButton>

              {existingProductInCart ? (
                <QuantityButton product={existingProductInCart} />
              ) : (
                <CustomButton
                  onClick={() => dispatch(addProduct(productForCart))}
                  height="64px"
                  flexDirection="column"
                  gap="0"
                >
                  <span>Добавить в корзину</span>
                  <span>{selectedSize}</span>
                </CustomButton>
              )}
            </div>
          </div>
        </div>
        <ProductDescription product={currentProduct} />
      </Container>
    </section>
  );
};

export default ProductPageComponent;
