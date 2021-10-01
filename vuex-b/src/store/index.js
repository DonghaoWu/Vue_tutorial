import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jobs: [],
    displayJobs: [],
    rows: 0,
    perPage: 3,
    showSpinner: false,
  },
  mutations: {
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },
    SET_ROWS(state, rows) {
      state.rows = rows;
    },
    SET_DISPLAYJOBS(state, displayJobs) {
      state.displayJobs = displayJobs;
    },
    SET_SPINNER(state, spinner) {
      state.showSpinner = spinner;
    },
  },
  getters: {
    jobs(state) {
      return state.jobs;
    },
    rows(state) {
      return state.rows;
    },
    displayJobs(state) {
      return state.displayJobs;
    },
    currentPage(state) {
      return state.currentPage;
    },
    perPage(state) {
      return state.perPage;
    },
    showSpinner(state) {
      return state.showSpinner;
    },
  },
  actions: {
    async fetchData({ commit }) {
      commit('SET_SPINNER', true);
      return new Promise((reslove) => {
        setTimeout(async () => {
          try {
            let res = await fetch('data.json');
            let val = await res.json();
            reslove(val);
            commit('SET_SPINNER', false);
          } catch (error) {
            console.log('error occurs in fetchData ===>', error);
            commit('SET_SPINNER', false);
          }
        }, 1000);
      });
    },
    async fetchJobs({ dispatch, commit, state }) {
      const myJson = await dispatch('fetchData');
      const myDisplayJobs = myJson.slice(0, state.perPage);
      commit('SET_JOBS', myJson);
      commit('SET_DISPLAYJOBS', myDisplayJobs);
      commit('SET_ROWS', myJson.length);
    },
    async paginate({ commit, state }, { currentPage }) {
      const start = (currentPage - 1) * state.perPage;
      const displayJobs = state.jobs.slice(start, start + state.perPage);
      commit('SET_DISPLAYJOBS', displayJobs);
    },
    updatePagination({ commit, dispatch }, { myJson, currentPage }) {
      commit('SET_JOBS', myJson);
      commit('SET_ROWS', myJson.length);
      dispatch('paginate', { currentPage });
    },
    async search({ dispatch }, { text }) {
      const myJson = await this.dispatch('fetchData');
      const val = myJson.filter((el) => {
        return el.name.toLowerCase().includes(text.toLowerCase());
      });
      dispatch('updatePagination', { myJson: val, currentPage: 1 });
    },
  },
  modules: {},
});
