import Vue from 'vue'
import Vuex from 'vuex'
import filmModule from '@rubyl/vue-movie-service'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    filmModule: filmModule.filmModule
  }
})
