<template functional>
  <div class="c-action-wrapper">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ActionWrapper'
}
</script>

<style scoped lang="scss">
  .c-action-wrapper {
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 5;
    border-radius: 5px;
    background-color: #EDEDED;
    border: 1px solid white;
    transition: all 0.3s ease-in-out;
    opacity: 0.5;

    div:hover > &, section:hover > & {
      opacity: 1;
    }
  }
</style>
