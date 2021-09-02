<template>
  <!-- LOGIN WITH EMAIL -->
  <form class="form" @submit.prevent="submit">
    <h2 class="title">Login</h2>

    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          v-model="v$.email.$model"
          :class="{ 'is-danger': v$.email.$error }"
          type="text"
          placeholder="email"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <p class="help is-danger" v-for="e of v$.email.$errors" :key="e.$uid">
          <span>{{ e.$message }}</span>
        </p>
      </div>
    </div>

    <div class="field">
      <label class="label">Password</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input"
          v-model="v$.password.$model"
          :class="{ 'is-danger': v$.password.$error }"
          type="password"
          placeholder="password"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
        <p
          class="help is-danger"
          v-for="e of v$.password.$errors"
          :key="e.$uid"
        >
          <span>{{ e.$message }}</span>
        </p>
      </div>
    </div>

    <div class="is-flex is-align-items-center is-justify-content-space-between">
      <button class="button is-primary" type="submit">Login</button>
      <a class=""> feregot the password </a>
    </div>
    <p class="my-2">
      or <a class="" @click="$emit('goregister')"> register</a>
    </p>
  </form>
</template>

<script>
import { mapActions } from "vuex";

import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
export default {
  name: "AuthEmailLogin",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6) },
  },
  methods: {
    ...mapActions("auth", ["authenticate"]),

    async submit() {
      this.v$.$touch();
      if (this.v$.$error) return;

      const { email, password } = this;
      try {
        const res = await this.authenticate({
          strategy: "local",
          email,
          password,
        });
        console.log("Res in Auth", res);
        this.$router.push({ name: "Places" });
      } catch (err) {
        console.error("Error in Auth", err);
      }
    },
  },
};
</script>