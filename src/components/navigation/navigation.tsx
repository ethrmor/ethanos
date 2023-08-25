import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ModeToggle } from '../mode-toggle';
import { Menu } from 'lucide-react';
import { NavigationMenu } from './navigation-menu';
import Image from 'next/image';

type NavProps = {
  children: React.ReactNode;
};

function Sidebar({ children }: NavProps) {
  return (
    <div className='hidden h-screen flex-col justify-between border-e bg-white dark:bg-gray-950 md:flex'>
      {children}
    </div>
  );
}

function TopNav() {
  return (
    <nav className='sticky left-0 top-0 flex w-full items-center justify-between border-b border-gray-100 bg-white px-4 py-2 dark:border-gray-900 dark:bg-gray-950 md:justify-end'>
      <Sheet>
        <SheetTrigger className='inline-flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:hidden'>
          <Menu className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:text-white' />
          <span className='sr-only'>Toggle theme</span>
        </SheetTrigger>
        <SheetContent
          side='left'
          className='flex w-[230px] flex-col justify-between px-0 pb-0 pt-4'
        >
          <NavigationMenu />
        </SheetContent>
      </Sheet>
      <Image
        src='/logo.svg'
        alt='Logo'
        width={28}
        height={28}
        className='md:hidden'
      />
      <ModeToggle />
    </nav>
  );
}

export { Sidebar, TopNav };
