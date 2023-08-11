'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import {
  BookMarkedIcon,
  Code2Icon,
  GithubIcon,
  HomeIcon,
  LinkedinIcon,
  MonitorIcon,
  PenLineIcon,
  PhoneIcon,
  ScrollTextIcon,
  ShoppingBagIcon,
  TwitterIcon,
  UserIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function NavigationMenu() {
  const pathname = usePathname();
  const { theme } = useTheme();

  return (
    <>
      <div className='flex flex-col overflow-auto'>
        <div className='sticky top-0 flex items-center px-8 py-3'>
          <Image
            src={theme === 'dark' ? '/logo-white.svg' : '/logo.svg'}
            width={32}
            height={32}
            alt='Logo'
          />
        </div>
        <div className='relative flex flex-col overflow-auto'>
          <div className='z-1 absolute left-0 top-0 h-5 w-full bg-gradient-to-b from-white to-transparent dark:from-gray-950' />
          <div className='overflow-auto px-4'>
            <ul className='my-6 space-y-1'>
              <li>
                <Link
                  href='/'
                  className={cn(
                    'flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100',
                    pathname === '/' ? 'bg-main text-gray-100' : null
                  )}
                >
                  <HomeIcon size={16} />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/projects'
                  className={cn(
                    'flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100',
                    pathname === '/projects' ? 'bg-main text-gray-100' : null
                  )}
                >
                  <Code2Icon size={16} />
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href='/writing'
                  className={cn(
                    'flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100',
                    pathname === '/writing' ? 'bg-main text-gray-100' : null
                  )}
                >
                  <PenLineIcon size={16} />
                  Writing
                </Link>
              </li>
            </ul>

            <span className='mt-6 px-4 text-xs font-medium text-gray-300'>
              Me
            </span>
            <ul className='mb-6 space-y-1'>
              <li>
                <Link
                  href='/about'
                  className={cn(
                    'flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100',
                    pathname === '/about' ? 'bg-main text-gray-100' : null
                  )}
                >
                  <UserIcon size={16} />
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='/uses'
                  className={cn(
                    'flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100',
                    pathname === '/uses' ? 'bg-main text-gray-100' : null
                  )}
                >
                  <MonitorIcon size={16} />
                  Uses
                </Link>
              </li>
              <li>
                <Link
                  href='/bookmarks'
                  className={cn(
                    'flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100',
                    pathname === '/bookmarks' ? 'bg-main text-gray-100' : null
                  )}
                >
                  <BookMarkedIcon size={16} />
                  Bookmarks
                </Link>
              </li>
              <li>
                <Link
                  href='/recs'
                  className={cn(
                    'flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100',
                    pathname === '/recs' ? 'bg-main text-gray-100' : null
                  )}
                >
                  <ShoppingBagIcon size={16} />
                  Recs
                </Link>
              </li>
              <li>
                <Link
                  href='/notes'
                  className={cn(
                    'flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100',
                    pathname === '/notes' ? 'bg-main text-gray-100' : null
                  )}
                >
                  <ScrollTextIcon size={16} />
                  Notes
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className={cn(
                    'flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100',
                    pathname === '/contact' ? 'bg-main text-gray-100' : null
                  )}
                >
                  <PhoneIcon size={16} />
                  Contact
                </Link>
              </li>
            </ul>

            <span className='mt-6 px-4 text-xs font-medium text-gray-300'>
              Social
            </span>
            <ul className='mb-6 space-y-1'>
              <li>
                <Link
                  href='https://github.com/ermorrpheus'
                  target='_blank'
                  className='flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100'
                >
                  <GithubIcon size={16} />
                  Github
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.twitter.com/the100xdev'
                  target='_blank'
                  className='flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100'
                >
                  <TwitterIcon size={16} />
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.linkedin.com/in/ethanmorris1/'
                  target='_blank'
                  className='flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100'
                >
                  <LinkedinIcon size={16} />
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
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
                Product Engineer{' '}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
