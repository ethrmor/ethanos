import '../styles/globals.css';
import type { Metadata } from 'next';
import React from 'react';
import { Manrope } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Sidebar, TopNav, NavigationMenu } from '@/components/navigation';

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
					<div className='flex min-h-screen max-h-screen'>
						<Sidebar>
							<NavigationMenu />
						</Sidebar>
						<div className='flex flex-1 flex-col'>
							<TopNav />
							<main className='flex flex-col items-center justify-between overflow-auto p-6'>
								{children}
							</main>
						</div>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
