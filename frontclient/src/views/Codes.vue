<template>
  <div class="codes container mt-6">
    <!-- DESCRIPTION -->
    <div class="content">
      <h2>
        <span class="icon-text mr-4">
          <span class="icon"> <i class="fas fa-qrcode"></i> </span>
        </span>
        QR Codes summary
      </h2>
      <p>
        On this page you can create QR codes which you can use ant trach
        responce rates
      </p>
    </div>

    <!-- COLUMNS -->
    <div class="columns">
      <!-- TABLE PART -->
      <div class="column is-8">
        <div class="box my-6" v-if="!codes.length">
          You don't have QR code/s. Create some.
        </div>
        <CodesTable v-else :codes="codes" @edit="setid" @remove="remove" />
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
        <CodesItem v-else :id="id" @editClose="id = false" />
      </div>
    </div>
  </div>
</template>

<script>
import { makeFindMixin } from "feathers-vuex";

import CodesItem from "../components/CodesItem.vue";
import CodesTable from "../components/CodesTable.vue";

export default {
  name: "Codes",
  mixins: [makeFindMixin({ service: "codes" })],
  components: { CodesItem, CodesTable },
  data() {
    return {
      id: false,
    };
  },

  computed: {
    codesParams() {
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
      const { Code } = this.$FeathersVuex.api;
      Code.getFromStore(id).remove();
    },
  },
};
</script>

<style lang="scss" scoped>
.select,
select {
  width: 100%;
}
</style>