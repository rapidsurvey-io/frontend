<script>
import { mapState, mapActions } from 'vuex'
import SurveyModelGenerator from '@/models/survey.js'

export default {
  computed: {
    ...mapState('surveyBuilder', [
      'surveyId',
      'surveyName',
      'surveyDescription',
      'questions',
      'categories'
    ]),

    ...mapState('identification', [
      'identifier'
    ])
  },

  methods: {
    ...mapActions('dashboardSurveys', [
      'setSurvey'
    ]),

    cancel () {
      this.$router.push('/dashboard')
    },

    save () {
      if (this.questions.length) {
        this.setSurvey(
          SurveyModelGenerator(
            this.surveyId,
            this.surveyName,
            this.surveyDescription,
            'draft',
            this.questions,
            this.categories,
            this.identifier
          )
        )
      }
    }
  }
}
</script>
