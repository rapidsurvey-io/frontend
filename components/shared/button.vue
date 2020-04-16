<template>
  <div class="c-button" v-bind:class="[{ 'u-primary': isPrimary }]">
    <span v-text="text" />
  </div>
</template>

<script>
export default {
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
