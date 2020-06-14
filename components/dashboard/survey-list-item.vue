<template>
  <div class="c-survey-list-item u-flex-container">
    <p
      class="u-grow"
      v-text="survey.surveyName" />

    <survey-toolbar
      @edit="edit"
      @delete="DASHBOARD_DELETE_SURVEY(survey.surveyId)" />
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import { DASHBOARD_DELETE_SURVEY } from '@/store/mutations.constants'
import SurveyToolbar from '@/components/ask/toolbars/survey-toolbar.vue'

export default {
  components: {
    SurveyToolbar
  },

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

    ...mapActions('activeSurvey', [
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
    border: 2px solid #EDEDED;
    margin-bottom: 5px;
    transition: all 0.2s ease-in-out;
  }

  .c-survey-list-item:nth-child(even) {
  background-color: #F7F7F7;
  border: 2px solid #EDEDED;

  &:hover {
    border: 2px solid #F7F7F7;
  }
}

.c-survey-list-item:nth-child(odd) {
  background-color: white;
  border: 2px solid #EDEDED;

  &:hover {
    border: 2px solid white;
  }
}
</style>
