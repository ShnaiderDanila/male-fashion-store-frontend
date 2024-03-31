import { TProfileSchema } from '../../../types/schemas/profile-schema';
import { TUser } from '../../../types/entities/user-entity';
import { api } from '../base.api';

export const userAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query<TUser, void>({
      query: () => ({
        url: `/users/current`,
      }),
      providesTags: ['User'],
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
  }),
});
