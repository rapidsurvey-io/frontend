<template>
  <section class="c-brand-navigator">
    <logo />
    <auth v-if="false" />
  </section>
</template>

<script>
import Logo from '@/components/navigation/logo.vue'
import Auth from '@/components/navigation/auth.vue'

export default {
  components: {
    Logo,
    Auth
  }
}
</script>

<style scoped>
  .c-brand-navigator {
    position: sticky;
    top: 0;
    background-color: #003FBA;
    padding: 10px 30px;
    z-index: 10;
    height: 62px;
  }
</style>
