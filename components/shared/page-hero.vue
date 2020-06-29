<template>
  <div class="c-hero">
    <div :class="['c-hero-container', { 'c-hero-container--tall' : isTall }]">
      <breadcrumb v-if="showBreadcrumb" />
      <div class="c-hero-image u-fill" />

      <overlay>
        <div class="c-hero-inner u-fill">
          <div class="c-hero-content">
            <slot />
          </div>
        </div>
      </overlay>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showBreadcrumb: {
      type: Boolean,
      default: false
    },

    isTall: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.c-hero {
  position: relative;
  overflow: hidden;
  color: white;

  .c-hero-container {
    position: relative;
    height: 50vh;
  }

  .c-hero-container--tall {
    height: 75vh;
  }

  .c-hero-image {
    background-image: url('/graphics/1.jpg');
    background-size: cover;
    background-position: center center;
  }

  .c-hero-inner {
    display: flex;
    align-items: center;
    padding-top: 50px;
  }

  .c-hero-content {
    width: 800px;
    max-width: 90%;
    margin: 0 auto;
    text-align: center;
  }
}
</style>
