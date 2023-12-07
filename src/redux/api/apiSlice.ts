import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const APIPRO = 'products';

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
  }),
});

export const { useGetProductsQuery, useSingleProductsQuery } = pokemonApi;
