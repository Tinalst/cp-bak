import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home';
import Formtext from 'components/formtext/formtext';
import ReactiveRouter from 'components/routertext/reactiveRouter';
import RouterLinkRouter from 'components/routertext/routerLinkRouter';
import ParentRouter from 'components/routertext/parentRouter';
import Child from 'components/routertext/child';
import Child2  from 'components/routertext/child2';
import RouterProps  from 'components/routertext/routerProps';
import NotFoundComponent  from 'components/routertext/notFoundComponent';
import DynamicComponent1  from 'components/dynamicComponent/dynamicComponent1';

Vue.use(Router)

const router  = new Router({
    routes: [
        {path: '/', component: Home},
        {path: '/formtext', component: Formtext},
        {path: '/routerlinkrouter/:id', component: RouterLinkRouter},
        {
            path: '/parenterouter', component: ParentRouter, children: [
                {path: '', component: Child},
                {path: 'childrouter', component: Child},
                {path: 'child2router',  component: Child2}
            ]
        },
        {path: '/reactiverouter/:id', name: 'reactiverouter', component: ReactiveRouter},
        {path: '/routerProps', name: 'routerProps', component: RouterProps, props: true},
        {path: '/animation1', component: () => {require('../components/animation/animation1Component')} },
        {path: '/dynimic',  component: DynamicComponent1},
        {path: '*', component:  NotFoundComponent}
    ]
});
// 全局前置守卫
router.beforeEach((to, from, next) => {
    // console.log(to);
    // console.log(from);
    next();
});
// 全局后置守卫
router.afterEach(((to, from) => {
    // console.log(to);
    // console.log(from);
}));
export default router;
