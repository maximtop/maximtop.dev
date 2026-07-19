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
      name: 'Extensions Update Tracker',
      description: 'Track and manage your Chrome extension updates in one place.',
      url: 'https://chromewebstore.google.com/detail/cdgepknigaiclfdmjckaknepgcighbnh',
      icon: 'refresh',
    },
    {
      name: 'AI AdBlocker',
      badge: 'Experimental',
      description: 'Block ads and unwanted content with AI-powered semantic rules.',
      url: 'https://chromewebstore.google.com/detail/icmfnmnifkggchbpaikgbpoenjgkkofb',
      icon: 'bot',
    },
    {
      name: 'Kode Injector',
      description: 'Inject JavaScript and CSS from local files into websites.',
      url: 'https://chromewebstore.google.com/detail/fgdehkdkmaiedleekbjpfoicpmodbicg',
      icon: 'code',
    },
    {
      name: 'Website Blocker: MT',
      description: 'Stay focused by blocking distracting websites.',
      url: 'https://chromewebstore.google.com/detail/enffllmgjpgoifnfeljkfhpedcadnpbj',
      icon: 'ban',
    },
  ],
  links: [
    { name: 'GitHub', url: 'https://github.com/maximtop' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/maximtop/' },
    { name: 'Email', url: 'mailto:me@maximtop.dev' },
  ],
} as const;
