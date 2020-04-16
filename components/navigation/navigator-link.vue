<template>
  <nuxt-link class="c-navigator-link" :to="target">
    {{ text }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    target: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .c-navigator-link {
    display: block;
    padding: 15px;
    color: black;
  }
</style>
