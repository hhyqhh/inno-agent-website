---
title: 介绍
description: Inno Agent 是什么，能做什么
---

# 什么是 Inno Agent

Inno Agent 是一个**本地运行、有长期记忆**的个人学习助手。它通过「工作区上下文 + Skill 包」组合，把通用 LLM 变成贴合具体学习场景的专属 Agent。

## 核心理念

```
┌──────────────────────────────────────────────────────────┐
│  Inno Agent 工作区                                       │
│                                                          │
│   agent.md             ← 工作区上下文（学习背景/偏好）   │
│   .skills/             ← 专项能力（触发条件/格式/流程）  │
│     └─ xxx/SKILL.md                                      │
│   files/               ← 你的学习资料                    │
└──────────────────────────────────────────────────────────┘
```

## 主要特性

- **本地部署** — 数据完全留在你的机器上，隐私安全
- **长期记忆** — 跨会话保留学习进度和偏好
- **Skill 生态** — 通过能力包扩展 Agent 技能
- **多模型** — 支持 OpenAI、Claude、Gemini 等主流模型
- **桌面 + Web** — Electron 客户端与 Web 端双形态

## 下一步

- [安装部署](/getting-started/installation/) — 把 Inno Agent 跑起来
- [第一个工作区](/getting-started/first-workspace/) — 5 分钟创建你的学习场景
