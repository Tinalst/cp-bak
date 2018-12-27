/**
 * 模块引入拦截器
 * @param parentModule
 * @param moduleName
 */
export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
    if (parentModule) {
        throw new Error(`${moduleName} 已被加载。只能加载一次`);
    }
}
