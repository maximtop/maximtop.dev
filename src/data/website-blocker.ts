import { extensionStoreLinks } from './store-links';

export const websiteBlocker = {
  name: 'Website Blocker: MT',
  baseUrl: '/extensions/website-blocker/',
  pageUrl: 'https://maximtop.dev/extensions/website-blocker/',
  storeUrl: extensionStoreLinks.websiteBlocker.chrome.url,
  edgeStoreUrl: extensionStoreLinks.websiteBlocker.edge.url,
  firefoxStoreUrl: extensionStoreLinks.websiteBlocker.firefox.url,
  githubUrl: 'https://github.com/maximtop/website-blocker',
  issuesUrl: 'https://github.com/maximtop/website-blocker/issues/new',
  iconUrl: '/extensions/website-blocker/icon.png',
  ogImageUrl: '/extensions/website-blocker/og.png',
  contactEmail: 'me@maximtop.dev',
} as const;

export const websiteBlockerNav = [
  { name: 'Overview', href: websiteBlocker.baseUrl, key: 'overview' },
  {
    name: 'Privacy',
    href: `${websiteBlocker.baseUrl}privacy/`,
    key: 'privacy',
  },
  {
    name: 'Support',
    href: `${websiteBlocker.baseUrl}support/`,
    key: 'support',
  },
] as const;

export type WebsiteBlockerPage = (typeof websiteBlockerNav)[number]['key'];
