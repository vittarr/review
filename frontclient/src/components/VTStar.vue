<template>
  <div>
    {{ selected }}
    <div class="rating__group">
      <div v-for="i in stars" :key="i" class="rating__item">
        <input
          v-model="selected"
          :value="i"
          :id="'rating' + i"
          name="rating"
          type="radio"
        />
        <label
          :for="'rating' + i"
          :class="i <= selected ? 'checked_star' : 'unchecked_star'"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VTStar",
  props: ["value"],
  data() {
    return {
      stars: 4,
    };
  },
  computed: {
    selected: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
//https://codepen.io/lsirivong/pen/ekBxI
$unchecked-star: "\2606";
$unchecked-color: #888;
$checked-star: "\2605";
$checked-color: #e52;
$star-size: 5rem;

.rating__group {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.rating__item {
  width: 100%;
  text-align: center;

  input {
    display: none;

    & + .unchecked_star {
      display: inline-block;
      overflow: hidden;
      cursor: pointer;

      &:before {
        content: $unchecked-star;
        color: $unchecked-color;
        font-size: $star-size;
      }
    }

    & + .checked_star {
      display: inline-block;
      overflow: hidden;
      cursor: pointer;

      &:before {
        content: $checked-star;
        color: $checked-color;
        font-size: $star-size;
      }
    }
  }
  span {
  }
}
</style>