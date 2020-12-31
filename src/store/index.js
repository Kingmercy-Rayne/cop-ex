import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // TODO: refactor isLoggedIn to hold a boolean rather than String
    isLoggedIn: localStorage.getItem('access_token') || false,
    activeProfile: 'esc',
    loginStepper: 1,
    token: localStorage.getItem('access_token') || null,
  },
  mutations: {
    CHANGE_ACTIVE_PROFILE(state, payload) {
      state.activeProfile = payload;
    },
    CHANGE_LOGIN_STEPPER(state, payload) {
      state.loginStepper = payload;
    },
    RETRIEVE_TOKEN(state, payload) {
      state.token = payload;
    },
    DESTROY_TOKEN(state) {
      state.token = null;
    },
    PROMOTE_LOGIN_STATUS(state) {
      state.isLoggedIn = true;
    },
    REVOKE_LOGIN_STATUS(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    LOGIN({ commit }) {
      const token = 'thishereistheaccesstoken';
      localStorage.setItem('access_token', token);
      commit('RETRIEVE_TOKEN', token);
      commit('PROMOTE_LOGIN_STATUS');
      commit('CHANGE_LOGIN_STEPPER', 1);
    },
    LOGOUT({ commit }) {
      localStorage.removeItem('access_token');
      commit('REVOKE_LOGIN_STATUS');
      commit('DESTROY_TOKEN');
    },
  },
  modules: {},
});
