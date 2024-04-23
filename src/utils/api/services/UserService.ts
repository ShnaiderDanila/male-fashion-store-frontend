import { TProfileSchema } from '../../../types/schemas/profile-schema';
import { TUser } from '../../../types/entities/user-entity';
import { api } from '../base.api';

export const userAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query<TUser, void>({
      query: () => ({
        url: `/users/current`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }),
    }),

    updateCurrentUser: builder.mutation<TUser, TProfileSchema>({
      query: (user: TProfileSchema) => ({
        url: `/users/update`,
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: user,
      }),
    }),
    updateCurrentUserPassword: builder.mutation<TUser, string>({
      query: (password: string) => ({
        url: `/users/update/password`,
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: { password },
      }),
    }),
  }),
});
