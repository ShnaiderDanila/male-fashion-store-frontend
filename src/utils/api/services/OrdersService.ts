import { TOrder } from '../../../types/entities/order-entity';
import { TUser } from '../../../types/entities/user-entity';
import { api } from '../base.api';

export const ordersAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation<TUser, Pick<TOrder, 'products' | 'address' | 'deliveryMethod'>>({
      query: (order: Pick<TOrder, 'products' | 'address' | 'deliveryMethod'>) => ({
        url: `/orders`,
        method: 'POST',
        body: order,
      }),
    }),
  }),
});
