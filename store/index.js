import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = () => {
  const returnValue = new Vuex.Store({
    state: {
      user: null,
    },
    mutations: {
      SET_USER: function SET_USER(state, user) {
        // eslint-disable-next-line
        state.user = user;
      },
    },
    actions: {
      nuxtServerInit({ commit }, { req }) {
        if (req.session && req.session.user) {
          commit('SET_USER', req.session.user);
        }
      },
      login({ commit }, { username, password }) {
        return this.$axios.$post('/api/login', {
          username,
          password,
        }).then((res) => {
          console.log('user: ', res);
          if (res.status === 401) {
            throw new Error('Bad credentials');
          } else {
            return res;
          }
        }).then((user) => {
          commit('SET_USER', user);
        });
      },
      async logout({ commit }) {
        await this.$axios.$get('/api/logout').then(() => {
          commit('SET_USER', null);
        });
      },
    },
  });

  return returnValue;
};

export default store;
