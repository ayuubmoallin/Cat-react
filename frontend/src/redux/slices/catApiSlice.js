import { apiSlice } from "./apiSlice";

export const catApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCats: builder.query({
      query: () => ({
        url: "/api/cats",
      }),
      keepUnusedDataFor: 1,
    }),
    getAllAdoptedCats: builder.query({
      query: () => ({
        url: "/api/cats/adopted",
      }),
      keepUnusedDataFor: 1,
    }),
    getAllCatsWithBreed: builder.query({
      query: (breed) => ({
        url: `/api/cats/breed/${breed}`,
      }),
      keepUnusedDataFor: 1,
    }),
    getCatDetails: builder.query({
      query: (catId) => ({
        url: `${"/api/cat"}/${catId}`,
      }),
      keepUnusedDataFor: 1,
    }),
    createCat: builder.mutation({
      query: (data) => ({
        url: `/api/cat`,
        method: "POST",
        body: data,
      }),
    }),
    updateCatStatus: builder.mutation({
      query: (catId) => ({
        url: `${"/api/cat"}/${catId}`,
        method: "PATCH",
      }),
    }),
    deleteCat: builder.mutation({
      query: (catId) => ({
        url: `${"/api/cat"}/${catId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllCatsQuery,
  useGetAllAdoptedCatsQuery,
  useGetAllCatsWithBreedQuery,
  useGetCatDetailsQuery,
  useUpdateCatStatusMutation,
  useCreateCatMutation,
  useDeleteCatMutation,
} = catApiSlice;
