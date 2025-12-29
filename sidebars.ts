import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * 侧边栏配置
 * 基于 sidebar.js 的结构进行配置
 */
const sidebars: SidebarsConfig = {
  // 默认侧边栏（中文）
  // 注意：在 i18n 模式下，Docusaurus 会自动处理语言前缀
  docs: [
    'intro',
    {
      type: 'category',
      label: '简介与背景',
      items: [
        'overview',
        'pain-points',
        'social-principle',
        'process',
      ],
    },
    {
      type: 'category',
      label: '技术文档',
      items: [
        'smart-contracts',
        'secret-token',
        'security',
      ],
    },
    {
      type: 'category',
      label: '功能细节',
      items: [
        'truth-box',
        'status-mechanism',
        'create-process',
        'roles-exchange',
      ],
    },
    {
      type: 'category',
      label: 'Tokenomics',
      items: [
        'rewards-fee',
        'token-allocation',
      ],
    },
    {
      type: 'category',
      label: '未来计划',
      items: [
        'reward-market',
      ],
    },
    {
      type: 'category',
      label: '治理与合规',
      items: [
        'dao',
        'safety',
        'blacklist',
      ],
    },
    {
      type: 'category',
      label: '技术展望',
      items: [
        'industry-dilemma',
        'innovative',
        'enlightenment',
        'challenge',
      ],
    },
    {
      type: 'category',
      label: '未来愿景与附录',
      items: [
        'future',
        'faq',
        'statement',
        'thanks',
      ],
    },
  ],
};

export default sidebars;

