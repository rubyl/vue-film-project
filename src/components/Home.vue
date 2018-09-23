<template>
  <section>
    <div>
      <form id="filmForm">
        <label for="Name">Name: </label>
        <input type="text" id="Name" v-model="form.name">
        <label for="Rating">Rating: </label>
        <input type="number" id="Rating" v-model="form.rating">
        <label for="Image">Image: </label>
        <input type="text" id="Image" v-model="form.image">
        <label for="Trailer">Trailer: </label>
        <input type="text" id="Trailer" v-model="form.trailer">
        <button type="submit" v-on:click="createFilm">Submit</button>
      </form>
    </div>
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
  data: function() {
    return {
          form: {}
      }
  },
  computed: {
    ...mapState('filmModule', {
      filmList: state => state.filmList
    })
  },
  methods: {
    createFilm: function() {
      this.$store.dispatch('filmModule/createFilm', this.form)
    }
  },
  mounted() {
    this.$store.dispatch('filmModule/getFilmList', {});
  }
}
</script>

<style lang="scss" scoped>
</style>
