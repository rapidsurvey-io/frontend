<template>
  <div>
    <page-header>
      <template slot="heading">
        <h1>Welcome Back {{ $auth.user.given_name }}</h1>
        <p>Start a new Survey or edit an existing one below.</p>
      </template>
    </page-header>

    <survey-template-selector />
    <existing-survey-selector />
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

  middleware: [
    'auth'
  ]
}
</script>
