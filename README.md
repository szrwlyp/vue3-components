# vue3-components

归纳项目开发中所用到的自定义组件。

- [图片懒加载组件](#图片懒加载组件)

<a name="图片懒加载组件"></a>

## 图片懒加载组件

路由路径：/lazyLoading
文件路径：/src/components/imageComp

```
import imageComp from '@/components/imageComp/index.vue'
<imageComp width="400px" height="400px" :src="item" :lazy="true" :loading="true" error="xxx/xxx/xxx" mode="cover"></imageComp>

```

**属性** <br>
| 属性名 | 说明 | 是否必须 |类型 | 可选值 | 默认值 |
| -------------- | -------- | ------------| ---------- | -------- |-------- |
| width | 图片宽度 | 否 | string | - | 'auto' |
| height | 图片高度 | 否 | string | — | 'auto'|
| src | 图片地址 | 是 | string |— |-|
| loading | 图片加载动画 | 否 | boolean | true/false | true |
| error | 图片加载失败时默认图片 | 是 | string | - | 组件内loading_error.png |
| lazy | 是否懒加载 | 否 | boolean | true/false | false |
| mode | 图片裁剪，缩放的模式 | 否 | string | 'fill'/'contain'/'cover'/'none'/'scale-down'/'initial'/'inherit' | 'cover' |

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
