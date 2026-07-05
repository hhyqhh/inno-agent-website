---
title: Skill 库
description: Inno Agent Skill 集合，开箱即用的专项能力包
---

# Skill 库

每个 Skill 是独立目录，可直接下载打包上传到工作区。

---

## 快速使用

从 [GitHub 仓库](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library) 下载 Skill 目录（或自行打包为 `.zip`），按需求选择上传入口：

- **工作区 Skill（局部）**——仅对绑定该工作区的会话生效。在工作区「预览」页，点击文件树工具栏 **✦** 按钮上传。
- **全局 Skill**——对所有工作区的会话生效。点击右侧「**技能**」标签页 →「**上传**」。

---

## Skill 列表

### 🌐 工具 · 信息获取

| Skill | 一句话 |
|---|---|
| [tavily-search](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/tavily-search) | 实时网络搜索，补充过时信息（需 [Tavily API Key](https://www.tavily.com/)，免费 1000 次/月） |

### 📐 教育 · 数学

| Skill | 一句话 | 效果 |
|---|---|---|
| [edu-solid-geometry](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/edu-solid-geometry) | 立体几何题 → Three.js 交互 3D 解题页 | [demo](https://github.com/Chloris-Blaxk/inno-agent-hub/blob/main/skill-library/assets/edu-solid-geometry/demo.gif) |
| [edu-analytic-geometry](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/edu-analytic-geometry) | 圆锥曲线题 → Canvas 2D 动态画板 | [demo](https://github.com/Chloris-Blaxk/inno-agent-hub/blob/main/skill-library/assets/edu-analytic-geometry/demo.gif) |

### 📚 教育 · 备考与刷题

| Skill | 一句话 |
|---|---|
| [Exam2Knowledge](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/Exam2Knowledge) | 把考题逆向拆成高频考点、解题模板与错题库 |

### 🧑‍🏫 教育 · 教师与批改

| Skill | 一句话 |
|---|---|
| [comment-on-docx](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/comment-on-docx) | 给 Word 加原生批注式反馈，定位到具体词句 |
| [homework-grader](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/homework-grader) | 量规驱动批改：证据引用打分、批量处理、生成评语 |

### 🎓 教育 · 自学与辅导

| Skill | 一句话 |
|---|---|
| [tutor](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/tutor) | 像优秀人类家教一样教任何学科，建立可迁移的真正理解 |
| [math-tutor](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/math-tutor) | 数学自学家教：引导建立理解，检查解法而非直接给步骤 |
| [socratic-tutor](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/socratic-tutor) | 苏格拉底式引导：0-4 级提示阶梯，绝不直接给完整答案 |
| [learning-opportunities](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/learning-opportunities) | AI 辅助编码后塞入循证学习练习，对抗能力退化 |

### 📄 文档 · 办公与转换

| Skill | 一句话 |
|---|---|
| [xlsx](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/xlsx) | 处理 .xlsx/.csv/.tsv 表格的读取、编辑、分析与公式计算 |
| [pdf](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/pdf) | 处理 PDF 读取、创建与审阅 |
| [docx](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/docx) | 创建、读取与编辑 Word 文档 |
| [pptx](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/pptx) | 处理 .pptx：创建、读取、解析或提取幻灯片内容 |
| [markitdown](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/markitdown) | 用 MarkItDown 将 PDF、Office、图片、音频等转 Markdown |

### 🔎 学习 · 研究与笔记

| Skill | 一句话 |
|---|---|
| [paper-lookup](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/paper-lookup) | 检索 PubMed、arXiv、OpenAlex 等 10 个学术论文库 |
| [citation-management](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/citation-management) | 学术引用管理：检索 Google Scholar 与 PubMed，生成 BibTeX |
| [baoyu-youtube-transcript](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/baoyu-youtube-transcript) | 下载 YouTube 字幕与封面，支持翻译与分章 |
| [baoyu-url-to-markdown](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/baoyu-url-to-markdown) | 抓取任意 URL 转为 markdown |
| [understand](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/understand) | 分析代码库生成交互式知识图谱 |
| [storm-research](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/storm-research) | 多视角提问 + 联网检索，产出维基百科式深度研究报告 |

### 🎨 创作 · 知识可视化

| Skill | 一句话 |
|---|---|
| [baoyu-comic](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/baoyu-comic) | 知识漫画创作，支持多种画风与基调 |
| [baoyu-infographic](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/baoyu-infographic) | 21 种布局 × 21 种风格生成专业信息图 |
| [baoyu-slide-deck](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/baoyu-slide-deck) | 从内容生成专业幻灯片图像 |
| [smart-illustrator](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/smart-illustrator) | 智能配图与 PPT 信息图生成器 |
| [ian-xiaohei-illustrations](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/ian-xiaohei-illustrations) | 生成 Ian「小黑」风格的中文正文配图 |

### 🧩 元能力 · 技能与提示词

| Skill | 一句话 |
|---|---|
| [skill-creator](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/skill-creator) | 创建、修改、优化 skill 并运行评测 |
| [prompt-engineer](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/prompt-engineer) | 编写、重构与评估 LLM 提示词 |

### 🎨 创作 · 视觉与设计

| Skill | 一句话 |
|---|---|
| [algorithmic-art](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/algorithmic-art) | 用 p5.js 创作算法生成艺术 |
| [canvas-design](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/canvas-design) | 运用设计理念创作海报、艺术品等视觉作品 |
| [theme-factory](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/theme-factory) | 用预设主题为幻灯片、文档统一配色与字体 |
| [frontend-slides](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/frontend-slides) | 一句话/PPT → 零依赖单文件动画网页幻灯片 |

### 📝 写作 · 文档协作

| Skill | 一句话 |
|---|---|
| [doc-coauthoring](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/doc-coauthoring) | 引导结构化协作流程，共同撰写技术文档 |

### 💻 开发 · 构建与测试

| Skill | 一句话 |
|---|---|
| [claude-api](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/claude-api) | 构建、调试与优化 Claude API 应用 |
| [mcp-builder](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/mcp-builder) | 构建高质量 MCP 服务器 |
| [web-artifacts-builder](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/web-artifacts-builder) | 用 React + Tailwind 构建 HTML artifact |
| [webapp-testing](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/webapp-testing) | 用 Playwright 测试本地 Web 应用 |
| [frontend-design](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/skill-library/frontend-design) | 打造高设计品质的生产级前端界面 |

---

## 贡献新 Skill

### 必填：`category` 分类标签

在 `SKILL.md` frontmatter 加一行 `category`：

```yaml
---
name: my-awesome-skill
category: 教学辅导
description: 一句话讲清这个 skill 做什么
---
```

可用分类（五选一）：

| 分类 | 适用场景 |
|---|---|
| `教学辅导` | 家教/讲题/讲解、自学陪练、作业批改 |
| `内容创作` | 视觉/图文/幻灯片/前端艺术等创作产出 |
| `文档处理` | Office/PDF/Markdown 读写转换 |
| `研究检索` | 学术检索、联网搜索、引用管理 |
| `开发工具` | LLM 应用开发、提示词工程、MCP/Skill 元能力 |

完整贡献流程见 [hub 仓库 README](https://github.com/Chloris-Blaxk/inno-agent-hub#贡献)。
