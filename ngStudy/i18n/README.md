# I18n

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.2.

## 参考链接
[how to use ngx-translate](https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-angular-app-with-ngx-translate)

## 国际化简单使用
1. 安装响应的node_module
```
     @ngx-translate/core @ngx-translate/http-loader  --save
```
2. 根模块translateModle配置
```
// app.module.ts
imports: [
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
```
3. 设置AOT编译支持
```
// app.module.ts
export class AppModule { }

// AOT编译
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
```
4. 编写共工翻译功能函数
```
    // util.server.ts
     constructor(private translate: TranslateService) { }
    
         // 语言切换
        useLanguage = (lang: string): void => {
             this.translate.use(lang);
        }
```
5. 在组件中中使用国际化功能
```
     // app.component.ts
     constructor(private translate: TranslateService,
                    public utilService: UtilService) {
            // 设置默认语言
            translate.setDefaultLang('de');
        }

```
6. 国际化使用
```
<div>
    <h1>{{'demo.title' | translate}}</h1>
    <p translate>demo.text</p>
    <p>参数翻译</p>
    <!--<p translate>demo.greeting</p>-->
</div>

<!--放到那个组件里面那个组件要注入utilService-->
<button type="button" (click)="utilService.useLanguage('en')">英语</button>
<button type="button" (click)="utilService.useLanguage('de')">德语</button>

```

## 使用lazyload加载模块下的国际化
`当使用lazyload加载模块的时候需要单独为每个懒加载的模块的module文件配置translatemodule`
```
TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
```

## 小结
+ 国际化会全局响应不管是是不在同一个模块中的组件
