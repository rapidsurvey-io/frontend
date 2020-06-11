<script>
import { mapState, mapActions } from 'vuex'
import SurveyModelGenerator from '@/models/survey.js'

export default {
  computed: mapState('activeSurvey', [
    'surveyName',
    'surveyDescription',
    'questions',
    'categories'
  ]),

  methods: {
    ...mapActions('dashboardSurveys', [
      'setSurvey'
    ]),

    cancel () {
      this.$router.push('/dashboard')
    },

    save () {
      this.setSurvey(
        SurveyModelGenerator(
          '1234',
          this.surveyName,
          this.surveyDescription,
          'draft',
          this.questions,
          this.categories
        )
      )
    }
  }
}
</script>
