// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productsAPI = createApi({ // x
  reducerPath: "productsAPI", // x
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }), // x
  endpoints: (builder) => ({
    getAllProducts: builder.query({ // x
      query: () => `products`, // x
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery } = productsAPI;
