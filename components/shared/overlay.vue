<template>
  <div class="c-overlay">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Overlay'
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
  background: rgba(0, 0, 0, 0.6);
}
</style>
