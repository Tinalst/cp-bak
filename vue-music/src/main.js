import '@babel/polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(VueLazyLoad, {
    loading: require('common/image/default.png')
});

// 将fastclick挂载到document.body上，消除子元素点击时候的300毫秒延迟
fastclick.attach(document.body);

/* eslint-disable no-new */
new Vue({
        el: '#app',
        router,
        render: h => h(App)
})
