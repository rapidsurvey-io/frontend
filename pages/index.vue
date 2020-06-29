<template>
  <div>
    <page-hero is-tall>
      <h1>Under Development</h1>
      <p>RapidSurvey is in very early development stages, check out our progress below</p>
      <nuxt-link to="dashboard">Try it out</nuxt-link>
    </page-hero>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('breadcrumb/set', [])
  }
}
</script>
