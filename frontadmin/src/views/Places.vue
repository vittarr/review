<template>
  <div class="places container mt-6">
    <div class="content">
      <h2>
        <span class="icon-text mr-4">
          <span class="icon"> <i class="fas fa-map-marked-alt"></i> </span>
        </span>
        Places summary
      </h2>
      <p>
        On this page you can create and edit places. Places can have multiple QR
        codes to be tracked
      </p>
    </div>
    <div class="columns">
      <div class="column is-8">
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
                <tr v-for="i in 15" :key="i">
                  <td>xxx</td>
                  <td class="has-text-centered">ID</td>
                  <td class="has-text-centered">date</td>
                  <td class="has-text-centered">{{ i }}</td>
                  <td class="has-text-centered">{{ i }}</td>
                  <td class="has-text-centered">
                    <button class="button is-small is-dark">
                      <span class="icon-text">
                        <span class="icon">
                          <i class="far fa-edit"></i>
                        </span>
                      </span>
                    </button>
                  </td>
                  <td class="has-text-centered">
                    <button class="button is-small is-dark">
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
      </div>
      <div class="column is-4">
        <div class="box">
          <h3 class="title">Create new</h3>
          <form action="" class="form">
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input class="input" type="text" placeholder="Text input" />
              </div>
            </div>
            <div class="field">
              <label class="label">Address</label>
              <div class="control">
                <input class="input" type="text" placeholder="Text input" />
              </div>
            </div>
            <div class="field">
              <label class="label">Phone</label>
              <div class="control">
                <input class="input" type="text" placeholder="Text input" />
              </div>
            </div>
            <div class="field">
              <label class="label">Description</label>
              <div class="control">
                <textarea
                  class="textarea has-fixed-size"
                  placeholder="Small textarea"
                ></textarea>
              </div>
            </div>
            <div class="buttons">
              <div class="button">Save</div>
              <div class="button is-primary">Discard</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Places",
};
</script>
