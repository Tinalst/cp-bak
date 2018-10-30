import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Params from '../components/Params'
import Hi1 from  '../components/Hi1'
import Error from '../components/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/params/:newsId/:newsTitle',
      component: Params,
      beforeEnter: (to, from, next) => {   // 在路由配置文件中写路由钩子函数
        console.log(to);
        console.log(from);
        console.log(next);
        next({
          path: '/'  // 跳转到根目录 ，如果不写next路由无法进行跳转
        });
      }
    },{
      path: '/gohome',
      redirect: '/'
    },{
      path: '/goparams/:newsId/:newsTitle',
      redirect: '/params/:newsId/:newsTitle'
    }, {
      path: '/hi1',
      component: Hi1,
      alias: '/testalias'
    }, {
      path: '*',
      component: Error
    }
  ]
})
