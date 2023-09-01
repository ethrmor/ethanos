import NavigationMenu from '@/components/navigation/navigation-menu';
import Sidebar from '@/components/navigation/sidebar';
import TopNav from '@/components/navigation/top-nav';
import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import React from 'react';
import '../styles/globals.css';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Ethan Morris',
    default: 'Ethan Morris',
  },
  description: 'A personal website for Ethan Morris, the 100x dev',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={manrope.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className='flex max-h-screen min-h-screen'>
            <Sidebar>
              <NavigationMenu />
            </Sidebar>
            <div className='flex flex-1 flex-col bg-white dark:bg-gray-950'>
              <TopNav />
              <main className='flex flex-col items-center justify-between overflow-auto px-4 py-8'>
                <div className='mx-auto w-full max-w-2xl'>{children}</div>
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
