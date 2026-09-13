export interface StoreLink {
  label: string;
  url: string;
}

export const extensionStoreLinks = {
  noMoreAgo: {
    chrome: {
      label: 'Chrome',
      url: 'https://chromewebstore.google.com/detail/no-more-ago/pcaimklimkjljhmbfkhidealekkiopbd',
    },
  },
  splitForHackerNews: {
    chrome: {
      label: 'Chrome',
      url: 'https://chromewebstore.google.com/detail/split-for-hacker-news/jmocibcalpebojmljmhlkeackggnkhfm',
    },
    edge: {
      label: 'Edge',
      url: 'https://microsoftedge.microsoft.com/addons/detail/bofpcafdmcaidmhbcnndgeagmcjhmboa',
    },
  },
  hideUpgradeButton: {
    chrome: {
      label: 'Chrome',
      url: 'https://chromewebstore.google.com/detail/hide-upgrade-button-for-g/flakajdfnklpgiefoffmecgbfbckmpcb',
    },
    edge: {
      label: 'Edge',
      url: 'https://microsoftedge.microsoft.com/addons/detail/oifpjlhikjiifjlcihandpghdiechhik',
    },
    firefox: {
      label: 'Firefox',
      url: 'https://addons.mozilla.org/en-US/firefox/addon/hide-upgrade-gmail-drive-docs/',
    },
  },
  extensionsUpdateTracker: {
    chrome: {
      label: 'Chrome',
      url: 'https://chromewebstore.google.com/detail/cdgepknigaiclfdmjckaknepgcighbnh',
    },
    edge: {
      label: 'Edge',
      url: 'https://microsoftedge.microsoft.com/addons/detail/mcblolcgepoahkfedfkjohdgnpgbfnpf',
    },
  },
  aiAdBlocker: {
    chrome: {
      label: 'Chrome',
      url: 'https://chromewebstore.google.com/detail/icmfnmnifkggchbpaikgbpoenjgkkofb',
    },
  },
  kodeInjector: {
    chrome: {
      label: 'Chrome',
      url: 'https://chromewebstore.google.com/detail/kode-injector/fgdehkdkmaiedleekbjpfoicpmodbicg',
    },
    edge: {
      label: 'Edge',
      url: 'https://microsoftedge.microsoft.com/addons/detail/kode-injector/allgihdbdjaficgacdildgfdcnnkjmjp',
    },
    firefox: {
      label: 'Firefox',
      url: 'https://addons.mozilla.org/en-US/firefox/addon/kode-injector/',
    },
  },
  websiteBlocker: {
    chrome: {
      label: 'Chrome',
      url: 'https://chromewebstore.google.com/detail/website-blocker-by-mt/enffllmgjpgoifnfeljkfhpedcadnpbj',
    },
    edge: {
      label: 'Edge',
      url: 'https://microsoftedge.microsoft.com/addons/detail/ihcdcnlbngigimopaainepmmhlgljikc',
    },
  },
} as const satisfies Record<string, Record<string, StoreLink>>;
