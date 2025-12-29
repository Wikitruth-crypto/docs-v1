import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'WikiTruth Docs',
  tagline: '基于 Oasis Sapphire 的隐私证据市场文档',
  favicon: 'favicon.svg',

  // 设置为中文为默认语言
  url: 'https://docs.wikitruth.io',
  baseUrl: '/',
  organizationName: 'wikitruth',
  projectName: 'wikitruth-docs',

  onBrokenLinks: 'warn',
  markdown: {
    format: 'mdx',
  },

  // 多语言支持（暂时禁用，后续再启用）
  // i18n: {
  //   defaultLocale: 'zh',
  //   locales: ['zh'],
  //   localeConfigs: {
  //     zh: {
  //       label: '中文',
  //       direction: 'ltr',
  //       htmlLang: 'zh-CN',
  //     },
  //   },
  // },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // 编辑链接 - 可以根据需要配置
          editUrl: undefined,
          // 在文档页面显示最后更新时间（如果不在 git 仓库中，设置为 false）
          showLastUpdateTime: false,
          // 在文档页面显示最后更新作者
          showLastUpdateAuthor: false,
          // 文档路径，使用默认值，i18n 会自动处理语言子目录
          path: 'docs',
          // 设置文档路由为 /docs
          routeBasePath: 'docs',
        },
        blog: false, // 禁用博客功能
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // 使用默认的 Navbar 和 Footer，但配置样式和内容
    // 注意：自定义组件已保留在 src/theme/Navbar/index.custom.tsx 和 src/theme/Footer/index.custom.tsx 中
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
          to: 'https://wikitruth.io',
          label: 'Home',
          position: 'left',
        },
        {
          href: 'https://wikitruth.io/roadmap',
          label: 'Roadmap',
          position: 'left',
        },
        {
          href: 'https://wikitruth.io/blog',
          label: 'Blog',
          position: 'left',
        },
        {
          href: 'https://wikitruth.io/team',
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
          href: 'https://beta.wikitruth.io',
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
              label: 'Twitter',
              href: 'https://x.com/WikiTruthLabs',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/+kKfEGJ6Ua2FhYjI1',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/KVDs7CFSr2',
            },
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
    // 配置颜色模式 - 强制使用深色模式
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false, // 允许用户切换，但默认是深色
      respectPrefersColorScheme: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

