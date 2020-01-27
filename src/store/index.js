import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// modules
import user from './modules/user'
import header from './modules/header'

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { user, header }
});
