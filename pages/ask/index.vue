<template>
  <div>
    <survey-template-selector />
    <existing-survey-selector />
  </div>
</template>

<script>
import SurveyTemplateSelector from '@/components/templates/survey-template-selector.vue'
import ExistingSurveySelector from '@/components/ask/existing-survey-selector.vue'

export default {
  components: {
    SurveyTemplateSelector,
    ExistingSurveySelector
  }
}
</script>
