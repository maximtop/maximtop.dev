export const kodeInjector = {
  name: 'Kode Injector',
  baseUrl: '/extensions/kode-injector/',
  pageUrl: 'https://maximtop.dev/extensions/kode-injector/',
  storeUrl:
    'https://chromewebstore.google.com/detail/kode-injector/fgdehkdkmaiedleekbjpfoicpmodbicg',
  edgeStoreUrl:
    'https://microsoftedge.microsoft.com/addons/detail/kode-injector/allgihdbdjaficgacdildgfdcnnkjmjp',
  githubUrl: 'https://github.com/maximtop/kode-injector',
  issuesUrl: 'https://github.com/maximtop/kode-injector/issues/new',
  releasesUrl: 'https://github.com/maximtop/kode-injector/releases',
  iconUrl: '/extensions/kode-injector/icon.png',
  ogImageUrl: '/extensions/kode-injector/og.png',
  contactEmail: 'me@maximtop.dev',
} as const;

export const kodeInjectorNav = [
  { name: 'Overview', href: kodeInjector.baseUrl, key: 'overview' },
  {
    name: 'How it works',
    href: `${kodeInjector.baseUrl}how-it-works/`,
    key: 'how-it-works',
  },
  { name: 'FAQ', href: `${kodeInjector.baseUrl}faq/`, key: 'faq' },
  {
    name: 'Privacy',
    href: `${kodeInjector.baseUrl}privacy/`,
    key: 'privacy',
  },
  {
    name: 'Support',
    href: `${kodeInjector.baseUrl}support/`,
    key: 'support',
  },
] as const;

export type KodeInjectorPage = (typeof kodeInjectorNav)[number]['key'];
