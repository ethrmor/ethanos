'use client';

import Image from 'next/image';

import { ModeToggle } from '@/components/mode-toggle';
import { MobileNav } from '@/components/navigation/mobile-nav';
import { useTheme } from 'next-themes';

export default function TopNav() {
  const { theme } = useTheme();
  return (
    <nav className='sticky left-0 top-0 flex w-full items-center justify-between border-b border-gray-100 bg-white px-4 py-2 dark:border-gray-900 dark:bg-gray-950 md:justify-end'>
      <MobileNav />
      <Image
        src={theme === 'dark' ? '/logo-white.svg' : '/logo.svg'}
        width={28}
        height={28}
        alt='Logo'
        className='md:hidden'
      />
      <ModeToggle />
    </nav>
  );
}
