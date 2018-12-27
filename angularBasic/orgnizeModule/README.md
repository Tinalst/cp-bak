# OrgnizeModule

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.2.

## 组织架构
 ```angular2html
|--CoreModule    // DESC：（特性模块-CORE） 只在入口模块中引-入且引入一次
  |--Service     // 全局共享、单例Service
    |--
  |--
|--ShareModule   // DESC: (特性模块-Share) 组件复用
  |--component   // 复用组件
  |--pipe        // 复用Pipe
  |--directives  // 复用指令
|--views         // 业务逻辑层
```
 
