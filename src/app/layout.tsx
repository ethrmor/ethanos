import '../styles/globals.css';
import type { Metadata } from 'next';
import React from 'react';
import { Manrope } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Sidebar, TopNav, NavigationMenu, MobileSidebar } from '@/components/navigation';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'ethanmorr.is',
	description: 'A personal website for Ethan Morris, the 100x dev',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={manrope.className}>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
					<div className='flex'>
						<Sidebar>
							<NavigationMenu />
						</Sidebar>
						<MobileSidebar>
							<NavigationMenu />
						</MobileSidebar>
						<div className='flex-1'>
							<TopNav />
							<main className='flex min-h-full flex-col items-center justify-between overflow-auto'>
								{children}
							</main>
						</div>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
