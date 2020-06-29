<template>
  <div
    :class="['c-pageContent', { 'c-pageContent--padded' : isPadded }]">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    isPadded: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  .c-pageContent {
    background-color: #EFEFEF;
    min-height: 50vh;
  }

  .c-pageContent--padded {
    padding: 20px 20px;
  }
</style>
