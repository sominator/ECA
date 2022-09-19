import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';

Vue.config.productionTip = true;
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 1 
    },
    getters: {

    },
    mutations: {

    }
})

new Vue({
    render: h => h(App),
    store: store,
}).$mount('#app');
