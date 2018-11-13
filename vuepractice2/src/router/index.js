import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from 'components/homeComponent';
import FatherComponent from 'components/slot/fatherComponent'
import NameSlotComponent from 'components/slot/nameSlotComponent'
import ComComponent from 'components/comunication/comComponent'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: HomeComponent
    },
    {
      path: '/slotmodulefathercomponent',
      component: FatherComponent
    },
    {
      path: '/nameSlotComponent',
      component: NameSlotComponent
    },
    {
      path: '/comComponent',
      component: ComComponent
    }
  ]
});

export default router;
