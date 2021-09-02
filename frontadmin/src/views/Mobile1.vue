<template>
  <section class="">
    <div class="columns is-gapless is-mobile is-centered is-vcentered">
      <div class="column is-full-mobile is-half-tablet is-one-third-desktop">
        <div
          class="
            block
            mx-4
            is-flex is-flex-direction-column is-align-content-center
          "
        >
          <h3 class="title">Place name</h3>
          <h4 class="subtitle">Place description</h4>

          <button
            class="
              button
              is-size-1 is-large is-uppercase
              has-text-weight-bold
              my-3
            "
          >
            <span class="mr-4"> menu </span>
            <br />
            <span class="icon">
              <i class="fas fa-lg fa-list"></i>
            </span>
          </button>
          <br />
          <button
            class="
              button
              is-size-1 is-large is-uppercase
              has-text-weight-bold
              my-3
            "
          >
            <span class="mr-4"> review </span>
            <span class="icon">
              <i class="far fa-lg fa-comment-alt"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Mobile2",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.columns {
  width: 100%;
  min-height: 100vh;
}

.button {
  min-height: 15rem;
  min-width: 15rem;
}
</style>