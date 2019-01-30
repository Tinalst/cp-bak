# OrgnizeModule

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.2.

## nglst-cli组织架构
 ```
|-- coreModule      // 特性模块-CORE： 只在入口模块中引入且引入一次
    -- component       // 只在根模块中引入的组件
    -- guard           // 路由守卫
    -- interceptor     // http拦截器
    -- service         // 全局共享的服务
    
|-- shareModule     // 特性模块-Share： 共享、复用
    -- components      // 复用组件
    -- directives      // 复用指令
    -- pipe            // 复用Pipe
    -- service         // 组件使用到的服务
  
|-- utils          // 工具类
    -- enum            // 枚举
    -- service         // 共享服务
    -- validator       // 校验器

|-- views          // 业务逻辑层
  ps: 业务逻辑层中只导入shareModule 不可导入coreModule
```
 更新日期： 2019年01月30日11:51:03
