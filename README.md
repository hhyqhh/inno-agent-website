# Inno Agent 网站

Inno Agent 的官方网站与文档站，部署于 `https://inno-agent.dev`。

本仓库只构建网站本身，Inno Agent 项目源码位于 [hhyqhh/inno-agent](https://github.com/hhyqhh/inno-agent)。

---

## 目录

- [技术栈](#技术栈)
- [项目结构](#项目结构)
- [本地开发](#本地开发)
- [部署](#部署)
- [如何增加内容](#如何增加内容)
  - [新增文档页](#新增文档页)
  - [修改主页](#修改主页)
- [主题与样式约定](#主题与样式约定)
- [常见维护任务](#常见维护任务)

---

## 技术栈

| 类别 | 技术 | 说明 |
| --- | --- | --- |
| 站点框架 | [Astro 7](https://astro.build) | 静态站点生成器，支持 `.astro` 组件 |
| 文档主题 | [@astrojs/starlight](https://starlight.astro.build) `^0.41` | Astro 官方文档主题，提供侧边栏、搜索、目录等 |
| 样式 | [Tailwind CSS v4](https://tailwindcss.com) `^4.1` | 通过 `@tailwindcss/vite` 插件接入，无 `tailwind.config.js` |
| 图片缩放 | [medium-zoom](https://github.com/francoischalifour/medium-zoom) `^1.1` | 文档页图片点击放大 |
| 图片处理 | [sharp](https://sharp.pixelplumbing.com) `^0.33` | Astro 内置图像优化依赖 |
| 链接校验 | [starlight-links-validator](https://github.com/HiDeoo/starlight-links-validator) `^0.15` | 构建期校验内部链接，断链即构建失败 |
| TypeScript | `astro/tsconfigs/strict` | 严格模式 |
| 包管理 | npm | 通过 `package-lock.json` 锁定版本 |

---

## 项目结构

```
inno-agent-website/
├── astro.config.mjs          # Astro + Starlight 配置（核心入口）
├── package.json              # 依赖与脚本
├── tsconfig.json             # 继承 astro 严格 tsconfig
├── skills-lock.json          # 已安装的 Claude Skill 锁文件
├── .agents/skills/           # 已安装的 Claude Skill（frontend-design）
├── logo/                     # 桌面 App 图标源文件（非网站用）
├── public/
│   ├── images/
│   │   ├── docs/             # 文档用截图与 GIF
│   │   └── paper/            # 主页"研究亮点"用论文图
│   └── videos/               # 视频资源
└── src/
    ├── pages/index.astro     # 自定义主页（非 Starlight 页）
    ├── components/           # 主页组件
    │   ├── Hero.astro
    │   ├── ResearchHighlights.astro
    │   ├── Features.astro
    │   ├── VideoDemo.astro
    │   ├── SkillShowcase.astro
    │   ├── Footer.astro
    │   ├── HeadWithZoom.astro  # 覆盖 Starlight 的 Head 组件
    │   └── ImageZoom.astro     # medium-zoom 注入
    ├── content/
    │   └── docs/             # Starlight 文档根目录
    │       ├── getting-started/   # 侧栏"快速开始"
    │       ├── tutorials/         # 侧栏"教程"
    │       ├── skill-library/     # 侧栏"Skill 库"
    │       ├── use-cases/         # 侧栏"使用案例"
    │       └── en/                 # 空目录，预留 i18n（当前未启用）
    ├── content.config.ts     # Starlight docs collection 定义
    ├── styles/custom.css     # 主题变量与 Starlight 覆盖样式
    ├── assets/               # logo-light.svg / logo-dark.svg
    └── i18n/                 # 空，预留
```

### 两种页面共存

本仓库在一个 Astro 工程内同时承载两类页面：

1. **自定义主页** — `src/pages/index.astro`，使用 Tailwind 手写，**不是** Starlight 文档页。它组合了 `Hero / ResearchHighlights / Features / VideoDemo / SkillShowcase / Footer` 六个组件，主题切换和移动端菜单逻辑写在该文件底部的 `<script>` 中。
2. **Starlight 文档** — `src/content/docs/` 下所有 `.md` 文件，由 Starlight 主题渲染，自动拥有侧边栏、搜索、目录、上下页导航。

---

## 本地开发

### 环境要求

- Node.js ≥ 20.6.0
- npm

### 安装并启动

```bash
# 安装依赖
npm install

# 启动开发服务器（默认 http://localhost:4321）
npm run dev
```

### 三个可用脚本

| 命令 | 作用 |
| --- | --- |
| `npm run dev` | 启动开发服务器，文件变更热更新 |
| `npm run build` | 构建生产版本到 `dist/` |
| `npm run preview` | 本地预览 `dist/` 构建产物 |

> 本仓库**没有**测试、Lint、Format 命令。TypeScript 检查由 `astro check` 间接提供，需要时手动执行。

---

## 部署

`astro.config.mjs` 中 `site: 'https://inno-agent.dev'` 已固定为正式域名。`npm run build` 产出全静态文件到 `dist/`，可托管至任意静态站点平台。

### 常见部署方式

**方式一：静态托管（Vercel / Netlify / Cloudflare Pages）**

- 构建命令：`npm run build`
- 输出目录：`dist`
- Node 版本：20.x 或以上

**方式二：自建服务器（Nginx 等）**

```bash
npm run build
# 将 dist/ 整体上传至服务器，由 Nginx 配置 root 指向该目录
```

> 本仓库**没有** `.github/workflows`，目前未配置 GitHub Actions 自动部署。如需 CI/CD，可自行添加。

---

## 如何增加内容

### 新增文档页

文档页放在 `src/content/docs/` 下，**侧边栏自动生成**，无需手动维护导航。

#### 1. 选择目录

根据内容类型放入对应子目录：

| 目录 | 侧边栏分组 | 用途 |
| --- | --- | --- |
| `getting-started/` | 快速开始 | 介绍、安装、首次使用 |
| `tutorials/` | 教程 | 端到端流程示例 |
| `skill-library/` | Skill 库 | Skill 包说明 |
| `use-cases/` | 使用案例 | 工作区模板与场景 |

#### 2. 创建 Markdown 文件

文件名即 URL，例如 `getting-started/installation.md` → `/getting-started/installation/`。

```markdown
---
title: 页面标题
description: 一句话描述，会出现在 SEO 与侧边栏
sidebar:
  order: 1   # 可选，控制侧边栏内排序，数字越小越靠前
---

# 正文标题

正文使用标准 Markdown，支持 Starlight 提供的所有组件（如 `<Steps>`、`<Card>`、`<Cards>`、`<Aside>` 等，参见 [Starlight 文档](https://starlight.astro.build/components/)）。

## 引用图片

把图片放到 `public/images/docs/`，然后用绝对路径引用：

![示例](/images/docs/your-screenshot.png)

文档页的 `<img>` 会自动接入 medium-zoom，点击放大。
```

#### 3. 关键约定

- **frontmatter 必填字段**：`title`、`description`
- **文件名规范**：小写英文 + 连字符，如 `first-workspace.md`
- **内部链接**：使用尾部带斜杠的绝对路径，如 `/getting-started/installation/`（不带斜杠会让 `starlight-links-validator` 报警）
- **断链会让构建失败**：重命名或删除文档时，记得全局搜索并更新引用
- **图片放置**：文档用图放 `public/images/docs/`，论文/研究图放 `public/images/paper/`

#### 4. 多语言（当前未启用）

`src/content/docs/en/` 目录已建但为空，且 `astro.config.mjs` 的 `locales` 只声明了 `root: zh-CN`。若要启用英文，需要：

1. 在 `astro.config.mjs` 的 `locales` 中加入 `en: { label: 'English', lang: 'en' }`
2. 把 `defaultLocale` 从 `'root'` 改成 `'zh-CN'`，并相应调整 `root` 与 `en` 的关系
3. 在 `src/content/docs/en/` 下镜像一份目录结构

---

### 修改主页

主页由 `src/pages/index.astro` 与 `src/components/` 下的 6 个组件拼装而成。各组件职责：

| 组件 | 作用 | 数据来源 |
| --- | --- | --- |
| `Hero.astro` | 首屏大标题 + CTA 按钮 + 截图 | 硬编码 |
| `ResearchHighlights.astro` | 论文亮点 + 截图展示 | 顶部 `pillars`、`highlights`、`metrics` 数组 |
| `Features.astro` | 核心能力六宫格卡片 | 顶部 `features` 数组 |
| `VideoDemo.astro` | 场景演示卡片（带跳转链接） | 顶部 `demos` 数组 |
| `SkillShowcase.astro` | Skill 库精选展示 | 顶部 `skills` 数组 |
| `Footer.astro` | 底部链接与版权 | 硬编码 |

#### 常见修改场景

**改文案或卡片内容**：直接编辑对应组件顶部的数据数组（如 `features`、`highlights`、`demos`），卡片会自动重新渲染。

**改主屏标题或副标题**：编辑 `src/components/Hero.astro` 中的 `<h1>` / `<p>`。

**替换截图**：把新图片放到 `public/images/paper/` 或 `public/images/docs/`，然后修改组件中的 `image` 字段路径。

**改导航栏链接**：编辑 `src/pages/index.astro` 中 `<nav>` 块的 `<a href>`。注意桌面端和移动端菜单各有一份，要同时改。

**加新区块**：在 `src/components/` 新建 `YourSection.astro`，在 `src/pages/index.astro` 顶部 `import`，然后在 `<main>` 内对应位置 `<YourSection />` 调用。

---

## 主题与样式约定

### 品牌色

- 主品牌色：`#555aff`（靛蓝紫）
- 浅色态强调色：`#555aff`
- 深色态强调色：`#b7c0ff`

### 主题变量

主题样式集中在 `src/styles/custom.css`，由 `astro.config.mjs` 的 `customCss` 字段引入。两套变量：

- `--sl-color-*`：Starlight 内置变量，覆盖后改变 Starlight 默认配色
- `--aiecnu-*`：本仓库自定义变量，用于品牌 logo、主题切换按钮等

深色态覆盖通过 `html[data-theme='dark']` 选择器实现。修改主题颜色时**优先改 CSS 变量**，不要直接改组件 HTML。

### 主题切换机制

- 主题状态存于 `<html data-theme="light|dark">`
- 持久化在 `localStorage`，键名为 `starlight-theme`
- `src/pages/index.astro` 顶部有一段 `is:inline` 内联脚本，**在首次绘制前**读取并应用主题，避免 FOUC
- 文档页的主题切换由 `src/components/HeadWithZoom.astro` 接管：把 Starlight 原生的下拉选择改写为点击切换

### Starlight 组件覆盖

`astro.config.mjs` 中 `components: { Head: './src/components/HeadWithZoom.astro' }` 覆盖了 Starlight 的 `Head` 组件。`HeadWithZoom` 做了三件事：

1. 渲染默认 `<Head />`
2. 注入 `ImageZoom.astro`（medium-zoom 绑定到 `article img`，支持 Starlight SPA 导航）
3. 注入脚本，把 `starlight-theme-select` 改造成点击切换

### Tailwind v4 用法

Tailwind v4 通过 Vite 插件接入，**没有** `tailwind.config.js`。`@import 'tailwindcss';` 写在 `src/styles/custom.css` 顶部。在 `.astro` 文件中直接用 `class="..."` 即可使用 Tailwind 工具类。

---

## 常见维护任务

### 1. 更新依赖

```bash
npm outdated              # 查看可升级项
npm install <pkg>@latest   # 升级单个包
```

> Starlight 与 Astro 大版本升级前请先阅读其 [升级指南](https://starlight.astro.build/start/upgrading/)，主题变量和组件 API 可能有变化。

### 2. 新增 Skill 包到文档

把 Skill 的说明文档作为 `.md` 放入 `src/content/docs/skill-library/`，frontmatter 写清 `title` 与 `description` 即可。

### 3. 替换 logo

`src/assets/logo-light.svg` 与 `src/assets/logo-dark.svg` 是网站 logo，被 `astro.config.mjs` 的 `logo` 字段引用。直接覆盖文件即可，无需改配置。

### 4. 修改域名

修改 `astro.config.mjs` 中的 `site` 字段。同时检查 `src/pages/index.astro` 中的硬编码外链（如 GitHub、`app.inno-agent.cn` 等）是否需要同步调整。

### 5. 检查断链

```bash
npm run build
```

`starlight-links-validator` 会在构建期扫描所有内部链接，断链会以构建错误形式报出。修复后重新构建即可。

### 6. frontend-design Skill

`.agents/skills/frontend-design/SKILL.md` 是已安装的 Claude Skill（来源 `anthropics/skills`，版本锁在 `skills-lock.json`）。涉及前端 / 设计决策时可参考其中的设计原则。

---

## 相关链接

- Inno Agent 项目仓库：<https://github.com/hhyqhh/inno-agent>
- 网站线上地址：<https://inno-agent.dev>
- Starlight 文档：<https://starlight.astro.build>
- Astro 文档：<https://docs.astro.build>
