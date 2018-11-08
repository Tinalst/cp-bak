import Vue from 'vue'
import Router from 'vue-router'
import  Rank from 'componets/rank/rank'
import  Recommend from   'componets/recommend/recommend'
import  Search from 'componets/search/search'
import  Singer from  'componets/singer/singer'

Vue.use(Router)

export default new Router({
        routes: [
                {path: '', redirect: '/recommend'},
                {path: '/rank', component: Rank},
                {path: '/recommend', component: Recommend},
                {path: '/search', component: Search},
                {path: '/singer', component: Singer}
        ]
})
