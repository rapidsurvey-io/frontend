<template>
  <div class="u-flex-normal">
    <div class="u-flex-grow">
      <page-header>
        <template slot="heading">
          <h1>Welcome Back {{ $auth.user.given_name }}</h1>
          <p>Start a new Survey or edit an existing one below.</p>
        </template>
      </page-header>

      <survey-template-selector />
      <existing-survey-selector />
    </div>
    <div class="c-events">
      <page-header>
        <template slot="heading">
          <h2>Recent Events</h2>
          <p>Start a new Survey or edit an existing one below.</p>
        </template>
      </page-header>
    </div>
  </div>
</template>

<script>
import SurveyTemplateSelector from '@/components/ask/templates/survey-template-selector.vue'
import ExistingSurveySelector from '@/components/ask/existing-survey-selector.vue'

export default {
  components: {
    SurveyTemplateSelector,
    ExistingSurveySelector
  },

  created () {
    this.$store.dispatch('breadcrumb/set', [{ icon: 'list-alt', title: 'Ask', href: '/ask' }])
  },

  middleware: [
    'auth'
  ]
}
</script>

<style scoped>
.u-flex-normal {
  display: flex;
}

.c-events {
  height: 100%;
  padding-left: 10px;
  width: 300px;
}
</style>
