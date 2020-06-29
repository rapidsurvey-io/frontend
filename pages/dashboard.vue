<template>
  <div>
    <page-hero show-breadcrumb>
      <h1>Dashboard</h1>
      <p>Welcome to your personal Dashboard. Create a new survey using a template below or continue editing an existing survey.</p>
    </page-hero>
    <page-content is-padded>
      <survey-template-selector />
      <existing-survey-selector />
    </page-content>>
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
    'identificationMiddleware'
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
