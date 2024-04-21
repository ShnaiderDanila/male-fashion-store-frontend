import { CartState } from '../../store/slices/cartSlice';
import { TCartProduct } from '../../types/entities/product-entity';

export const findExistProduct = (state: CartState, cartProduct: TCartProduct) => {
  const existProduct = state.products.find(
    (product) => product.id === cartProduct.id && product.size === cartProduct.size,
  );
  return existProduct;
};
