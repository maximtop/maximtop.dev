import { extensionStoreLinks } from './store-links';

export const site = {
  name: 'Maxim Topciu',
  title: 'Maxim Topciu — Browser Extensions Team Lead',
  tagline: 'I build browser extensions',
  description:
    'Team lead of the browser extensions team at AdGuard. I build ad blockers and developer tools used by more than 30 million people.',
  email: 'me@maximtop.dev',
  bio: [
    'I lead the browser extensions development team at AdGuard, where we build the AdGuard Browser Extension — an open-source ad blocker trusted by 30+ million users across Chrome, Firefox, Edge, and Opera — 16 million on Chrome alone.',
    'Outside of work I ship my own extensions: small, focused tools that solve everyday problems — from tracking extension updates to experimenting with AI-powered ad blocking.',
  ],
  work: {
    name: 'AdGuard Browser Extension',
    description:
      'Open-source ad blocker for all major browsers. I lead the team behind it.',
    url: 'https://github.com/AdguardTeam/AdguardBrowserExtension',
    icon: 'shield',
    meta: '30M+ users',
  },
  projects: [
    {
      name: 'No More Ago',
      badge: 'New',
      description: 'Replace trusted relative timestamps with exact dates.',
      url: extensionStoreLinks.noMoreAgo.chrome.url,
      icon: 'clock',
      storeLinks: Object.values(extensionStoreLinks.noMoreAgo),
    },
    {
      name: 'Split for Hacker News',
      badge: 'New',
      description: 'Find exact Hacker News discussions and read them beside the article.',
      url: '/extensions/split-for-hacker-news/',
      icon: 'comments',
      meta: 'Product page',
      storeLinks: Object.values(extensionStoreLinks.splitForHackerNews),
    },
    {
      name: 'Hide Upgrade Button',
      badge: 'New',
      description: 'Hide the Upgrade and Ask Gemini buttons in Gmail, Drive, and Docs.',
      url: '/extensions/hide-upgrade-button/',
      icon: 'hide',
      meta: 'Product page',
      storeLinks: Object.values(extensionStoreLinks.hideUpgradeButton),
    },
    {
      name: 'Extensions Update Tracker',
      description: 'Track browser extension updates and review local version history.',
      url: '/extensions/update-tracker/',
      icon: 'refresh',
      meta: 'Product page',
      storeLinks: Object.values(extensionStoreLinks.extensionsUpdateTracker),
    },
    {
      name: 'AI AdBlocker',
      badge: 'Experimental',
      description: 'Block ads and unwanted content with AI-powered semantic rules.',
      url: extensionStoreLinks.aiAdBlocker.chrome.url,
      icon: 'bot',
      storeLinks: Object.values(extensionStoreLinks.aiAdBlocker),
    },
    {
      name: 'Kode Injector',
      description: 'Inject JavaScript and CSS from local files into websites.',
      url: '/extensions/kode-injector/',
      icon: 'code',
      meta: 'Product page',
      storeLinks: Object.values(extensionStoreLinks.kodeInjector),
    },
    {
      name: 'Website Blocker: MT',
      description: 'Stay focused by blocking distracting websites.',
      url: extensionStoreLinks.websiteBlocker.chrome.url,
      icon: 'ban',
      storeLinks: Object.values(extensionStoreLinks.websiteBlocker),
    },
  ],
  links: [
    { name: 'GitHub', url: 'https://github.com/maximtop' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/maximtop/' },
    { name: 'Email', url: 'mailto:me@maximtop.dev' },
  ],
} as const;
