import Vue from 'vue';
import vuex from 'vuex';
Vue.use(vuex);

const state = {
    count: 1
}

// 通过mutation改变状态的值
const mutations = {
    add(state, n) {
        state.count += n;
    },
    reduce(state) {
        state.count--;
    }
}

// 计算属性
const getters = {
    count: function(state) {
        return state.count += 10;
    }
}

// 异步
const actions = {
    addAction(context) {
        context.commit(add, 10);
    },
    reduceAction({commit}){
        commit('reduce');
    }
}

export default new vuex.Store({
    state,
    mutations,
    getters,
    actions
})
