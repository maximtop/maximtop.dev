import { extensionStoreLinks } from './store-links';

export const noMoreAgo = {
  name: 'No More Ago',
  baseUrl: '/extensions/no-more-ago/',
  pageUrl: 'https://maximtop.dev/extensions/no-more-ago/',
  storeUrl: extensionStoreLinks.noMoreAgo.chrome.url,
  firefoxStoreUrl: extensionStoreLinks.noMoreAgo.firefox.url,
  githubUrl: 'https://github.com/maximtop/no-more-ago',
  issuesUrl: 'https://github.com/maximtop/no-more-ago/issues/new',
  iconUrl: '/extensions/no-more-ago/icon.png',
  ogImageUrl: '/extensions/no-more-ago/og.png',
  contactEmail: 'me@maximtop.dev',
} as const;

export const noMoreAgoNav = [
  {
    name: 'Overview',
    href: noMoreAgo.baseUrl,
    key: 'overview',
  },
  {
    name: 'Privacy',
    href: `${noMoreAgo.baseUrl}privacy/`,
    key: 'privacy',
  },
  {
    name: 'Support',
    href: `${noMoreAgo.baseUrl}support/`,
    key: 'support',
  },
] as const;

export type NoMoreAgoPage = (typeof noMoreAgoNav)[number]['key'];
