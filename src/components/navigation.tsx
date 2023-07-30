import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ModeToggle } from './mode-toggle';
import { Button } from './ui/button';
import { GithubIcon, GitlabIcon, Menu, TwitterIcon } from 'lucide-react';
import { mainLinks, meLinks, socialLinks } from '@/lib/data';

type NavProps = {
	children: React.ReactNode;
};

function Sidebar({ children }: NavProps) {
	return (
		<div className='hidden md:flex h-screen flex-col justify-between border-e bg-white'>
			{children}
		</div>
	);
}

function NavigationMenu() {
	return (
		<>
			<div className='flex flex-col px-4 py-6'>
				<div className='flex items-center px-4'>
					<Image src='/logo.svg' width={30} height={30} alt='Logo' />
				</div>

				<div>
					<ul className='my-6 space-y-1'>
						{mainLinks.map((link) => (
							<li key={link.label}>
								<a
									href={link.href}
									className='flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
									<TwitterIcon size={16} />
									{link.label}
								</a>
							</li>
						))}
					</ul>

					<span className='text-xs text-gray-300 font-medium px-4 mt-6'>Me</span>
					<ul className='mb-6 space-y-1'>
						{meLinks.map((link) => (
							<li key={link.label}>
								<a
									href={link.href}
									className='flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
									<GitlabIcon size={16} />
									{link.label}
								</a>
							</li>
						))}
					</ul>
					<span className='text-xs text-gray-300 font-medium px-4 mt-6'>Social</span>

					<ul className='mb-6 space-y-1'>
						{socialLinks.map((link) => (
							<li key={link.label}>
								<a
									href={link.href}
									target='_blank'
									className='flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
									<GithubIcon size={16} />
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
			{/* Nav Card */}
			<div className='sticky inset-x-0 bottom-0 border-t border-gray-100'>
				<a href='#' className='flex items-center gap-2 bg-white px-8 py-4 hover:bg-gray-50'>
					<Image
						alt='Man'
						src='/profile.png'
						height={40}
						width={40}
						className='rounded-full object-cover'
					/>
					<div>
						<p className='text-xs'>
							<strong className='block font-medium'>Ethan Morris</strong>

							<span className='text-gray-500 text-xs'> Software Developer </span>
						</p>
					</div>
				</a>
			</div>
		</>
	);
}

function TopNav() {
	return (
		<nav className='flex items-center justify-between md:justify-end px-4 py-2 border-b border-gray-100'>
			<Sheet>
				<SheetTrigger className='md:hidden inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10'>
					<Menu className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
					<span className='sr-only'>Toggle theme</span>
				</SheetTrigger>
				<SheetContent
					side='left'
					className='w-[230px] pt-4 pb-0 px-0 flex flex-col justify-between'>
					<NavigationMenu />
				</SheetContent>
			</Sheet>
			<ModeToggle />
		</nav>
	);
}

export { Sidebar, NavigationMenu, TopNav };
