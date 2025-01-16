import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import HeaderH from '@/sections/header';
import AppInfo from '@/sections/appInfo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hiếu Portfolio',
  description: 'Nguyễn Quang Hiếu - Software Engineer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-[2560px] overflow-x-hidden min-h-screen flex  flex-col items-center w-full lg:items-start justify-start py-20 lg:p-24">
          <AppInfo />
          {children}
          
        </main>
      </body>
    </html>
  );
}
