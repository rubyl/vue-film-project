import Vue from 'vue'
import Vuex from 'vuex'
import filmModule from '@rubyl/vue-movie-service'

Vue.use(Vuex)

var filmService = filmModule.filmService

export default new Vuex.Store({
  actions: filmService,
  filmService,
  modules: {
    filmModule: filmModule.film
  }
})
