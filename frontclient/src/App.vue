<template>
  <div id="app">
    <div class="nav">
      <router-link v-if="user" to="/places">Places</router-link>
      <router-link v-if="user" to="/codes">Codes</router-link>
      <router-link v-if="user" to="/reviews">Reviews</router-link>
      <router-link v-if="!user" to="/auth">Auth</router-link>
      <router-link to="/about">About</router-link>
      <span @click="logger(user)"> {{ user && user.email }} </span>
      <router-link v-if="user" to="/logout">Logout</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("auth", ["user"]),
  },

  methods: {
    logger(value) {
      console.log(value)
    }
  },
};
</script>

<style lang="scss" scoped>
.nav {
  position: absolute;
  top: 0;
  right: 0;
  text-align: right;
  a {
    &::after {
      content: "|";
      margin: 0 0.5rem;
      color: black;
    }
    &:last-child::after {
      content: "";
    }
  }
}
</style>