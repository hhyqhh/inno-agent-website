import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import starlightLinksValidator from 'starlight-links-validator';

export default defineConfig({
  site: 'https://inno-agent.dev',
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
