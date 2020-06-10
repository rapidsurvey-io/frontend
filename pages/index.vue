<template>
  <page-header>
    <template slot="heading">
      <h1>This website is currently under active development</h1>
      <p>We are just designing and developing a prototype at the moment, but you are always free to play with whatever we have created, it is naturally subject to significant change.</p>
      <br>
      <button v-if="!$auth.loggedIn" @click="$auth.loginWith('auth0')">Sign in or Register to get started</button>
      <nuxt-link v-if="$auth.loggedIn" to="ask">Check out our progress so far?</nuxt-link>
    </template>
  </page-header>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('breadcrumb/set', [])
  }
}
</script>
