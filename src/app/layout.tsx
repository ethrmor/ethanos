import '../styles/globals.css';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

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
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
