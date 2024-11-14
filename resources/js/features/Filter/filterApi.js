// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const filterApi = createApi({
  reducerPath: 'filterApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    productsFilters: builder.query({
      query: (filters) => ({
        url:`/meun-filter?name=${filters.name}&price=${filters.price}&categories=${filters.categories}&limit=${filters.limit}&offset=${filters.skip}`,
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useProductsFiltersQuery } = filterApi
