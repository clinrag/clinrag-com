# ClinRAG — 部署到 Vercel 指南

## 前置条件

- GitHub 账号
- Vercel 账号 (https://vercel.com)

## 部署步骤

### 1. 推送到 GitHub

```bash
cd clinrag-site
git init
git add .
git commit -m "Initial ClinRAG site with admin backend"
git branch -M main
git remote add origin git@github.com:YOUR_USERNAME/clinrag-site.git
git push -u origin main
```

### 2. 在 Vercel 创建项目

1. 登录 [vercel.com](https://vercel.com)
2. 点击 **Add New... → Project**
3. 选择你的 `clinrag-site` 仓库，点击 **Import**
4. Framework Preset 选择 **Next.js**
5. 点击 **Deploy**

### 3. 创建 Postgres 数据库

1. 部署完成后，进入项目 Dashboard
2. 点击 **Storage → Create Database → Postgres**
3. 选择 **Create**，等待数据库创建完成
4. Vercel 会自动注入 `POSTGRES_*` 环境变量

### 4. 初始化数据库表

1. 在 Vercel 项目 Dashboard 中，进入 **Storage → 你的 Postgres 数据库 → SQL Editor**
2. 复制 `sql/schema.sql` 的内容并执行
3. 这将创建所有需要的表

### 5. 配置环境变量

在 Vercel **Settings → Environment Variables** 中添加：

```
ADMIN_USER=admin
ADMIN_PASS=clinrag2024     ← 建议修改为强密码
ADMIN_SECRET=your-secret-change-in-production
```

### 6. 重新部署

环境变量添加后，Vercel 会自动重新部署。也可以手动触发：
**Deployments → ... → Redeploy**

## 访问

- **前台**: `https://your-project.vercel.app`
- **后台登录**: `https://your-project.vercel.app/admin/login`

## 本地开发

```bash
npm run dev       # 使用 JSON 文件存储 (data/*.json)
npm run build     # 构建生产版本
npm start         # 启动生产服务器
```

本地开发时数据保存在 `data/` 目录，部署到 Vercel 后自动切换到 Postgres。
