import { extensionStoreLinks } from './store-links';
import icon from '../assets/extensions/ai-adblocker/icon.png';
import ogImage from '../assets/extensions/ai-adblocker/og.png';

export const aiAdBlocker = {
  name: 'AI AdBlocker',
  baseUrl: '/extensions/ai-adblocker/',
  pageUrl: 'https://maximtop.dev/extensions/ai-adblocker/',
  storeUrl: extensionStoreLinks.aiAdBlocker.chrome.url,
  githubUrl: 'https://github.com/maximtop/ai-blocker-experiment',
  issuesUrl: 'https://github.com/maximtop/ai-blocker-experiment/issues/new',
  iconUrl: icon.src,
  ogImageUrl: ogImage.src,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  contactEmail: 'me@maximtop.dev',
} as const;

export const aiAdBlockerNav = [
  { name: 'Overview', href: aiAdBlocker.baseUrl, key: 'overview' },
  {
    name: 'Privacy',
    href: `${aiAdBlocker.baseUrl}privacy/`,
    key: 'privacy',
  },
  {
    name: 'Support',
    href: `${aiAdBlocker.baseUrl}support/`,
    key: 'support',
  },
] as const;
