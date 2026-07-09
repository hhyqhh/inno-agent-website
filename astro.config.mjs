import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import starlightLinksValidator from 'starlight-links-validator';

// GitHub Pages 部署时设置 GITHUB_PAGES=true
// 本地 / 自定义域名部署保持根路径
const isGithubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: isGithubPages ? 'https://hhyqhh.github.io' : 'https://inno-agent.dev',
  base: isGithubPages ? '/inno-agent-web' : '/',
  integrations: [
    starlight({
      title: 'Inno Agent',
      plugins: [
        starlightLinksValidator(),
      ],
      logo: {
        light: './src/assets/logo-light.svg',
        dark: './src/assets/logo-dark.svg',
        replacesTitle: false,
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/hhyqhh/inno-agent' },
      ],
      defaultLocale: 'root',
      locales: {
        root: { label: '简体中文', lang: 'zh-CN' },
      },
      sidebar: [
        {
          label: '快速开始',
          items: [{ autogenerate: { directory: 'getting-started' } }],
        },
        {
          label: '教程',
          items: [{ autogenerate: { directory: 'tutorials' } }],
        },
        {
          label: 'Skill 库',
          items: [{ autogenerate: { directory: 'skill-library' } }],
        },
        {
          label: '使用案例',
          items: [{ autogenerate: { directory: 'use-cases' } }],
        },
      ],
      customCss: ['./src/styles/custom.css'],
      components: {
        Head: './src/components/HeadWithZoom.astro',
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
