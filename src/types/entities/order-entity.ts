import { TCartProduct } from './product-entity';

export type TOrder = {
  id: number;
  products: TCartProduct[];
  totalPrice: number;
  address: string;
  deliveryMethod: string;
  updatedAt: string;
  createdAt: string;
};
