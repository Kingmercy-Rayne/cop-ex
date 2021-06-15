import Vue from 'vue';
import axios from 'axios';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // TODO: refactor isLoggedIn to hold a boolean rather than String
    isLoggedIn: localStorage.getItem('access_token') || false,
    isLoading: true,
    activeProfile: 'esc',
    loginStepper: 1,
    token: localStorage.getItem('access_token') || null,
    isUpcomingEventSidebarOpen: false,
    events: [],
    userRole: '',
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

    // Upcoming Event Sidebar
    SHOW_UPCOMING_EVENT_SIDEBAR(state) {
      state.isUpcomingEventSidebarOpen = true;
    },
    HIDE_UPCOMING_EVENT_SIDEBAR(state) {
      state.isUpcomingEventSidebarOpen = false;
    },

    // EVENTS
    INIT_EVENTS(state, payload) {
      state.events = payload;
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
    INITIAL_EVENT_FETCH({ commit }) {
      // Network request on Page load
      // on init, get list of all subreddits and search through them before consequent requests
      const URL = 'https://cop-ex.herokuapp.com/api/events';
      axios.get(URL).then((res) => {
        commit('INIT_EVENTS', res.data);
        commit('CHANGE_LOADING_STATE', false);
      });
    },
  },
  modules: {},
});
