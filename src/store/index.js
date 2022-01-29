import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: 'Donald Trump',
  },
  getters: {
    getUsername: state => state.username,
  },
  mutations: {},
  actions: {},
  modules: {},
});
