---
title: '从零到上线：我用 OpenClaw + Astro 搭了个博客'
description: '记录第一次用 Astro 搭建博客的全过程，包括踩坑、对话式开发、以及一个 AI 助手的吐槽'
pubDate: '2026-03-21'
heroImage: '../../assets/blog-placeholder-1.jpg'
---

## 起因

想搞个博客记录学习过程，顺便做自媒体内容。本来想着随便找个 WordPress 或者 Hexo 凑合用，但巴乔助手（我的 AI 创业伙伴）说：「咱用 Astro 吧，现代化、性能好、还能练手。」

我说行，那就搞。

---

## 第一步：下载 Astro（踩坑版）

我自信满满地打开了 GitHub，找到了 [Astro 官方仓库](https://github.com/withastro/astro)，点击下载 ZIP，解压到项目目录。

然后跟巴乔助手说：「框架放好了，你看看。」

**巴乔助手：** *沉默三秒* 「等等...这看起来不是 Astro 博客项目，而是 **Astro 框架本身的源码仓库**！」

我一看，好家伙，80MB+，几千个文件，packages、benchmark、examples 啥都有。这是给想给 Astro 贡献代码的开发者用的，不是给我这种想搭博客的懒人用的。

**踩坑记录 #1：** 别下载源码，用官方命令创建项目。

---

## 第二步：正确姿势创建项目

清空目录，重新来：

```bash
npm create astro@latest
```

然后 Houston（Astro 的吉祥物）出现了：

```
astro   Launch sequence initiated.

   dir   Where should we create your new project?
         .

  tmpl   How would you like to start your new project?
         Use blog template

  deps   Install dependencies?
         No

   git   Initialize a new git repository?
         Yes

      ✔  Project initialized!

╭─────╮  Houston:
│ ◠ ◡ ◠  Good luck out there, astronaut! 🚀
╰─────╯
```

**巴乔助手：** 「看，这才对嘛。干净、简洁、适合人类使用。」

---

## 第三步：配置 Vercel 部署

我们的部署方案是：
- **GitHub** 托管代码
- **Vercel** 自动构建部署
- **Cloudflare** CDN 加速（后续配置）

### 3.1 修改 astro.config.mjs

把默认的 `example.com` 改成 Vercel 域名：

```js
export default defineConfig({
  site: 'https://baggio-learning-log.vercel.app',
  integrations: [mdx(), sitemap()],
});
```

**巴乔助手：** 「不改也能运行，但 RSS 和 sitemap 生成的链接会是错的。细节决定成败。」

### 3.2 推送到 GitHub

创建仓库、配置 remote、推送：

```bash
git remote add origin https://github.com/stilllearningdev/baggio-learning-log.git
git add -A
git commit -m "Initial commit: Astro blog template with Vercel config"
git push -u origin main
```

### 3.3 Vercel 一键部署

1. 打开 [vercel.com](https://vercel.com)
2. 用 GitHub 登录
3. 导入 `baggio-learning-log` 仓库
4. 保持默认配置，点击 Deploy
5. 等待 30 秒...

**🎉 上线！**

访问 `https://baggio-learning-log.vercel.app`，看到 Astro 默认的博客模板， Houston 的笑脸仿佛在说我终于做对了。

---

## 技术栈总结

| 层级 | 技术 | 作用 |
|------|------|------|
| 框架 | Astro | 静态站点生成，性能怪兽 |
| 模板 | Astro Blog | 开箱即用，带 RSS、Sitemap |
| 托管 | GitHub | 代码版本管理 |
| 部署 | Vercel | 自动构建，全球 CDN |
| 加速 | Cloudflare | 国内访问优化（待配置）|

**成本：$0** 💰

---

## 下一步计划

1. **换主题** — 默认模板太素了，找个好看的
2. **写内容** — 这才是正经事
3. **多平台发布** — 头条、小红书、B站同步
4. **Cloudflare 加速** — 让国内访问更快
5. **自定义域名** — 买个 `baqiao.dev` 或者类似的

---

## 写在最后

这次搭建最大的收获不是技术，而是发现 **用 OpenClaw 对话式开发** 挺舒服的。有个 AI 伙伴在旁边提醒「你下错源码了」、「记得改 site 配置」、「先提交再推送」，比自己一个人瞎折腾效率高多了。

当然，Houston 的 🚀 也很治愈。

---

*本文由巴乔学长和巴乔助手（OpenClaw + Kimi）共同创作*
