---
title: 工作区模板
description: 按场景整理的工作区预设，开箱即用的 Agent 人格 + 技能组合
---

# 工作区模板

按场景整理的**工作区模板**（预设）。每个模板把一个学习/创作场景所需的 **Agent 人格 + 专项技能**打包在一起，让你开箱即用。

Inno Agent 的「简单模式」会直接把这些模板渲染成欢迎页的**预设卡片**，点一下就进入一个配好的工作区开始对话。

---

## 模板列表

| 模板 | 场景 | 包含 Skill | 状态 |
|---|---|---|---|
| [ielts-prep](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/workspace-templates/ielts-prep) | 雅思英语备考 | card-maker（词汇卡片生成器）| ✅ 可用 |
| [ppt-creation](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/workspace-templates/ppt-creation) | PPT / 演示文稿制作 | ppt-builder | ✅ 可用 |
| [classroom-quiz](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/workspace-templates/classroom-quiz) | 课堂出题 | quiz-builder | ✅ 可用 |
| [knowledge-explain](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/workspace-templates/knowledge-explain) | 知识讲解 + 课件 | explain-builder, pptx | ✅ 可用 |
| [math-interactive](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/workspace-templates/math-interactive) | 数学交互解题 | edu-solid-geometry, edu-analytic-geometry | ✅ 可用 |
| [teaching-webpage](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/workspace-templates/teaching-webpage) | 教学互动网页 | claude-design, visual-explainer, webpage-builder | ✅ 可用 |
| [lesson-plan](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/workspace-templates/lesson-plan) | 结构化教案生成 | lesson-builder | 🚧 骨架 |
| [scenario-explain](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/workspace-templates/scenario-explain) | 情景化讲题 | — | 🚧 骨架 |

---

## 模板结构

每个模板目录包含：

```
<模板 id>/
├── preset.json        # 元数据：id / name / description / icon
├── agent.md           # 工作区上下文：每次对话注入到 Agent 系统提示
└── .skills/           # 可选，工作区私有技能
    └── <技能名>/
        └── SKILL.md
```

### `preset.json` 字段

| 字段 | 必填 | 说明 |
|---|---|---|
| `id` | ✅ | 唯一标识，必须与目录名一致 |
| `name` | ✅ | 显示名，出现在预设卡片标题 |
| `description` | | 一句话说明，显示在卡片副标题 |
| `category` | ✅ | 分类标签：`教学` / `演示` |
| `icon` | | [lucide](https://lucide.dev/icons/) 图标名 |

---

## 怎么用

### 方式一：简单模式预设卡片（推荐）

打开「简单模式」，欢迎页会列出这些预设，点卡片即创建并绑定一个配好的工作区。

> 拉取源可在 App 设置 →「内容源」中切换。

### 方式二：手动上传到工作区

1. 在 Inno Agent 新建一个工作区
2. 把模板的 `agent.md` 放到工作区根目录
3. 把 `.skills/` 下每个技能的 `SKILL.md` 通过 ✦ 按钮上传
4. 新建会话绑定该工作区即可

详细操作步骤参见 [Skill 编写教程](/tutorials/skill-tutorial/)。

---

## 贡献新模板

1. 复制 [`_template/`](https://github.com/Chloris-Blaxk/inno-agent-hub/tree/main/workspace-templates/_template)，重命名为你的模板 id
2. 编辑 `preset.json`：填好 `id` / `name` / `description` / `category` / `icon`
3. 编辑 `agent.md`：定义 Agent 人格与工作流程
4. 按需在 `.skills/` 下增删技能
5. 提交 PR 到 [inno-agent-hub](https://github.com/Chloris-Blaxk/inno-agent-hub)

> `category` 必填。当前可用：`教学` / `演示`。新增分类请先提 issue。
