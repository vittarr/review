<template>
  <div id="app">
    <div class="nav">
      <router-link to="/places">Places</router-link>
      <router-link to="/codes">Codes</router-link>
      <router-link to="/reviews">Reviews</router-link>
      <router-link to="/auth">Auth</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/logout">Logout</router-link>
    </div>
    <router-view />
  </div>
</template>

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