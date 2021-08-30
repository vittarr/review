<template>
  <!-- REGISTER WITH EMAIL -->
  <form class="form" @submit.prevent="register">
    <h2 class="title">Register</h2>
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
          v-model.trim="v$.password.$model"
          :class="{ 'is-danger': v$.password.$error }"
          type="text"
          placeholder="password"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
        <p class="help is-danger" v-for="e of v$.password.$errors" :key="e.$uid">
          <span>{{ e.$message }}</span>
        </p>
      </div>
    </div>

    <div class="is-flex is-align-items-center">
      <button class="button" type="submit">register</button>
    </div>
    <p class="my-2">or <a class="" @click="$emit('gologin')"> login</a></p>
  </form>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
export default {
  name: "AuthEmailRegister",
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
    async register() {
      this.v$.$touch();
      if (this.v$.$error) return;
      const data = {
        email: this.email,
        password: this.password,
      };
      console.log("register with data", data);
    },
  },
};
</script>