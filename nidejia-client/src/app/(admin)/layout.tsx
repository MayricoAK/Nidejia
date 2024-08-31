import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@/app/globals.css';
import TopMenu from '@/components/molecules/admin/top-menu';
import SideMenu from '@/components/molecules/admin/side-menu';
import { Toaster } from '@/components/atomics/toaster';
import ReduxProvider from '@/providers/redux';

const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Nidejia',
  description: 'Find Glorious Living And Loving Space',
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ReduxProvider>
          <div className="bg-gray-light">
            <div className="flex space-x-[30px] p-[30px] container mx-auto">
              <SideMenu />
              <div className="w-full">
                <TopMenu />
                <div className="py-[30px]">{children}</div>
              </div>
            </div>
          </div>
          <Toaster />
        </ReduxProvider>
      </body>
    </html>
  );
}
