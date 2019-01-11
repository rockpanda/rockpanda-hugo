---
draft: false
date: "2019-01-10T17:40:00+08:00"
title: "使用Hugo和GitHub Pages等创建自己的博客"
subtitle: "**基础搭建**"
categories: "devops"
tags: ["hugo","blog","github"]
bigimg: [{src: "https://d33wubrfki0l68.cloudfront.net/30790d6888bd8af863fb2b5c33a7f337cdbda243/4e867/images/hugo-logo-wide.svg"}]
---
## 准备工作

- GitHub](http://www.github.com/) **这是必需的**，因为你需要使用[Github Pages](https://pages.github.com/)来托管你的网站。而且你还需要安装git工具。创建一个以自己用户名命名的username.github.io的project。
- [七牛云存储](http://www.qiniu.com/) **非必需**，为了存储文件方便，建议申请一个，免费10G的存储空间，存储照片和一些小文件是足够的，可以用来做外链，方便存储和管理，这样你就不用把图片也托管到Github上了。流量也是不限的。我没有收七牛的一点好处，以为是我自己用的，所以推荐给大家，七牛还有命令行客户端，方便你上传和同步文件。如上的题图都是存储在七牛云中的。
- [百度统计](https://jimmysong.io/posts/building-github-pages-with-hugo/tongji.baidu.com) **非必需**，基本的网站数据分析，免费的，质量还行。还有微信公众号可以查看。顺便提一下，这个统计账号跟你的百度账号不是同一个东西，两者是两套体系，当然你可以和自己的百度账号关联。只需要在Web的Header中植入一段JS代码即可。
- [Hugo](http://gohugo.io/) **必需的**，静态网站生成工具，用来编译静态网站的。跟Hexo比起来我更喜欢这个工具。
- [Typro](https://typora.io/) **非必需**，但是强烈推荐，我最喜欢的免费的Markdown编辑器，hugo可以编译markdown格式为HTML，所以用它来写博客是最合适不过了。
- [新浪微博图床](https://github.com/Semibold/Weibo-Picture-Store) 用于托管图片，然后这个插件可以方便的把你看到的图片保存到你的新浪帐号里。
- [花瓣网](https://huaban.com/) 知道花瓣也是从锤子科技发布会那了解到的，同样也有插件可以转存图片到花瓣帐号上去。
- [cloudinary](https://cloudinary.com) 用于托管图片和静态文件,他们家免费的规格足够目前的使用了，我把我自己的图片和样式文件都上存在在这里。
- [Hugo 集成 Algolia](https://www.qikqiak.com/post/hugo-integrated-algolia-search/) 提供检索功能
- [Hexo博客利用Netlify升级为HTTPS](https://segmentfault.com/a/1190000014012115)] 利用netlify可以不用在cloudflare更改DNS，让你的域名拥有https,使用的是Let's Encrypt的证书且自动需求，虽然他们也有空间托管，可惜我没用，只用了https，原理就是又多个域名转发，是不是很折腾呢 

## 安装Hugo
### 二进制安装（推荐：简单、快速）

到 Hugo Releases 下载对应的操作系统版本的Hugo二进制文件（hugo或者hugo.exe）
Mac下直接使用 Homebrew 安装：

```
brew install hugo
```

### 源码安装

源码编译安装，首先安装好依赖的工具：

- Git

- Mercurial
- Go 1.3+ (Go 1.4+ on Windows)

设置好 GOPATH 环境变量，获取源码并编译：

```bash
$ export GOPATH=$HOME/go
$ go get -v github.com/spf13/hugo
```


源码会下载到 $GOPATH/src 目录，二进制在 $GOPATH/bin/

如果需要更新所有Hugo的依赖库，增加 -u 参数：

```
$ go get -u -v github.com/spf13/hugo
```

## 生成站点

使用Hugo快速生成站点，比如希望生成到 /path/to/site 路径：

```bash
$ hugo new site /path/to/site
```


这样就在 /path/to/site 目录里生成了初始站点，进去目录：

```bash
$ cd /path/to/site
```


站点目录结构：

- archetypes/
- content/
- layouts/
- static/
- config.toml

config.toml是网站的配置文件，包括baseurl, title, copyright等等网站参数。

这几个文件夹的作用分别是：

- ​	archetypes：包括内容类型，在创建新内容时自动生成内容的配置
- ​	content：包括网站内容，全部使用markdown格式
- ​	layouts：包括了网站的模版，决定内容如何呈现
- ​	static：包括了css, js, fonts, media等，决定网站的外观

创建文章

创建一个 about 页面：

```bash
$ hugo new about.md
```


about.md 自动生成到了 content/about.md ，打开 about.md 看下：

```
+++
date = "2015-10-25T08:36:54-07:00"
draft = true
title = "about"3
+++
```

正文内容
内容是 Markdown 格式的，+++ 之间的内容是 TOML 格式的，根据你的喜好，你可以换成 YAML 格式（使用 --- 标记）或者 JSON 格式。

创建第一篇文章，放到 post 目录，方便之后生成聚合页面。

```bash
$ hugo new post/first.md
```


打开编辑 post/first.md ：

```
---
date: "2015-10-25T08:36:54-07:00"
title: "first"
---
### Hello Hugo

1. aaa
2. bbb
3. ccc
```

## 安装皮肤

到 皮肤列表 挑选一个心仪的皮肤，比如你觉得 Hyde 皮肤不错，找到相关的 GitHub 地址，创建目录 themes，在 themes 目录里把皮肤 git clone 下来：

## 创建 themes 目录

```bash
$ cd themes
$ git clone https://github.com/spf13/hyde.git
```

运行Hugo
在你的站点根目录执行 Hugo 命令进行调试：

```bash
$ hugo server 
```

浏览器里打开： http://localhost:1313

## 部署

假设你需要部署在 GitHub Pages 上，首先在GitHub上创建一个Repository，命名为：rockpanda.github.io （rockpanda.替换为你的github用户名）。

在站点根目录执行 Hugo 命令生成最终页面：

```bash
$ hugo --theme=beautifulhugo --baseUrl="http://blog.debris.cn/"
```


（注意，以上命令并不会生成草稿页面，如果未生成任何文章，请去掉文章头部的 draft=true 再重新生成。）

如果一切顺利，所有静态页面都会生成到 public 目录，将pubilc目录里所有文件 push 到刚创建的Repository的 master 分支。

```bash
$ cd public
$ git init
$ git remote add origin https://github.com/rockpanda/rockpanda.github.io
$ git add -A
$ git commit -m "first commit"
$ git push -u origin master
```


浏览器里访问：rockpanda.github.io