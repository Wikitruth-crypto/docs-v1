import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'WikiTruth Docs',
  tagline: 'Documentation for the privacy evidence market based on Oasis Sapphire',
  favicon: '/logo/logo-3.svg',

  url: 'https://docs.wikitruth.xyz',
  baseUrl: '/',
  organizationName: 'wikitruth',
  projectName: 'wikitruth-docs',

  onBrokenLinks: 'warn',
  markdown: {
    format: 'mdx',
  },

  // i18n configuration - English as default, Chinese as translation
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
      },
      zh: {
        label: '中文',
        direction: 'ltr',
        htmlLang: 'zh-CN',
        calendar: 'gregory',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
          path: 'docs',
          routeBasePath: 'docs',
        },
        blog: false, // disable blog feature
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  clientModules: [require.resolve('./src/clientModules/copyAddress.js')],

  themeConfig: {
    // use the default Navbar and Footer, but configure the styles and content
    // note: the custom components are kept in src/theme/Navbar/index.custom.tsx and src/theme/Footer/index.custom.tsx
    navbar: {
      title: 'Wiki Truth',
      logo: {
        alt: 'WikiTruth Logo',
        src: '/logo/logo-2.svg',
        srcDark: '/logo/logo-2.svg',
        width: 36,
        height: 36,
      },
      hideOnScroll: false,
      items: [
        {
          to: 'https://wikitruth.xyz',
          label: 'Home',
          position: 'left',
        },
        {
          href: 'https://wikitruth.xyz/roadmap',
          label: 'Roadmap',
          position: 'left',
        },
        {
          href: 'https://wikitruth.xyz/blog',
          label: 'Blog',
          position: 'left',
        },
        {
          href: 'https://wikitruth.xyz/team',
          label: 'Team',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://app.wikitruth.xyz',
          label: 'Beta App',
          position: 'right',
          className: 'button button--primary',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/WikiTruth-crypto',
            },
            {
              label: 'Email',
              href: 'mailto:wikitruth@proton.me',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Terms of Service',
              href: '#',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} WikiTruth. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['solidity', 'bash', 'json'],
    },
    // configure color mode - force dark mode
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false, // allow user to switch, but default is dark
      respectPrefersColorScheme: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

