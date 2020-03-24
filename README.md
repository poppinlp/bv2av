# bv2av

把 bilibili 新的 bv 号转回旧的 av 号。

支持[网页端直接使用](https://poppinlp.com/bv2av/)。

[![Build Status][ci-img]][ci-url]
[![Dependency Status][dep-img]][dep-url]
[![Dev Dependency Status][dev-dep-img]][dev-dep-url]
[![NPM version][npm-ver-img]][npm-url]
[![NPM downloads][npm-dl-img]][npm-url]
[![NPM license][npm-lc-img]][npm-url]

## Install

By npm:

```shell
npm i bv2av
```

By yarn:

```shell
yarn add bv2av
```

## CLI

```shell
bv2av --bv=xxxxx --all
```

With `--all`, we will get all infomations. Without it, we will get the av ID only.

## Module

模块导出了两个方法，更详细的内容，可以看 `types/index.d.ts`。

- getBvInfo: get some info of the video such as title, cover, e.t.c.
- bv2av: get only av ID of the video.

## Test

```shell
npm test
```

[ci-img]: https://img.shields.io/travis/poppinlp/bv2av.svg?style=flat-square
[ci-url]: https://travis-ci.org/poppinlp/bv2av
[dep-img]: https://img.shields.io/david/poppinlp/bv2av.svg?style=flat-square
[dep-url]: https://david-dm.org/poppinlp/bv2av
[dev-dep-img]: https://img.shields.io/david/dev/poppinlp/bv2av.svg?style=flat-square
[dev-dep-url]: https://david-dm.org/poppinlp/bv2av#info=devDependencies
[npm-ver-img]: https://img.shields.io/npm/v/bv2av.svg?style=flat-square
[npm-dl-img]: https://img.shields.io/npm/dm/bv2av.svg?style=flat-square
[npm-lc-img]: https://img.shields.io/npm/l/bv2av.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/bv2av
