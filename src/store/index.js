import { createStaticVNode } from 'vue'
import { createStore } from 'vuex'
import user from './user' //  ////
export default createStore({
    state: {
        isCollapse: true
    },
    mutations: {
        updateIsCollapse(state, payload) {
            state.isCollapse = !state.isCollapse
        }
    },
    modules:{
        user
    }
})