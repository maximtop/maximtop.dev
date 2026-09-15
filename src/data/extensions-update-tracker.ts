import { extensionStoreLinks } from './store-links';

export const extensionsUpdateTracker = {
  name: 'Extensions Update Tracker',
  baseUrl: '/extensions/update-tracker/',
  pageUrl: 'https://maximtop.dev/extensions/update-tracker/',
  chromeStoreUrl: extensionStoreLinks.extensionsUpdateTracker.chrome.url,
  edgeStoreUrl: extensionStoreLinks.extensionsUpdateTracker.edge.url,
  firefoxStoreUrl: extensionStoreLinks.extensionsUpdateTracker.firefox.url,
  githubUrl: 'https://github.com/maximtop/extensions-update-tracker',
  issuesUrl: 'https://github.com/maximtop/extensions-update-tracker/issues',
  iconUrl: '/extensions/update-tracker/icon.png',
  contactEmail: 'me@maximtop.dev',
} as const;

export const extensionsUpdateTrackerNav = [
  { name: 'Overview', href: extensionsUpdateTracker.baseUrl, key: 'overview' },
  { name: 'How it works', href: `${extensionsUpdateTracker.baseUrl}how-it-works/`, key: 'how-it-works' },
  { name: 'FAQ', href: `${extensionsUpdateTracker.baseUrl}faq/`, key: 'faq' },
  { name: 'Privacy', href: `${extensionsUpdateTracker.baseUrl}privacy/`, key: 'privacy' },
  { name: 'Support', href: `${extensionsUpdateTracker.baseUrl}support/`, key: 'support' },
] as const;

export type ExtensionsUpdateTrackerPage = (typeof extensionsUpdateTrackerNav)[number]['key'];
