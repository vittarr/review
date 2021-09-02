<template>
  <div class="places container mt-6">
    <!-- DESCRIPTION -->
    <div class="content">
      <h2>
        <span class="icon-text mr-4">
          <span class="icon"> <i class="fas fa-map-marked-alt"></i> </span>
        </span>
        Places summary
      </h2>
      <p>
        On this page you can create and edit places. Places can have multiple QR
        codes to be tracked. Now you can create up to 3 places (already created
        {{ places.length }}).
      </p>
    </div>

    <!-- COLUMNS -->
    <div class="columns">
      <!-- TABLE PART -->
      <div class="column is-8">
        <div class="box my-6" v-if="!places.length">
          You don't have place/s. Create some first.
        </div>
        <PlacesTable v-else :places="places" @edit="setid" @remove="remove" />
      </div>

      <!-- EDIT PART -->
      <div class="column is-4 is-flex is-justify-content-center">
        <button
          class="button is-large is-uppercase has-text-weight-bold my-6"
          v-if="!id"
          @click="id = 'new'"
        >
          NEW
        </button>
        <PlacesItem v-else :id="id" @editClose="id = false" />
      </div>
    </div>
  </div>
</template>

<script>
import { makeFindMixin } from "feathers-vuex";

import PlacesItem from "../components/PlacesItem.vue";
import PlacesTable from "../components/PlacesTable.vue";

export default {
  name: "Places",
  mixins: [makeFindMixin({ service: "places" })],
  components: { PlacesItem, PlacesTable },
  data() {
    return {
      id: false,
    };
  },

  computed: {
    placesParams() {
      return {};
    },
  },

  methods: {
    logger(value) {
      console.log("logger", value);
    },
    setid(value) {
      this.id = value;
    },
    remove(id) {
      const { Place } = this.$FeathersVuex.api;
      Place.getFromStore(id).remove();
    },
  },
};
</script>
