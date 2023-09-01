'use client';

import { cn } from '@/lib/utils';
import {
  BookMarkedIcon,
  Code2Icon,
  ExternalLinkIcon,
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
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavigationMenu() {
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
                    'flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium',
                    pathname === '/'
                      ? 'bg-main text-gray-100'
                      : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100'
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
                    'flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium',
                    pathname === '/projects'
                      ? 'bg-main text-gray-100'
                      : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100'
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
                    'flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium',
                    pathname === '/writing'
                      ? 'bg-main text-gray-100'
                      : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100'
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
                    'flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium',
                    pathname === '/about'
                      ? 'bg-main text-gray-100'
                      : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100'
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
                    'flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium',
                    pathname === '/uses'
                      ? 'bg-main text-gray-100'
                      : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100'
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
                    'flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium',
                    pathname === '/bookmarks'
                      ? 'bg-main text-gray-100'
                      : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100'
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
                    'flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium',
                    pathname === '/recs'
                      ? 'bg-main text-gray-100'
                      : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100'
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
                    'flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium',
                    pathname === '/notes'
                      ? 'bg-main text-gray-100'
                      : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100'
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
                    'flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium',
                    pathname === '/contact'
                      ? 'bg-main text-gray-100'
                      : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100'
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
                  className='flex items-center justify-between rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100'
                >
                  <div className='flex items-center gap-2'>
                    <GithubIcon size={16} />
                    Github
                  </div>
                  <ExternalLinkIcon size={16} />
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.twitter.com/the100xdev'
                  target='_blank'
                  className='flex items-center justify-between rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100'
                >
                  <div className='flex items-center gap-2'>
                    <TwitterIcon size={16} />
                    Twitter
                  </div>
                  <ExternalLinkIcon size={16} />
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.linkedin.com/in/ethanmorris1/'
                  target='_blank'
                  className='flex items-center justify-between rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100'
                >
                  <div className='flex items-center gap-2'>
                    <LinkedinIcon size={16} />
                    LinkedIn
                  </div>
                  <ExternalLinkIcon size={16} />
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
                Software Developer{' '}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
