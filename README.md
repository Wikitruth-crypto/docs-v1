# WikiTruth Docs

基于 Docusaurus 构建的 WikiTruth 项目静态文档站点。

## 项目简介

WikiTruth 是一个基于 Oasis Sapphire 的隐私证据市场项目。本文档站点使用 Docusaurus 3.x 构建，提供完整的技术文档展示和访问体验。

## 技术栈

- **框架**: Docusaurus 3.5.0
- **语言**: TypeScript
- **样式**: Tailwind CSS 3.4.15
- **构建工具**: Docusaurus 内置构建系统
- **Node.js**: >= 18.0

## 项目结构

```
docs2/
├── docs/              # 文档源文件（Markdown）
├── src/
│   ├── components/    # React 组件
│   ├── css/          # 自定义样式
│   ├── pages/        # 自定义页面
│   └── theme/        # 主题组件（自定义 Navbar/Footer 已保留）
├── static/           # 静态资源（图片、logo 等）
├── docusaurus.config.ts  # Docusaurus 配置文件
├── sidebars.ts       # 侧边栏配置
└── package.json      # 项目依赖
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run start
```

启动后访问 `http://localhost:3000`

### 构建生产版本

```bash
npm run build
```

构建产物位于 `build/` 目录

### 预览构建结果

```bash
npm run serve
```

### 清理缓存

```bash
npm run clear
```

## 主要功能

- ✅ 完整的文档展示系统
- ✅ 响应式设计，支持移动端
- ✅ 深色主题（shadcn dark mode）
- ✅ 自定义样式（主题色：`#c6a9fc`）
- ✅ 代码高亮（支持 Solidity、Bash、JSON 等）
- ✅ 文档搜索功能（Docusaurus 内置）

## UI 风格

- **主题色**: `#c6a9fc` (紫色)
- **背景**: 黑色主题
- **字体**: 等宽字体（monospace）
- **Navbar**: 深色背景，毛玻璃效果
- **Footer**: 深色背景，社区链接

## 文档结构

文档按以下分类组织：

- 简介与背景
- 技术文档
- 功能细节
- Tokenomics
- 未来计划
- 治理与合规
- 技术展望

## 配置说明

### Navbar 配置

当前使用 Docusaurus 默认 Navbar，配置在 `docusaurus.config.ts` 中：

- Logo: `/logo/logo-2.svg`
- 导航链接: Home, Roadmap, Blog, Team, Docs
- Beta App 按钮

### Footer 配置

Footer 包含：

- Community 链接（Twitter, Telegram, Discord, GitHub, Email）
- Legal 链接（Terms of Service）
- 版权信息

### 自定义组件

自定义的 Navbar 和 Footer 组件已保留在 `src/theme/` 目录中，文件名为 `index.custom.tsx`，可在后续需要时启用。

## 开发说明

### 添加新文档

1. 在 `docs/` 目录下创建 Markdown 文件
2. 在 `sidebars.ts` 中添加文档引用
3. 重新启动开发服务器

### 修改样式

主要样式文件位于 `src/css/custom.css`，包含：

- Tailwind CSS 配置
- 主题变量定义
- Navbar/Footer 样式定制
- 代码块和引用块样式

### 静态资源

静态资源（图片、logo 等）放在 `static/` 目录下，可通过 `/path/to/file` 访问。

## 部署

构建完成后，将 `build/` 目录的内容部署到静态网站托管服务（如 GitHub Pages、Netlify、Vercel 等）。

## 相关链接

- **主站**: https://wikitruth.io
- **Beta App**: https://beta.wikitruth.io
- **文档站点**: https://docs.wikitruth.io

## 许可证

本项目为私有项目。

## 更新日志

- **v1.0.0** (2025-01): 初始版本，基于 Docusaurus 3.5.0 构建

