import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    },
  },
  actions: {
    async fetchCurrency({ commit }, data) {
      try {
        const res = await fetch(
          `https://free.currconv.com/api/v7/convert?q=${data.data}_${data.data2}&compact=ultra&apiKey=5f89068c78ab476ce8ea`
        );
        return await res.json();
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
  },
  getters: {
    error: (state) => state.error,
  },
  modules: {},
});
