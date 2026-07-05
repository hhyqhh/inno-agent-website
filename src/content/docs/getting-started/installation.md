---
title: 安装部署
description: 支持 Docker 一键部署或本地 Node.js 运行
---

# 安装部署

## 系统要求

- Node.js >= 20.6.0
- 或 Docker / Docker Compose

## 方式一：Docker 部署（推荐）

```bash
# 克隆项目
git clone https://github.com/hhyqhh/inno-agent.git
cd inno-agent

# 复制配置文件
cp .env.example .env
cp config.example.json config.json

# 启动
docker compose up -d
```

启动后访问 `http://localhost:3000` 即可使用 Web 端。

## 方式二：本地运行

```bash
# 安装依赖
npm install

# 构建
npm run build

# 启动服务端
npm run server
```

## 方式三：桌面客户端

前往 [Releases](https://github.com/hhyqhh/inno-agent/releases) 下载对应平台的安装包：

- macOS: `.dmg` (Apple Silicon)
- Windows: `.msi` / `.exe`

## 配置模型

编辑 `config.json`，填入你的模型 API Key：

```json
{
  "models": {
    "openai": {
      "apiKey": "sk-xxx"
    }
  }
}
```

详细配置参见 [系统依赖文档](https://github.com/Chloris-Blaxk/inno-agent-hub/blob/main/docs/SYSTEM_DEPENDENCIES.md)。

## 下一步

配置完成后，前往 [第一个工作区](/getting-started/first-workspace/) 开始使用。
