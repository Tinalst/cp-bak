import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Params from '../components/Params'
import Hi1 from  '../components/Hi1'


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
    }, {
      path: '/hi1',
      component: Hi1,
      alias: '/testalias'
    }
  ]
})
