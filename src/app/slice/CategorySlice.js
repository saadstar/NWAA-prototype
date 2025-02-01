import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const categorySlice = createApi({
  reducerPath: "categorySlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://nwaa.trendline.marketing/api/",
  }),
  tagTypes: ["category"],
  endpoints: (builder) => ({
    getAllCategory: builder.query({
      query: () => ({
        method: "GET",
        url: `categories/main`,
      }),
      providesTags: ["category"],
    }),
  }),
});


export const { useGetAllCategoryQuery } = categorySlice;