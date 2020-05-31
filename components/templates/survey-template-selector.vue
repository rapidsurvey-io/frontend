<template>
  <section class="c-survey-template-selector">
    <h2>Start a new Survey</h2>
    <p>Pick a template below to get a new survey started fast</p>

    <blank-survey-template />
    <blank-survey-template />
  </section>
</template>

<script>
import BlankSurveyTemplate from '@/components/templates/blank-survey-template.vue'

export default {
  components: {
    BlankSurveyTemplate
  }
}
</script>

<style scoped lang="scss">
.c-survey-template-selector {
  padding: 20px 20px;

  h2 {
    margin-bottom: 5px;
  }

  p {
    margin-bottom: 15px;
  }
}
</style>
