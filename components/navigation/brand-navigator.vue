<template>
  <section class="c-brand-navigator">
    <logo />
  </section>
</template>

<script>
import logo from '@/components/navigation/logo.vue'

export default {
  components: {
    logo
  }
}
</script>

<style scoped>
  .c-brand-navigator {
    background-color: #003FBA;
    padding: 10px 30px;
  }
</style>
