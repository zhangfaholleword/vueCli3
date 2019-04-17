import Vue from 'vue';
import Vuex from 'vuex';
import home from './module/home.module';

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    home
  }
});

export default store;
