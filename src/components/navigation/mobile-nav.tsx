'use client';

import Image from 'next/image';
import Link, { LinkProps } from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import * as React from 'react';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

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

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const { theme } = useTheme();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        asChild
        className='h-10 w-10 items-center justify-center rounded-md border border-input bg-background text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
      >
        <Button
          variant='outline'
          className='mr-2 px-0 text-base focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden'
        >
          <Icons.menu />
          <span className='sr-only'>Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='w-[240px] px-0'>
        <div className='sticky top-0 flex items-center px-8 py-3'>
          <Image
            src={theme === 'dark' ? '/logo-white.svg' : '/logo.svg'}
            width={32}
            height={32}
            alt='Logo'
          />
        </div>
        <ScrollArea className='h-[calc(100vh-8rem)] pb-10'>
          <div className='flex flex-col'>
            <div className='z-1 absolute left-0 top-0 h-5 w-full bg-gradient-to-b from-white to-transparent dark:from-gray-950' />
            <div className='px-4'>
              <ul className='my-6 space-y-1'>
                <li>
                  <MobileLink href='/' onOpenChange={setOpen}>
                    <HomeIcon size={16} />
                    Home
                  </MobileLink>
                </li>
                <li>
                  <MobileLink href='/projects' onOpenChange={setOpen}>
                    <Code2Icon size={16} />
                    Projects
                  </MobileLink>
                </li>
                <li>
                  <MobileLink href='/writing' onOpenChange={setOpen}>
                    <PenLineIcon size={16} />
                    Writing
                  </MobileLink>
                </li>
              </ul>

              <span className='mt-6 px-4 text-xs font-medium text-gray-300'>
                Me
              </span>
              <ul className='mb-6 space-y-1'>
                <li>
                  <MobileLink href='/about' onOpenChange={setOpen}>
                    <UserIcon size={16} />
                    About
                  </MobileLink>
                </li>
                <li>
                  <MobileLink href='/uses' onOpenChange={setOpen}>
                    <MonitorIcon size={16} />
                    Uses
                  </MobileLink>
                </li>
                <li>
                  <MobileLink href='/bookmarks' onOpenChange={setOpen}>
                    <BookMarkedIcon size={16} />
                    Bookmarks
                  </MobileLink>
                </li>
                <li>
                  <MobileLink href='/recs' onOpenChange={setOpen}>
                    <ShoppingBagIcon size={16} />
                    Recs
                  </MobileLink>
                </li>
                <li>
                  <MobileLink href='/notes' onOpenChange={setOpen}>
                    <ScrollTextIcon size={16} />
                    Notes
                  </MobileLink>
                </li>
                <li>
                  <MobileLink href='/contact' onOpenChange={setOpen}>
                    <PhoneIcon size={16} />
                    Contact
                  </MobileLink>
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
        </ScrollArea>
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
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(
        'flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium',
        pathname === href.toString()
          ? 'bg-main text-gray-100'
          : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700  dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-100'
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
