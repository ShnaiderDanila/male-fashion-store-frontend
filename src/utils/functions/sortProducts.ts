import { SortItems } from '../enums/sortItems';
import { TProduct } from '../../types/entities/product-entity';

export const sortProducts = (sortItem: string, products: TProduct[] | undefined) => {
  if (!products) {
    return [];
  }

  if (sortItem === SortItems.priceUp) {
    return [...products].sort((a: TProduct, b: TProduct) => a.price - b.price);
  }

  if (sortItem === SortItems.priceDown) {
    return [...products].sort((a: TProduct, b: TProduct) => b.price - a.price);
  }

  if (sortItem === SortItems.alphabet) {
    return [...products].sort((a: TProduct, b: TProduct) => a.name.localeCompare(b.name));
  }

  return products;
};
