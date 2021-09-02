<template>
  <div class="box is-relative">
    <div class="close" @click="editClose">&#10006;</div>
    <h3 class="title" v-if="id == 'new'">Create new</h3>
    <h3 class="title" v-else>
      Edit <span class="subtitle">#{{ id }}</span>
    </h3>

    <FeathersVuexFormWrapper v-if="item" :item="item" watch eager>
      <template v-slot="{ clone, save, reset, remove, isDirty }">
        <form class="form" @submit.prevent>
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input
                v-model="clone.name"
                class="input"
                type="text"
                placeholder="Text input"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Address</label>
            <div class="control">
              <input
                v-model="clone.address"
                class="input"
                type="text"
                placeholder="Text input"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Phone</label>
            <div class="control">
              <input
                v-model="clone.phone"
                class="input"
                type="text"
                placeholder="Text input"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Description</label>
            <div class="control">
              <textarea
                v-model="clone.description"
                class="textarea has-fixed-size"
                placeholder="description"
              ></textarea>
            </div>
          </div>
          <div class="buttons">
            <div class="button" @click="save().then(editClose)">Save</div>
            <div class="button is-primary" v-if="isDirty" @click="reset">
              Discard
            </div>
            <div
              class="button is-danger"
              v-if="id != 'new'"
              @click="remove().then(editClose)"
            >
              Delete
            </div>
          </div>
        </form>
      </template>
    </FeathersVuexFormWrapper>
  </div>
</template>

<script>
import { FeathersVuexFormWrapper } from "feathers-vuex";

export default {
  name: "PlacesItem",
  props: ["id"],
  components: { FeathersVuexFormWrapper },
  data() {
    return {};
  },
  computed: {
    item() {
      const { Place } = this.$FeathersVuex.api;
      if (this.id === "new") {
        return new Place();
      } else {
        return Place.getFromStore(this.id);
      }
    },
  },
  methods: {
    editClose() {
      this.$emit("editClose");
    },
  },
};
</script>

<style lang="scss" scoped>
.close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;

  width: 1.5rem;
  height: 1.5rem;
  color: black;
  background: lightgray;
  border-radius: 50%;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>