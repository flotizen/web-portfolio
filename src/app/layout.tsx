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
        <main className="flex min-h-screen flex-col items-center lg:items-start justify-start py-20 lg:p-24">
          <AppInfo />
          <div className="flex flex-col lg:flex-row gap-8 mt-4">
            <HeaderH />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
