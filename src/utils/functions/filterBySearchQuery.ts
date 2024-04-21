import { TProduct } from '../../types/entities/product-entity';

export const filterBySearchQuery = (searchQuery: string, products: TProduct[]) => {
  if (searchQuery) {
    return products.filter(
      (item: TProduct) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }

  return products;
};
