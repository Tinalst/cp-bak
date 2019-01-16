# ScrollMagicBasic

## 在angular中引入scrollmagic + gsap
1. 安装
```
npm install scrollmagic
npm install gsap
npm install @types/gsap
```
2. 在angular.json 文件中引入相关JS库
```
"scripts": [
  "node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js",
  "node_modules/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js",
  "node_modules/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js"
]
```
3. 在component.ts文件中全局声明
```
declare let ScrollMagic: any;
```
