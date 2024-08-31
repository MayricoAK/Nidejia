import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@/app/globals.css';
import Header from '@/components/molecules/header';
import Footer from '@/components/molecules/footer';
import { Toaster } from '@/components/atomics/toaster';
import ReduxProvider from '@/providers/redux';

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Nidejia',
    description: 'Find Glorious Living And Loving Space',
    icons: {
        icon: '/favicon.svg',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ReduxProvider>
        <div className="lg:block hidden">
          <Header />
          {children}
          <Footer />
        </div>
        <div className="block lg:hidden">
          <div className="text-secondary h-screen text-2xl text-center leading-snug font-medium my-auto grid place-content-center">
            Sorry, this page only supported on 1024px screen or above
          </div>
        </div>
        <Toaster />
        </ReduxProvider>
      </body>
    </html>
  );
}
