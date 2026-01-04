import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Sidebar configuration
 * Based on sidebar.js structure
 * English is the default language
 */
const sidebars: SidebarsConfig = {
  // Default sidebar (English)
  // Note: In i18n mode, Docusaurus automatically handles language prefixes
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Introduction & Background',
      items: [
        'overview',
        'pain-points',
        'social-principle',
        'process',
      ],
    },
    {
      type: 'category',
      label: 'Technical Documentation',
      items: [
        'smart-contracts',
        'secret-token',
        'security',
      ],
    },
    {
      type: 'category',
      label: 'Feature Details',
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
      label: 'Future Plans',
      items: [
        'reward-market',
      ],
    },
    {
      type: 'category',
      label: 'Governance & Compliance',
      items: [
        'dao',
        'safety',
        'blacklist',
      ],
    },
    {
      type: 'category',
      label: 'Technical Outlook',
      items: [
        'industry-dilemma',
        'innovative',
        'enlightenment',
        'challenge',
      ],
    },
    {
      type: 'category',
      label: 'Future Vision & Appendix',
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

