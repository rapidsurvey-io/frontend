<template functional>
  <button
    class="c-button"
    :type="props.type"
    :class="[
      { 'u-primary': props.isPrimary },
      { 'c-button-white' : props.isWhite }
    ]"
    @click="props.execute">
    <span
      v-text="props.text" />
  </button>
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
    },

    isWhite: {
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

  &.c-button-white {
    background-color: white;
    border: 1px solid #EDEDED;

    &:hover {
      border: 1px solid white;
    }
  }
}
</style>
