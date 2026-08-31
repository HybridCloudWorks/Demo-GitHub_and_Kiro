// @ts-check
// Docusaurus configuration for "GitHub + Kiro: Level 0 to Advanced".
//
// This file ONLY builds static files into docs/build. It does not host anything.
// GitHub Pages (free for public repos) hosts the built output. See
// .github/workflows/deploy-docs.yml for the automated build+publish pipeline.
//
// url / baseUrl are what GitHub Pages needs to serve the site at:
//     https://<org>.github.io/<repo>/
// For a fork, override them without editing this file by setting env vars:
//     SITE_URL=https://<you>.github.io  SITE_BASE_URL=/<your-repo>/  npm run build
// The deploy workflow sets these automatically from the repository it runs in.

const {themes} = require('prism-react-renderer');

// Change these two defaults to match your GitHub username and repo name,
// OR let the deploy workflow inject them via environment variables.
const ORG = process.env.GITHUB_ORG || 'HybridCloudWorks';
const REPO = process.env.GITHUB_REPO || 'Demo-GitHub_and_Kiro';

const url = process.env.SITE_URL || `https://${ORG}.github.io`;
const baseUrl = process.env.SITE_BASE_URL || `/${REPO}/`;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GitHub + Kiro: Level 0 to Advanced',
  tagline: 'From "what is version control?" to advanced GitHub + Kiro power workflows.',
  favicon: 'img/favicon.ico',

  url,
  baseUrl,

  organizationName: ORG,
  projectName: REPO,

  // GitHub Pages serves 404.html for unknown routes; "throw" keeps our links honest.
  onBrokenLinks: 'throw',

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themes: ['@docusaurus/theme-mermaid'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // "Edit this page" points back at the repo so learners can contribute.
          editUrl: `https://github.com/${ORG}/${REPO}/tree/main/docs/`,
          routeBasePath: '/', // docs are the homepage of the course site
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.png',
      navbar: {
        title: 'GitHub + Kiro',
        logo: {
          alt: 'GitHub + Kiro course logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'courseSidebar',
            position: 'left',
            label: 'Course',
          },
          {
            href: `https://github.com/${ORG}/${REPO}`,
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://kiro.dev',
            label: 'Kiro',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Course',
            items: [
              {label: 'Start at Level 0', to: '/l0-getting-started/welcome'},
              {label: 'Learning path', to: '/'},
            ],
          },
          {
            title: 'Tools',
            items: [
              {label: 'GitHub', href: 'https://github.com'},
              {label: 'Kiro', href: 'https://kiro.dev'},
            ],
          },
          {
            title: 'More',
            items: [
              {label: 'Repository', href: `https://github.com/${ORG}/${REPO}`},
            ],
          },
        ],
        copyright: `Built with Docusaurus · Hosted free on GitHub Pages · MIT Licensed.`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
        additionalLanguages: ['bash', 'json', 'yaml'],
      },
    }),
};

module.exports = config;
