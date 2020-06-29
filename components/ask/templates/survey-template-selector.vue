<template>
  <section class="c-survey-template-selector">
    <h2>Start a new Survey</h2>
    <p>Pick a template below to start a new survey, or select blank if you want to start from scratch.</p>

    <blank-survey-template />
    <contact-survey-template />
    <review-survey-template />
  </section>
</template>

<script>
import BlankSurveyTemplate from '@/components/ask/templates/blank-survey-template.vue'
import ContactSurveyTemplate from '@/components/ask/templates/contact-survey-template.vue'
import ReviewSurveyTemplate from '@/components/ask/templates/review-survey-template.vue'

export default {
  components: {
    BlankSurveyTemplate,
    ContactSurveyTemplate,
    ReviewSurveyTemplate
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

.c-survey-template {
  display: inline-block;
  min-width: 150px;
  background-color: white;
  padding: 15px 20px;
  text-align: center;
  border-radius: 10px;
  margin-right: 5px;
  margin-bottom: 5px;
  transition: all 0.2s ease-in-out;
  border: 2px solid #EFEFEF;

  &:hover {
    border: 2px solid white;
  }
}
</style>
