import { extensionStoreLinks } from './store-links';

export const hideUpgradeButton = {
  name: 'Hide Upgrade Button',
  fullName: 'Hide Upgrade Button for Gmail, Drive & Docs',
  baseUrl: '/extensions/hide-upgrade-button/',
  pageUrl: 'https://maximtop.dev/extensions/hide-upgrade-button/',
  storeUrl: extensionStoreLinks.hideUpgradeButton.chrome.url,
  edgeStoreUrl: extensionStoreLinks.hideUpgradeButton.edge.url,
  firefoxStoreUrl: extensionStoreLinks.hideUpgradeButton.firefox.url,
  githubUrl: 'https://github.com/maximtop/hide-gmail-upgrade-button',
  issuesUrl: 'https://github.com/maximtop/hide-gmail-upgrade-button/issues',
  newIssueUrl: 'https://github.com/maximtop/hide-gmail-upgrade-button/issues/new',
  privacySourceUrl:
    'https://github.com/maximtop/hide-gmail-upgrade-button/blob/master/PRIVACY.md',
  iconUrl: '/extensions/hide-upgrade-button/icon.svg',
  ogImageUrl: '/extensions/hide-upgrade-button/og.png',
  contactEmail: 'me@maximtop.dev',
} as const;

export const hideUpgradeButtonNav = [
  {
    name: 'Overview',
    href: hideUpgradeButton.baseUrl,
    key: 'overview',
  },
  {
    name: 'Privacy',
    href: `${hideUpgradeButton.baseUrl}privacy/`,
    key: 'privacy',
  },
  {
    name: 'Support',
    href: `${hideUpgradeButton.baseUrl}support/`,
    key: 'support',
  },
] as const;

export type HideUpgradeButtonPage =
  (typeof hideUpgradeButtonNav)[number]['key'];
