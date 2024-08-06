import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const url ="http://localhost:5454/"
const baseQuery = fetchBaseQuery({
  baseUrl: url,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery,
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (user) => ({
        url: 'auth/register',
        method: 'POST',
        body: user,
      }),
    }),
    login: builder.mutation({
      query: (user) => ({
        url: 'auth/login',
        method: 'POST',
        body: user,
      }),
    }),
    refreshToken: builder.mutation({
      query: (data) => ({
        url: 'auth/refresh',
        method: 'POST',
        body: data,
      }),
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: 'admin/get-all-users',
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useRefreshTokenMutation,
  useGetAllUsersQuery,
} = usersApi;
