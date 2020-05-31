<template>
  <section class="c-existing-survey-selector">
    <h2>Existing Surveys</h2>
    <p>Want to make changes to your existing surveys?</p>

    <div class="c-existing-survey-selector-body">
      <survey-list-item />
      <survey-list-item />
      <survey-list-item />
    </div>
  </section>
</template>

<script>
import SurveyListItem from '@/components/ask/survey-list-item.vue'

export default {
  components: {
    SurveyListItem
  }
}
</script>

<style scoped lang="scss">
.c-existing-survey-selector {
  padding: 20px 20px;

  h2 {
    margin-bottom: 5px;
  }

  p {
    margin-bottom: 15px;
  }
}
</style>
