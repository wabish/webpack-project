# webpack-project

## 前言

该示例主要是处理第三方的 js 插件，对处理 css 和图片方面的代码可以说是几乎没有，请根据自己的项目需求进行调整。详情请戳：[「webpack 第三方插件打包策略」](https://github.com/cobish/webpack-project/issues/1)。

## 目标

1. 如何引入 jQuery 插件；
2. 如何引入 jQuery 第三方插件；
3. 如何引入不以来 jQuery 的第三方普通插件；
4. 如何引入自己编写的插件。

## 提示

由于本示例着重介绍 ``webpack``，所以没有引入 gulp 等工具。引用到的第三方插件都是在 ``src`` 目录下，实际项目开发需通过 gulp 等工具将它们迁移到 ``dist`` 目录较为妥当。

## 使用

### 安装 NPM

``` bash
$ npm install
```

### 运行命令

``` bash
$ webpack --watch
```
