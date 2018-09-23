<template>
  <section>
    <div class="flim-card" v-for="film in filmList">
      <a v-bind:href="film.trailer" target="_blank">
        <h1>{{film.name}}</h1>
        <img v-bind:src="film.image" />
        <p>{{film.rating}}</p>
      </a>
    </div>
  </section>
</template>

<script>
import { mapState, mapAction } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapState('filmModule', {
      filmList: state => state.filmList
    })
  },
  methods: {
  },
  mounted() {
    this.$store.dispatch('filmModule/getFilmList');
  }
}
</script>

<style lang="scss" scoped>
</style>
