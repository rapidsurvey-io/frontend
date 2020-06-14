<template>
  <section class="c-existing-survey-selector">
    <div v-if="draftSurveys.length">
      <h2>Draft Surveys</h2>
      <p>Start a new survey fast, we save changes automatically so you will see your new surveys here...</p>
      <div class="c-existing-survey-selector-body">
        <survey-list-item
          v-for="(survey, index) in draftSurveys"
          :key="index"
          :survey="survey" />
      </div>
    </div>

    <!-- <div v-if="draftSurveys.length">
      <h2>Published Surveys</h2>
      <p>Check out the surveys you have published recently to see who has responded.</p>
      <div class="c-existing-survey-selector-body">
        <survey-list-item
          v-for="(survey, index) in draftSurveys"
          :key="index"
          :survey="survey" />
      </div>
    </div> -->
  </section>
</template>

<script>
import { mapState } from 'vuex'
import SurveyListItem from '@/components/dashboard/survey-list-item.vue'

export default {
  components: {
    SurveyListItem
  },

  computed: {
    ...mapState('dashboardSurveys', [
      'surveys'
    ]),

    draftSurveys () {
      return this.surveys.filter(svy => svy.status === 'draft')
    }
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
