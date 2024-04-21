import { TProduct } from '../../types/entities/product-entity';

export const checkLikedProduct = (wishlist: TProduct[] | undefined, product: TProduct) => {
  if (wishlist) {
    return wishlist.some((item) => item.id === product.id);
  } else {
    return false;
  }
};
