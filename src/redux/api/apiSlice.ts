import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const APIPRO = 'products';
const COMMENT = 'comment';

export const pokemonApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => APIPRO,
    }),
    singleProducts: builder.query({
      query: (id) => `${APIPRO}/${id}`,
    }),
    getComment: builder.query({
      query: (id) => `${COMMENT}/${id}`,
    }),

    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `${COMMENT}/${id}`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useSingleProductsQuery,
  usePostCommentMutation,
  useGetCommentQuery,
} = pokemonApi;
