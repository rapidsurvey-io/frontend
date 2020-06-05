<template>
  <div class="c-action-wrapper">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ActionWrapper',

  props: {
    isLight: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
  .c-action-wrapper {
    position: absolute;
    background-color: #EDEDED;
    border-radius: 5px;
    right: 8px;
    border: 1px solid white;
    top: 8px;
    z-index: 40;
  }
</style>
