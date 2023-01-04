// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'InfoWarehouse',
  tagline: 'Information "Warehouse" — wiki, "raw materials"/resources for writing',
  url: 'https://wiki.cedricchee.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  noIndex: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cedrickchee', // Usually your GitHub org/user name.
  projectName: 'src', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/cedrickchee/src/blob/main/apps/wiki/',
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
      navbar: {
        title: 'InfoWarehouse',
        logo: {
          alt: 'InfoWarehouse Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'courses/ai/fast.ai/fast.ai',
          //   position: 'left',
          //   label: 'fast.ai',
          // },
          {
            href: 'https://github.com/cedrickchee/src',
            label: "GitHub",
            "aria-label": "GitHub repository",
            className: "header-github-link",
            position: 'right',
          },
          {
            href: "https://twitter.com/cedric_chee",
            label: "Twitter",
            position: "right",
          },
          {
            href: "https://cedricchee.com",
            position: "right",
            label: "Blog",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Wiki',
            items: [
              {
                label: 'Home',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Matrix Chat',
                href: 'https://matrix.to/#/@toooldforthis:matrix.org',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/cedric_chee',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/cedrickchee/src',
              },
            ],
          },
        ],
        copyright: `Copyright 2018 - ${new Date().getFullYear()} Cedric Chee.<br/>The content for this site is <a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank">CC-BY-SA 4.0</a> license. The code for this site is MIT.<br />Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
