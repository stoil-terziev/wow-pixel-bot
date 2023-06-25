import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_BASE_URL}/`,
});

export const api = createApi({
  baseQuery,
  reducerPath: 'services',
  tagTypes: ['Client', 'Route'],
  endpoints: () => ({}),
});
