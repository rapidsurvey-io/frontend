<template functional>
  <div class="c-action-wrapper">
    <slot />
  </div>
</template>

<style scoped>
  .c-action-wrapper {
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 5;
    border-radius: 5px;
    background-color: #EDEDED;
    border: 1px solid white;
  }
</style>
