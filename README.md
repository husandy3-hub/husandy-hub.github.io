# husandy-hub.github.io · Personal Portfolio

基于 React + TypeScript + Vite + Tailwind CSS 构建的现代化个人网页项目

一个采用现代深色主题设计的个人作品集网站，展示项目、技能和专业经验。

## ✨ 特性

- 🎨 现代深色主题设计（Modern Dark Theme）
- 📱 完全响应式布局
- ⚡ 使用 Vite 实现快速开发和构建
- 🎯 TypeScript 类型安全
- 💅 Tailwind CSS 样式系统
- 🎭 Material Symbols 图标
- 🔄 平滑滚动和过渡动画
- ♿ 良好的可访问性

## 🏗️ 项目结构

```
personal_web/
├── src/
│   ├── components/        # 可复用组件
│   │   ├── Navigation.tsx # 导航栏
│   │   └── Footer.tsx     # 页脚
│   ├── sections/          # 页面区块组件
│   │   ├── Hero.tsx       # 首屏区域
│   │   ├── About.tsx      # 关于我
│   │   ├── Skills.tsx     # 技能展示
│   │   ├── TechStack.tsx  # 技术栈
│   │   ├── Projects.tsx   # 项目展示
│   │   └── Contact.tsx    # 联系方式
│   ├── styles/            # 样式文件
│   │   ├── index.css      # 全局样式
│   │   └── App.css        # App样式
│   ├── App.tsx            # 应用主组件
│   └── main.tsx           # 入口文件
├── public/                # 静态资源
├── tailwind.config.js     # Tailwind配置
├── postcss.config.js      # PostCSS配置
└── index.html             # HTML模板
```

## 🌐 GitHub Pages 托管

站点仓库：[husandy-hub.github.io](https://github.com/husandy3-hub/husandy-hub.github.io)

| 项目 | 说明 |
|------|------|
| 访问地址 | https://husandy-hub.github.io/ |
| 发布目录 | 仓库根目录下的 `/docs` |
| 发布分支 | `main`（或 `master`） |

### 在 GitHub 上开启 Pages

1. 打开仓库 **Settings → Pages**
2. **Build and deployment → Source** 选择 **Deploy from a branch**
3. **Branch** 选 `main`，**Folder** 选 **`/docs`**
4. 保存后等待约 1–10 分钟生效

### 本地构建并更新站点

```bash
npm run build:pages   # 构建产物输出到 docs/
git add .
git commit -m "Update site"
git push origin main
```

构建时会自动带上 `public/.nojekyll`，避免 Jekyll 处理 `_assets` 等路径。

## 🚀 快速开始

### 前置要求

- Node.js 16.x 或更高版本
- npm 或 yarn 或 pnpm

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

项目将在 `http://localhost:5173` 启动

### 构建生产版本

```bash
npm run build
```

构建文件将输出到 `dist/` 目录

### 预览生产版本

```bash
npm run preview
```

### 代码检查

```bash
npm run lint
```

## 🎨 设计系统

### 颜色主题

- **Primary**: 数字蓝 (#adc6ff) - 用于交互元素和主要按钮
- **Secondary**: 翡翠绿 (#4edea3) - 用于成功状态和特殊标记
- **Tertiary**: 橙色 (#ffb786) - 用于强调和视觉吸引
- **Background**: 深炭色 (#131313) - 主背景色
- **Surface**: 分层灰度系统 - 用于卡片和容器

### 字体

- **Font Family**: Inter (Google Fonts)
- **图标**: Material Symbols Outlined

### 间距系统

基于 8px 网格系统：
- xs: 4px
- sm: 12px
- base: 8px
- md: 24px
- lg: 48px
- xl: 96px

## 📦 技术栈

- **前端框架**: React 18
- **类型系统**: TypeScript
- **构建工具**: Vite
- **样式方案**: Tailwind CSS
- **代码规范**: ESLint
- **图标系统**: Material Symbols

## 🌟 页面模块

### Hero Section
- 全屏欢迎区域
- 位置标识
- 行动号召按钮

### About Me
- 个人简介
- 教育背景时间线
- 职业亮点

### Skills
- 技能分类展示
- 图标可视化
- 交互式卡片

### Projects
- 项目筛选功能
- 项目卡片网格
- 分类标签

### Contact
- 社交媒体链接
- 二维码占位符
- 联系方式

## 🎯 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 📝 开发说明

### 自定义颜色

在 `tailwind.config.js` 中修改 `theme.extend.colors`

### 添加新组件

1. 在 `src/components/` 或 `src/sections/` 创建新组件
2. 在 `App.tsx` 中引入并使用

### 修改内容

主要内容在各个 section 组件中，直接修改对应的 `.tsx` 文件即可

## 📄 License

MIT License

## 👤 作者

**Huihui**
- Location: Shanghai, China
- Portfolio: [Your Website]

---

设计风格参考：designprompts.dev/modern-dark
