# CWF_Web_App
## 安装环境
查看 [angular-quickstart](https://angular.io/guide/quickstart)

## 运行项目
+ 使用git获取项目代码
+ 运行服务端代码
```
    cd controllers
    npm install koa  koa-router koa-bodyparser  koa2-cors
    node app.js // 默认端口3333
```

+ 运行项目
```
    npm install
    ng serve --port [number]  --open // 默认4200
```
## 项目部署打包
```
    ng build --prod
```
## 项目目录结构
```
|——controllers  // 服务端
|   |——...
|——src         // 前端代码
    │  browserslist
    │  index.html
    │  karma.conf.js
    │  main.ts
    │  polyfills.ts
    │  styles.css
    │  test.ts
    │  tree.txt
    │  tsconfig.app.json
    │  tsconfig.spec.json
    │  tslint.json
    │  
    ├─app
    │  │  app.component.html
    │  │  app.component.scss
    │  │  app.component.spec.ts
    │  │  app.component.ts
    │  │  app.module.ts
    │  │  
    │  ├─core
    │  │      core.module.spec.ts
    │  │      core.module.ts
    │  │      
    │  ├─header
    │  │      header.component.html
    │  │      header.component.scss
    │  │      header.component.spec.ts
    │  │      header.component.ts
    │  │      
    │  ├─null-product
    │  │      null-product.component.html
    │  │      null-product.component.scss
    │  │      null-product.component.spec.ts
    │  │      null-product.component.ts
    │  │      
    │  ├─product-detial
    │  │      product-detial.component.html
    │  │      product-detial.component.scss
    │  │      product-detial.component.spec.ts
    │  │      product-detial.component.ts
    │  │      
    │  ├─public
    │  │  ├─model
    │  │  │      api.enum.ts
    │  │  │      product.model.ts
    │  │  │      tab-menu.interface.ts
    │  │  │      
    │  │  └─service
    │  │          app-service.base.ts
    │  │          
    │  ├─section
    │  │      section.component.html
    │  │      section.component.scss
    │  │      section.component.spec.ts
    │  │      section.component.ts
    │  │      
    │  ├─service
    │  │      tab.service.spec.ts
    │  │      tab.service.ts
    │  │      
    │  └─share
    │          share.module.spec.ts
    │          share.module.ts
    │          
    ├─assets
    │  │  .gitkeep
    │  │  
    │  ├─img
    │  │      menu-of-three-lines.svg
    │  │      
    │  └─style
    └─environments
            environment.prod.ts  // 生产环境配置文件
            environment.ts       // 开发环境配置文件
        
```





