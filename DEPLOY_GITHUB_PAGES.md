# 🚀 GitHub Pages 部署指南

## 📋 部署步骤（按顺序执行）

### 第 1 步：配置 Git 用户

```bash
cd /home/xxiong/ios-info

# 配置你的 GitHub 邮箱（替换为你的邮箱）
git config user.email "你的邮箱@github.com"

# 配置你的名字（替换为你的 GitHub 用户名）
git config user.name "你的 GitHub 用户名"
```

### 第 2 步：初始化并提交代码

```bash
# 初始化 git 仓库
git init

# 添加所有文件
git add -A

# 提交
git commit -m "Initial commit"

# 重命名分支为 main
git branch -M main
```

### 第 3 步：创建 GitHub 仓库

访问：https://github.com/new

- **Repository name**: `ios-info`（或其他名字）
- **Public** 或 **Private**（选 Public 才能免费用 Pages）
- **不要**勾选 "Add a README file"
- 点击 **Create repository**

### 第 4 步：推送代码到 GitHub

复制 GitHub 给你的命令（类似下面）：

```bash
# 替换为你的用户名和仓库名
git remote add origin https://github.com/你的用户名/ios-info.git

# 推送
git push -u origin main
```

如果提示需要认证：
- 使用 **GitHub Token**（推荐）
- 或使用 **用户名 + 密码**

**获取 GitHub Token：**
1. 访问：https://github.com/settings/tokens/new
2. 勾选 `repo` 权限
3. 点击 Generate token
4. 复制生成的 token
5. 推送时用这个 token 当密码

### 第 5 步：安装 gh-pages 并部署

```bash
# 安装部署工具
npm install -D gh-pages

# 构建项目
npm run build

# 部署到 GitHub Pages
npx gh-pages -d dist
```

### 第 6 步：访问网站

等待 1-2 分钟，然后访问：

```
https://你的用户名.github.io/ios-info/
```

---

## 🔧 完整命令脚本（复制执行）

```bash
# 1. 配置
cd /home/xxiong/ios-info
git config user.email "your-email@github.com"
git config user.name "your-username"

# 2. 初始化
git init
git add -A
git commit -m "Initial commit"
git branch -M main

# 3. 关联远程仓库
git remote add origin https://github.com/your-username/ios-info.git

# 4. 推送
git push -u origin main

# 5. 安装 gh-pages
npm install -D gh-pages

# 6. 构建并部署
npm run build
npx gh-pages -d dist
```

---

## ⚠️ 常见问题

### 1. 推送失败：Authentication failed

**解决方案 A - 使用 Token：**

```bash
# 获取 token: https://github.com/settings/tokens
# 然后用这个命令推送（替换 username 和 token）
git push https://你的用户名:你的token@github.com/你的用户名/ios-info.git main
```

**解决方案 B - 使用 SSH：**

```bash
# 生成 SSH key（如果有就跳过）
ssh-keygen -t ed25519 -C "your_email@example.com"

# 添加公钥到 GitHub
cat ~/.ssh/id_ed25519.pub
# 复制输出，访问 https://github.com/settings/keys 添加

# 用 SSH 方式添加远程
git remote set-url origin git@github.com:你的用户名/ios-info.git
git push -u origin main
```

### 2. gh-pages 部署失败

```bash
# 清理缓存重试
rm -rf node_modules/.cache/gh-pages
npx gh-pages -d dist
```

### 3. 访问 404

等待 1-2 分钟，GitHub Pages 需要时间构建。

如果还是 404：
1. 访问 https://github.com/你的用户名/ios-info/settings/pages
2. 检查 Source 是否选择了 `gh-pages` 分支
3. 确保 `dist` 文件夹已推送

---

## ✅ 验证部署

```bash
# 检查 gh-pages 分支
git branch -a

# 应该有 gh-pages 分支

# 查看部署状态
git status
```

---

## 🎯 后续更新

每次修改代码后：

```bash
# 1. 修改代码

# 2. 提交到 main 分支
git add .
git commit -m "更新内容"
git push

# 3. 重新部署到 gh-pages
npm run build
npx gh-pages -d dist
```

---

部署成功后，你的网站地址就是：
**https://你的用户名.github.io/ios-info/**

国内访问速度不错！🎉
