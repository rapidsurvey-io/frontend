<template>
  <button
    class="c-button"
    :type="type"
    v-bind:class="[{ 'u-primary': isPrimary }]"
    @click="execute">
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
    },

    type: {
      type: String,
      default: 'submit'
    },

    execute: {
      type: Function,
      default: () => { }
    }
  }
}
</script>

<style scoped lang="scss">
.c-button {
  display: inline-block;
  padding: 15px 20px;
  background-color: #EDEDED;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid white;

  &:hover {
    border: 1px solid #EDEDED;
  }

  &.u-primary {
    background-color: #003FBA;
    color: white;

    &:hover {
      border: 1px solid #003FBA;
    }
  }
}
</style>
