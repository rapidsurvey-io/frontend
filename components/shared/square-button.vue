<template>
  <button
    class="c-button"
    type="submit"
    @class="[{ 'u-primary': isPrimary }]">
    <span
      v-text="text" />
  </button>
</template>

<script>
export default {
  name: 'SquareButton',
  props: {
    text: {
      type: String,
      default: 'Submit'
    },
    isPrimary: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.c-button {
  display: inline-block;
  padding: 15px 20px;
  background-color: #B2CDFF;
  cursor: pointer;

  &.u-primary {
    background-color: #003FBA;
    color: white;
  }
}
</style>
