<template>
  <div class="box">
    <h3 class="title">Created codes</h3>
    <div class="table-container">
      <table class="table is-fullwidth">
        <thead>
          <tr class="is-uppercase has-text-centered">
            <th class="has-text-left">Type</th>
            <th>ID</th>
            <th>Created</th>
            <th>QR #</th>
            <th>Views</th>
            <th colspan="2">controls</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="code in codes" :key="code.id">
            <td>{{ code.type }}</td>
            <td class="has-text-centered">{{ code.id }}</td>
            <td class="has-text-centered">date</td>
            <td class="has-text-centered"></td>
            <td class="has-text-centered"></td>
            <td class="has-text-centered">
              <button
                class="button is-small is-dark"
                @click="$emit('edit', code.id)"
              >
                <span class="icon-text">
                  <span class="icon">
                    <i class="far fa-edit"></i>
                  </span>
                </span>
              </button>
            </td>
            <td class="has-text-centered">
              <button
                class="button is-small is-dark"
                @click="$emit('remove', code.id)"
              >
                <span class="icon-text">
                  <span class="icon">
                    <i class="far fa-trash-alt"></i>
                  </span>
                </span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "CodesTable",
  props: ["codes"],
  methods: {},
};
</script>