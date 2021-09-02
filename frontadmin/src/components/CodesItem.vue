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
            <label class="label">Place</label>
            <div class="control">
              <div class="select">
                <select v-model="clone.placeId">
                  <option
                    v-for="place in places"
                    :value="place.id"
                    :key="place.id"
                  >
                    {{ place.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label">Type</label>
            <div class="control">
              <div class="select">
                <select v-model="clone.type">
                  <option v-for="type in types" :value="type" :key="type">
                    {{ type }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea
                v-model="clone.message"
                class="textarea has-fixed-size"
                placeholder="Message"
              ></textarea>
            </div>
          </div>

          <div class="buttons">
            <div class="button" @click="save().then(editClose)">
              Save
            </div>
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
import { mapGetters } from "vuex";

export default {
  name: "CodeItem",
  props: ["id"],
  components: { FeathersVuexFormWrapper },
  data() {
    return {
      types: ["discount", "review", "other"],
    };
  },
  computed: {
    ...mapGetters("places", {
      places: "list",
    }),
    item() {
      const { Code } = this.$FeathersVuex.api;
      if (this.id === "new") {
        return new Code();
      } else {
        return Code.getFromStore(this.id);
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

.select,
select {
  width: 100%;
}
</style>

