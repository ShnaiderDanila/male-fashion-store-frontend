import { ProductsCategories } from '../../utils/enums/productCategories';

export type TProduct = {
  id: number;
  type: string;
  name: string;
  brand: string;
  price: number;
  availableSize: string[];
  color: string;
  description: string;
  image: string;
  productCode: number;
};

export type TCartProduct = {
  id: number;
  type: string;
  name: string;
  brand: string;
  price: number;
  size: string;
  color: string;
  description: string;
  image: string;
  productCode: number;
  count: number;
};

export type TSelectedFilterOptions = {
  [ProductsCategories.type]: string[];
  [ProductsCategories.brand]: string[];
  [ProductsCategories.size]: string[];
  [ProductsCategories.color]: string[];
};

export type TFilterCategory = {
  title: string;
  value: keyof TSelectedFilterOptions;
  options: string[];
};
