import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REACT_API_URL,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
    },
  }),
  endpoints: () => ({}),
});
