import '../styles/globals.css';
import type { Metadata } from 'next';
import React from 'react';
import { Manrope } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import NavigationMain from '@/components/navigation-main';
import NavigationMobile from '@/components/navigation-mobile';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'ethanmorr.is',
	description: 'A personal website for Ethan Morris, the 100x dev',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${manrope.className.toString()} grid md:grid-cols-[230px_1fr] grid-cols-1`}>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
					<NavigationMain />
					<NavigationMobile />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
