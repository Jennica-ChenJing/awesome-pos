import Vue from 'vue'
import Vuex from 'vuex'

import imStates from "./states";
import imMutations from "./mutations";
import * as imGetters from "./getters";
import * as imActions from "./actions";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: imStates,
  mutations: imMutations,
  actions: imActions,
  getters: imGetters
});

store.watch(
  (state) => state.sessions,
  (val) => {
    // console.log('CHANGE: ', val);
    localStorage.setItem('vue-im-session', JSON.stringify(val));
  }, {
    deep: true
  }
);

export default store
