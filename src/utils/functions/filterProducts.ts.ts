import { TProduct, TSelectedFilterOptions } from '../../types/entities/product-entity';

export const calculateSelectedFilterOptionsLength = (options: TSelectedFilterOptions) => {
  return options.brand.length + options.type.length + options.size.length + options.color.length;
};

export const filterProducts = (
  products: TProduct[],
  selectedFilterOptions: TSelectedFilterOptions,
) => {
  const selectedFilterOptionsLength = calculateSelectedFilterOptionsLength(selectedFilterOptions);

  if (selectedFilterOptionsLength > 0) {
    return products.filter((product) => {
      return (
        selectedFilterOptions.type.includes(product.type) ||
        selectedFilterOptions.brand.includes(product.brand) ||
        selectedFilterOptions.size.some((size) => product.availableSize.includes(size)) ||
        selectedFilterOptions.color.includes(product.color)
      );
    });
  } else {
    return products;
  }
};
