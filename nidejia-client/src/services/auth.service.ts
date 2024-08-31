import { apiSlice } from "./base-query";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: "/login",
                method: "POST",
                body: credentials,
            }),
        }),
        register: builder.mutation({
            query: (credentials) => ({
                url: "/register",
                method: "POST",
                body: credentials,
            }),
        }),
    }),
})

export const {
    useLoginMutation,
    useRegisterMutation,
} = authApi;