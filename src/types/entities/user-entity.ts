import { TProduct } from './product-entity';

export type TUser = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  address: string;
  wishlist: TProduct[];
  createdAt: string;
  updatedAt: string;
};
