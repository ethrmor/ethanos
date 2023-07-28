import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ModeToggle } from './mode-toggle';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

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

				<ul className='mt-6 space-y-1'>
					<li>
						<a
							href=''
							className='block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700'>
							General
						</a>
					</li>

					<li>
						<details className='group [&_summary::-webkit-details-marker]:hidden'>
							<summary className='flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
								<span className='text-sm font-medium'> Teams </span>

								<span className='shrink-0 transition duration-300 group-open:-rotate-180'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-5 w-5'
										viewBox='0 0 20 20'
										fill='currentColor'>
										<path
											fillRule='evenodd'
											d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
											clipRule='evenodd'
										/>
									</svg>
								</span>
							</summary>

							<ul className='mt-2 space-y-1 px-4'>
								<li>
									<a
										href=''
										className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
										Banned Users
									</a>
								</li>

								<li>
									<a
										href=''
										className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
										Calendar
									</a>
								</li>
							</ul>
						</details>
					</li>

					<li>
						<a
							href=''
							className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
							Billing
						</a>
					</li>

					<li>
						<a
							href=''
							className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
							Invoices
						</a>
					</li>

					<li>
						<details className='group [&_summary::-webkit-details-marker]:hidden'>
							<summary className='flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
								<span className='text-sm font-medium'> Account </span>

								<span className='shrink-0 transition duration-300 group-open:-rotate-180'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-5 w-5'
										viewBox='0 0 20 20'
										fill='currentColor'>
										<path
											fillRule='evenodd'
											d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
											clipRule='evenodd'
										/>
									</svg>
								</span>
							</summary>

							<ul className='mt-2 space-y-1 px-4'>
								<li>
									<a
										href=''
										className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
										Details
									</a>
								</li>

								<li>
									<a
										href=''
										className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
										Security
									</a>
								</li>

								<li>
									<form action='/logout'>
										<button
											type='submit'
											className='w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700'>
											Logout
										</button>
									</form>
								</li>
							</ul>
						</details>
					</li>
				</ul>
			</div>
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
