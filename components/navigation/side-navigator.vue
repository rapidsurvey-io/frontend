<template>
  <section class="c-side-navigator u-hidden-mobile">
    <navigator-link text="Ask" target="/ask" />
    <navigator-link text="Answer" target="/answer" />
    <navigator-link text="Analyse" target="/analyse" />
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
