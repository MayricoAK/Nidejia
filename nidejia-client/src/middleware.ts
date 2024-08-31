export { default } from "next-auth/middleware"

export const config = { 
    matcher: [
        "/listing/:id/checkout", 
        "/booking-succes/:path*", 
        "/dashboard/:path*",
    ] 
};