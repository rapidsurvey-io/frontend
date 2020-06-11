<template>
  <section class="c-existing-survey-selector">
    <h2>Draft Surveys</h2>
    <p>Finish off a survey you already started and get answers fast!</p>

    <div class="c-existing-survey-selector-body">
      <survey-list-item />
      <survey-list-item />
      <survey-list-item />
    </div>

    <h2>Published Surveys</h2>
    <p>Check out the surveys you have published recently to see who has responded.</p>

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

.c-existing-survey-selector-body {
  margin-bottom: 30px;
}
</style>
