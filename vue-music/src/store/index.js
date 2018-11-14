import Vue from 'vue';
import Vuex from 'vuex';

import * as Actions from 'actions';
import * as getters from 'getters';
import state from 'state';
import mutations from 'mutation';

import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !=='production';

export default new Vuex.Store({
    Actions,
    getters,
    state,
    mutations,
    strict: debug,
    plugins: debug? [createLogger()] : []
})
