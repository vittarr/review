<template>
  <section class="">
    <div class="columns is-gapless is-mobile is-centered is-vcentered">
      <div class="column is-full-mobile is-half-tablet is-one-third-desktop">
        <div class="block mx-5">
          <h3 class="title">Place name</h3>
          <h4 class="subtitle">Place description</h4>
          <div class="content">
            <p>
              If you want to get promos and e in touch pease enter you actual phone.
            </p>
          </div>

          <form class="form" @submit.prevent>
            <div class="field">
              <div class="control">
                <label class="label">
                  Ranking
                  <span class="has-text-danger">*</span>
                </label>
                <input type="tel" class="input" v-model="rating" />
              </div>
            </div>

            <button
              class="button is-large is-uppercase has-text-weight-bold my-3"
            >
              <span> Send </span>
              <span class="icon"> <i class="far fa-paper-plane"></i> </span>
            </button>
          </form>
          <span class="has-text-danger">* fields required to fill in </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Mobile2",
  data() {
    return {
      rating: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.columns {
  width: 100%;
  min-height: 100vh;
}
</style>