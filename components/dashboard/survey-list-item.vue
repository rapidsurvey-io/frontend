<template>
  <div class="c-survey-list-item u-flex-container">
    <div class="u-flex-grow">
      <h3 v-text="survey.surveyName" />
      <p v-text="survey.surveyDescription" />
    </div>

    <survey-toolbar
      @edit="edit"
      @delete="DASHBOARD_DELETE_SURVEY(survey.surveyId)" />
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import { DASHBOARD_DELETE_SURVEY } from '@/store/mutations.constants'

export default {
  props: {
    survey: {
      type: Object,
      required: true
    }
  },

  methods: {
    ...mapMutations('dashboardSurveys', [
      DASHBOARD_DELETE_SURVEY
    ]),

    ...mapActions('surveyBuilder', [
      'startTemplate'
    ]),

    edit () {
      this.startTemplate(this.survey)
      this.$router.push('/ask')
    }
  }
}
</script>

<style scoped lang="scss">
.c-survey-list-item {
  position: relative;
  display: block;
  padding: 20px 20px;
  text-decoration: none;
  border-radius: 10px;
  background-color: white;
  border: 2px solid #EFEFEF;
  margin-bottom: 5px;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 2px solid white;
  }
}
</style>
