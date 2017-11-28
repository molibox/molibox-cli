# molibox

[![NPM downloads](http://img.shields.io/npm/dm/molibox-cli.svg?style=flat)](https://npmjs.org/package/molibox-cli)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/molibox-cli/molibox-cli.svg)](http://isitmaintained.com/project/molibox-cli/molibox-cli "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/molibox-cli/molibox-cli.svg)](http://isitmaintained.com/project/molibox-cli/molibox-cli "Percentage of issues still open")

molibox-cli 组件库编写组件开发工具

## 下载
```
npm install -g molibox-cli

>由于changelog依赖commitizen，所以需要安装commitizen

>npm install -g commitizen

```
## 使用

`cd` 直接进入项目根目录，使用以下命令完成对应功能。


| # | Scripts 脚本命令 | Description 功能描述 |
| --- | --- | --- |
| 1 | molibox run dev | 打开浏览器，调试代码和demo |
| 2 | molibox run build | 打包代码到build文件夹 |
| 3 | molibox run dep | 下载依赖 |
| 4 | molibox run update | 更新依赖 |
| 5 | molibox run pub | 集成了(发布npm包、提交github、生成changelog)功能|
| 6 | molibox run loginit | 初始化cz-conventional-changelog |