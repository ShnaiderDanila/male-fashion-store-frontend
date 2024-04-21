import { TAuthResponce } from '../../../types/auth-responce';
import { api } from '../base.api';
import { TSignUpSchema } from '../../../types/schemas/signup-schema';
import { TSignInSchema } from '../../../types/schemas/signin-schema';

export const authAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    registration: builder.mutation<TAuthResponce, Omit<TSignUpSchema, 'confirmPassword'>>({
      query: (user: TSignUpSchema) => ({
        url: `/auth/registration`,
        method: 'POST',
        body: user,
      }),
    }),
    login: builder.mutation<TAuthResponce, TSignInSchema>({
      query: (user: TSignInSchema) => ({
        url: `/auth/login`,
        method: 'POST',
        body: user,
      }),
    }),
  }),
});
