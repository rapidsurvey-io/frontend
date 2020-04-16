<template>
  <div>
    <brand-navigator />
    <nuxt />
  </div>
</template>

<script>
import brandNavigator from '~/components/navigation/brand-navigator.vue'

export default {
  components: {
    brandNavigator
  }
}
</script>

<style>
html {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

h1 {
  font-weight: 300;
  font-size: 2.5rem;
  color: #526488;
  word-spacing: 1px;
  margin-bottom: 20px;
}

p {
  font-size: 1rem;
}
</style>
