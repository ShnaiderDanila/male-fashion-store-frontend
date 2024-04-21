import { TProfileSchema } from '../../../types/schemas/profile-schema';
import { TUser } from '../../../types/entities/user-entity';
import { api } from '../base.api';
import { TProduct } from '../../../types/entities/product-entity';

export const userAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query<TUser, void>({
      query: () => ({
        url: `/users/current`,
      }),
    }),

    updateCurrentUser: builder.mutation<TUser, TProfileSchema>({
      query: (user: TProfileSchema) => ({
        url: `/users/update`,
        method: 'PATCH',
        body: user,
      }),
    }),
    updateCurrentUserPassword: builder.mutation<TUser, string>({
      query: (password: string) => ({
        url: `/users/update/password`,
        method: 'PUT',
        body: { password },
      }),
    }),
    getCurrentUserWishlist: builder.query<TProduct[], void>({
      query: () => ({
        url: `/users/current/wishlist`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }),
      providesTags: ['Wishlist'],
    }),
  }),
});
