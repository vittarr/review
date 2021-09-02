<template>
  <section class="">
    <div class="columns is-gapless is-mobile is-centered is-vcentered">
      <div class="column is-full-mobile is-half-tablet is-one-third-desktop">
        <div class="block mx-5">
          <h3 class="title">Place name</h3>
          <h4 class="subtitle">Place description</h4>
          <div class="content">
            <p>
              We value you as our customer and we would like to become better. So we value your comments.
              "{{'add message from the owner'}}"
            </p>
          </div>

          <form class="form" @submit.prevent>
            <div class="field">
              <div class="control">
                <label class="label">
                  Ranking
                  <span class="has-text-danger">*</span>
                </label>
                <input type="text" class="input" v-model="rating" />
              </div>
            </div>

            <div class="field">
              <label class="label"
                >Message <span class="has-text-danger">*</span></label
              >
              <div class="control">
                <textarea
                  class="textarea has-fixed-size"
                  placeholder="Message"
                ></textarea>
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
// import VTStar from "../components/VTStar.vue";
export default {
  name: "Mobile2",
  // components: { VTStar },
  data() {
    return {
      rating: 0,
    };
  },
  // computed: {
  //   id() {
  //     return this.$route.params.id;
  //   },
  //   // Returns a new Todo if the route `id` is 'new', or returns an existing Todo.
  //   item() {
  //     const { Code } = this.$FeathersVuex.api;
  //     const temp = Code.getFromStore(this.id) || Code.get(this.id);
  //     console.log(temp);
  //     return temp;
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.columns {
  width: 100%;
  min-height: 100vh;
}
</style>