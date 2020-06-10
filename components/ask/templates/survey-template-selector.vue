<template>
  <section class="c-survey-template-selector">
    <h2>Start a new Survey</h2>
    <p>Pick a template below to get a new survey started fast</p>

    <blank-survey-template />
    <contact-survey-template />
    <ice-cream-survey-template />
  </section>
</template>

<script>
import BlankSurveyTemplate from '@/components/ask/templates/blank-survey-template.vue'
import IceCreamSurveyTemplate from '@/components/ask/templates/ice-cream-survey-template.vue'
import ContactSurveyTemplate from '@/components/ask/templates/contact-survey-template.vue'

export default {
  components: {
    BlankSurveyTemplate,
    ContactSurveyTemplate,
    IceCreamSurveyTemplate
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
  min-width: 200px;
  background-color: white;
  padding: 10px;
  text-align: center;
  border-radius: 10px;
  margin: 5px;
  transition: all 0.2s ease-in-out;
  border: 2px solid #EDEDED;

  &:hover {
    border: 2px solid white;
  }
}
</style>
