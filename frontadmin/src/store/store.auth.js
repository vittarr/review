// src/store/store.auth.js
import { makeAuthPlugin } from "../helpers/feathers";

export default makeAuthPlugin({ userService: "users" });
