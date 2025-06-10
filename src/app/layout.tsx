import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from './_components/Navbar/Navbar';
import Sidebar from './_components/Sidebar/Sidebar';
import QueryWraped from './_components/QueryWraped/QueryWraped';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'A simple dashboard for sales and marketing',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <QueryWraped>
        <div className='min-h-screen'>
          <Navbar />
          <div className='flex'>
            <Sidebar />
            <main className='flex-1 p-4'>{children}</main>
            </div>
          </div>
        </QueryWraped>
      </body>
    </html>
  );
}
