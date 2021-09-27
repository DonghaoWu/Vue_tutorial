<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
        <b-nav-item><router-link to="/about">About</router-link></b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form @submit.prevent="search">
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Search"
            v-model="searchText"
          ></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit"
            >Search</b-button
          >
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  methods: {
    search() {
      this.$store.dispatch('search', { text: this.searchText });
    },
  },
  data() {
    return {
      searchText: '',
    };
  },
  computed: {
    ...mapGetters(['showSpinner']),
  },
};
</script>

<style scoped>
#nav a.router-link-exact-active {
  color: white;
}
</style>
