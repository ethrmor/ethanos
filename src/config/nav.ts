import { MainNavItem, SidebarNavItem } from '@/types/nav';

interface NavConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const navConfig: NavConfig = {
  mainNav: [
    {
      title: 'GitHub',
      href: 'https://github.com/ermorrpheus',
      external: true,
    },
    {
      title: 'Twitter',
      href: 'https://www.twitter.com/the100xdev',
      external: true,
    },
  ],
  sidebarNav: [
    {
      title: '',
      items: [
        {
          title: 'Home',
          href: '/',
          items: [],
        },
        {
          title: 'Projects',
          href: '/projects',
          items: [],
        },
        {
          title: 'Writing',
          href: '/writing',
          items: [],
        },
      ],
    },
    {
      title: 'Me',
      items: [
        {
          title: 'About',
          href: '/about',
          items: [],
        },
        {
          title: 'Uses',
          href: '/uses',
          items: [],
        },
        {
          title: 'Bookmarks',
          href: '/bookmarks',
          items: [],
        },
        {
          title: 'Recs',
          href: '/recs',
          items: [],
        },
        {
          title: 'Notes',
          href: '/notes',
          items: [],
        },
        {
          title: 'Contact',
          href: '/contact',
          items: [],
        },
      ],
    },
  ],
};
