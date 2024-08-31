import { apiSlice } from "./base-query";

export const listingApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllListing: builder.query({
            query: () => ({
                url: "/listing",
                method: "GET"
            }),
        }),
        getDetailListing: builder.query({
            query: (slug: string) => ({
                url: `/listing/${slug}`,
                method: "GET"
            }),
        }),
    }),
});

export const {
    useGetAllListingQuery,
    useGetDetailListingQuery, 
 } = listingApi;