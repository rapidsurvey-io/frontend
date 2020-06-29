<template>
  <section class="c-brand-navigator">
    <logo />
  </section>
</template>

<script>
import Logo from '@/components/navigation/logo.vue'

export default {
  name: 'MainNavigator',

  components: {
    Logo
  }
}
</script>

<style scoped>
  .c-brand-navigator {
    position: absolute;
    top: 0;
    width: 100%;
    padding: 10px 30px;
    z-index: 5000;
  }
</style>
