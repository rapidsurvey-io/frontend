<template functional>
  <div class="c-page-header">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>

<style scoped lang="scss">
  .c-page-header {
    position: relative;
    padding: 50px 30px;
    border-radius: 10px;
    background-color: #E2E2E2;
    margin-bottom: 20px;
    min-height: 185px;
  }
</style>
