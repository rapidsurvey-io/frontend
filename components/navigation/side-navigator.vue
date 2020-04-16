<template>
  <section class="c-side-navigator">
    <navigator-link text="Ask a question" target="/ask" />
  </section>
</template>

<script>
import navigatorLink from '@/components/navigation/navigator-link.vue'

export default {
  components: {
    navigatorLink
  }
}
</script>

<style scoped>
  .c-side-navigator {
    display: inline-block;
    width: 300px;
    max-width: 300px;
    min-width: 300px;
    background-color: #B2CDFF;
    height: calc(100vh - 67px);
  }
</style>
