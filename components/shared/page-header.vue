<template>
  <div class="c-page-header">
    <slot
      name="heading" />

    <div class="c-page-header-actions">
      <slot
        name="actions" />
    </div>
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
    padding: 50px 30px 80px 30px;
    border-radius: 10px;
    background-color: #E2E2E2;
    margin-bottom: 20px;
  }

  .c-page-header-actions {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0 30px;
  }
</style>
