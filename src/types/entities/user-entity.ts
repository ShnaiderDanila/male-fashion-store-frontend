import { TOrder } from './order-entity';
import { TProduct } from './product-entity';

export type TUser = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  address: string;
  wishlist: TProduct[];
  orders: TOrder[];
  createdAt: string;
  updatedAt: string;
};
