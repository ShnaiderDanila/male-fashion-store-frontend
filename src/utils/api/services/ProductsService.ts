import { TProduct } from '../../../types/entities/product-entity';
import { TUser } from '../../../types/entities/user-entity';
import { api } from '../base.api';

export const productsAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query<TProduct[], void>({
      query: () => ({
        url: `/products`,
      }),
    }),
    getProductsById: builder.query<TProduct, string | undefined>({
      query: (id: string | undefined) => ({
        url: `/products/${id}`,
      }),
    }),
    toggleLikeProductById: builder.mutation<TUser, number>({
      query: (id: number) => ({
        url: `/products/like/${id}`,
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }),
      invalidatesTags: ['Wishlist'],
    }),
  }),
});
