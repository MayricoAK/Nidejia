import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { getSession } from "next-auth/react";

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    prepareHeaders: async(headers)=> {
        const session = await getSession();
        if (session?.user.token) {
            headers.set("Authorization", `Bearer ${session.user.token}`);
        }
        headers.set("Accept", "application/json");
        return headers;
    },
});

export const apiSlice = createApi({
    baseQuery: baseQuery,
    endpoints: () => ({})
});

