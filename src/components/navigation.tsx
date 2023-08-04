import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ModeToggle } from './mode-toggle';
import { Button } from './ui/button';
import {
  BookMarkedIcon,
  Code2Icon,
  GithubIcon,
  GitlabIcon,
  HomeIcon,
  LinkedinIcon,
  Menu,
  MonitorIcon,
  PenLineIcon,
  PhoneIcon,
  ScrollTextIcon,
  ShoppingBagIcon,
  TwitterIcon,
  UserIcon,
} from 'lucide-react';
import { mainLinks, meLinks, socialLinks } from '@/lib/data';

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

function NavigationMenu() {
  return (
    <>
      <div className='flex flex-col px-4 py-6'>
        <div className='flex items-center px-4'>
          <Image src='/logo.svg' width={30} height={30} alt='Logo' />
        </div>

        <div className='overflow-auto'>
          <ul className='my-6 space-y-1'>
            <li>
              <a
                href='/'
                className='flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100'
              >
                <HomeIcon size={16} />
                Home
              </a>
            </li>
            <li>
              <a
                href='/projects'
                className='flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100'
              >
                <Code2Icon size={16} />
                Projects
              </a>
            </li>
            <li>
              <a
                href='/writing'
                className='flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100'
              >
                <PenLineIcon size={16} />
                Writing
              </a>
            </li>
          </ul>

          <span className='mt-6 px-4 text-xs font-medium text-gray-300'>
            Me
          </span>
          <ul className='mb-6 space-y-1'>
            <li>
              <a
                href='/about'
                className='flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100'
              >
                <UserIcon size={16} />
                About
              </a>
            </li>
            <li>
              <a
                href='/uses'
                className='flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100'
              >
                <MonitorIcon size={16} />
                Uses
              </a>
            </li>
            <li>
              <a
                href='/bookmarks'
                className='flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100'
              >
                <BookMarkedIcon size={16} />
                Bookmarks
              </a>
            </li>
            <li>
              <a
                href='/recs'
                className='flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100'
              >
                <ShoppingBagIcon size={16} />
                Recs
              </a>
            </li>
            <li>
              <a
                href='/notes'
                className='flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100'
              >
                <ScrollTextIcon size={16} />
                Notes
              </a>
            </li>
            <li>
              <a
                href='/contact'
                className='flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100'
              >
                <PhoneIcon size={16} />
                Contact
              </a>
            </li>
          </ul>

          <span className='mt-6 px-4 text-xs font-medium text-gray-300'>
            Social
          </span>
          <ul className='mb-6 space-y-1'>
            <li>
              <a
                href='https://github.com/ermorrpheus'
                target='_blank'
                className='flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100'
              >
                <GithubIcon size={16} />
                Github
              </a>
            </li>
            <li>
              <a
                href='https://www.twitter.com/the100xdev'
                target='_blank'
                className='flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100'
              >
                <TwitterIcon size={16} />
                Twitter
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/ethanmorris1/'
                target='_blank'
                className='flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100'
              >
                <LinkedinIcon size={16} />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Nav Card */}
      <div className='sticky inset-x-0 bottom-0 border-t border-gray-100 dark:border-gray-900 dark:bg-gray-950'>
        <div className='flex items-center gap-2 px-8 py-4'>
          <Image
            alt='Man'
            src='/profile.png'
            height={40}
            width={40}
            className='rounded-full object-cover'
          />
          <div>
            <p className='text-sm'>
              <strong className='block font-medium'>Ethan Morris</strong>

              <span className='text-xs text-gray-500 dark:text-gray-300'>
                {' '}
                Software Developer{' '}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function TopNav() {
  return (
    <nav className='sticky left-0 top-0 flex w-full items-center justify-between border-b border-gray-100 px-4 py-2 dark:border-gray-900 md:justify-end'>
      <Sheet>
        <SheetTrigger className='inline-flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:hidden'>
          <Menu className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <span className='sr-only'>Toggle theme</span>
        </SheetTrigger>
        <SheetContent
          side='left'
          className='flex w-[230px] flex-col justify-between px-0 pb-0 pt-4'
        >
          <NavigationMenu />
        </SheetContent>
      </Sheet>
      <ModeToggle />
    </nav>
  );
}

export { Sidebar, NavigationMenu, TopNav };
