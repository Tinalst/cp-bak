import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Params from '../components/Params'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/params/:newsId/:newsTitle',
      component: Params
    },{
      path: '/gohome',
      redirect: '/'
    },{
      path: '/goparams/:newsId/:newsTitle',
      redirect: '/params/:newsId/:newsTitle'
    }
  ]
})
