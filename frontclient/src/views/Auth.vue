<template>
  <section class="login columns is-gapless">
    <div class="login__image column is-half is-hidden-mobile">
      <img :src="logo" alt="" />
    </div>
    <div class="login__form column">
      <AuthEmailReg v-if="!login" @gologin="switchView" />
      <AuthEmailLog v-if="login" @goregister="switchView" />

      <div class="login__buttons">
        <h2 class="subtitle">or login with social media</h2>
        <ul>
          <li><img :src="facebooklogo" alt="" /></li>
          <li><img :src="googlelogo" alt="" /></li>
          <li><img :src="githublogo" alt="" /></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import AuthEmailReg from "../components/AuthEmailReg.vue";
import AuthEmailLog from "../components/AuthEmailLog.vue";

import logo from "../../public/img/bglogo.jpg";
import facebooklogo from "../../public/img/icons/facebook.png";
import googlelogo from "../../public/img/icons/google.png";
import githublogo from "../../public/img/icons/github.png";

export default {
  name: "Auth",
  components: { AuthEmailReg, AuthEmailLog },
  data() {
    return {
      logo,
      facebooklogo,
      googlelogo,
      githublogo,
      login: true,
    };
  },
  methods: {
    switchView() {
      this.login = !this.login;
    },
  },
};
</script>

<style lang="scss" scoped>
//https://www.youtube.com/watch?v=mSAEGEAnyIY
.login {
  width: 100%;
  height: 100vh;

  &__image {
    position: relative;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 100%;
      background: linear-gradient(225deg, #e91e63, #03a9f4);
      z-index: 1;
      mix-blend-mode: screen;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  &__form {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__buttons {
    margin-top: 1rem;

    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0.5rem 0;

      li {
        list-style: none;
        width: 3rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: black;
        border-radius: 50%;
        margin: 0 1rem;
        cursor: pointer;
        &:hover {
          background: red;
        }

        img {
          transform: scale(0.5);
          filter: invert(1);
        }
      }
    }
  }
}
</style>