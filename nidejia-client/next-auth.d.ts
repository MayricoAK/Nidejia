import NextAuth from "next-auth/next";

declare module "next-auth" {
    interface Session {
        user: {
            id: number;
            token: string;
        } & DefaultSession["user"];
    }

    interface User {
        token: string;
    }
}