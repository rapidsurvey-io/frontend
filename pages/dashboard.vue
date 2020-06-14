<template>
  <div>
    <page-header>
      <img class="c-avatar u-hidden-mobile" :src="$auth.user.picture">
      <h1>Welcome Back {{ $auth.user.given_name }}</h1>
      <p>Start a new Survey or edit an existing one below.</p>
    </page-header>

    <survey-template-selector />
    <existing-survey-selector />
  </div>
</template>

<script>
import SurveyTemplateSelector from '@/components/ask/templates/survey-template-selector.vue'
import ExistingSurveySelector from '@/components/dashboard/existing-survey-selector.vue'

export default {
  components: {
    SurveyTemplateSelector,
    ExistingSurveySelector
  },

  created () {
    this.$store.dispatch('breadcrumb/set', [{ icon: 'list-alt', title: 'Dashboard', href: '/dashboard' }])
  },

  head () {
    return {
      title: 'RapidSurvey.io | Dashboard'
    }
  },

  middleware: [
    'auth'
  ]
}
</script>

<style scoped>
.c-avatar {
  float: left;
  height: 100px;
  width: 100px;
  margin-right: 30px;
  border-radius: 50%;
}
</style>
