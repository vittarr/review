<template>
  <div class="box">
    <h3 class="title">Created places</h3>
    <div class="table-container">
      <table class="table is-fullwidth">
        <thead>
          <tr class="is-uppercase has-text-centered">
            <th class="has-text-left">Place</th>
            <th>ID</th>
            <th>Created</th>
            <th>QR #</th>
            <th>Views</th>
            <th colspan="2">controls</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="place in places" :key="place.id">
            <td>{{ place.name }}</td>
            <td class="has-text-centered">{{ place.id }}</td>
            <td class="has-text-centered">date</td>
            <td class="has-text-centered"></td>
            <td class="has-text-centered"></td>
            <td class="has-text-centered">
              <button
                class="button is-small is-dark"
                @click="$emit('edit', place.id)"
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
                @click="$emit('remove', place.id)"
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
  name: "PlacesTable",
  props: ["places"],
  methods: {},
};
</script>