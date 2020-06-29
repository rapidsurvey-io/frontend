<template>
  <div
    :class="['c-overlay', { 'c-overlay-fullPage' : isFullPage }]">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    isFullPage: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>
.c-overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1030;
  background: rgba(0, 0, 0, 0.7);
}

.c-overlay--fullPage {
  position: fixed;
}
</style>
