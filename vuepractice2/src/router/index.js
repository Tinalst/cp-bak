import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from 'components/homeComponent';
import FatherComponent from 'components/slot/fatherComponent';
import NameSlotComponent from 'components/slot/nameSlotComponent';
import ComComponent from 'components/comunication/comComponent';
import CustomDirevtive1 from 'components/directive/customeDirective1';
import ScrollDirective from 'components/directive/scrollDirective';
import AnnoyBackground from 'components/directive/AnnoyBackground';
import FiltersPipe from 'components/filtersPipe/filtersPipe';

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
        },
        {
            path: '/customDirevtive1',
            component: CustomDirevtive1
        },
        {
            path: '/scrollDirective',
            component: ScrollDirective
        },
        {
            path: '/annoyBackground',
            component: AnnoyBackground
        } ,
        {
            path: '/filtersPipe',
            component: FiltersPipe
        }
    ]
});

export default router;
