export const splitForHackerNews = {
  name: 'Split for Hacker News',
  baseUrl: '/extensions/split-for-hacker-news/',
  pageUrl: 'https://maximtop.dev/extensions/split-for-hacker-news/',
  findDiscussionUrl:
    '/extensions/split-for-hacker-news/find-hacker-news-discussion/',
  readSideBySideUrl:
    '/extensions/split-for-hacker-news/read-comments-side-by-side/',
  storeUrl:
    'https://chromewebstore.google.com/detail/split-for-hacker-news/jmocibcalpebojmljmhlkeackggnkhfm',
  githubUrl: 'https://github.com/maximtop/hn-split',
  issuesUrl: 'https://github.com/maximtop/hn-split/issues/new',
  privacySourceUrl: 'https://github.com/maximtop/hn-split/blob/master/PRIVACY.md',
  iconUrl: '/extensions/split-for-hacker-news/icon.png',
  ogImageUrl: '/extensions/split-for-hacker-news/og.png',
  contactEmail: 'me@maximtop.dev',
  minimumChromeVersion: 140,
} as const;

export const splitForHackerNewsNav = [
  {
    name: 'Overview',
    href: splitForHackerNews.baseUrl,
    key: 'overview',
  },
  {
    name: 'Find discussions',
    href: splitForHackerNews.findDiscussionUrl,
    key: 'find-discussion',
  },
  {
    name: 'Read side by side',
    href: splitForHackerNews.readSideBySideUrl,
    key: 'side-by-side',
  },
  {
    name: 'FAQ',
    href: `${splitForHackerNews.baseUrl}faq/`,
    key: 'faq',
  },
  {
    name: 'Privacy',
    href: `${splitForHackerNews.baseUrl}privacy/`,
    key: 'privacy',
  },
  {
    name: 'Support',
    href: `${splitForHackerNews.baseUrl}support/`,
    key: 'support',
  },
] as const;

export type SplitForHackerNewsPage =
  (typeof splitForHackerNewsNav)[number]['key'];
