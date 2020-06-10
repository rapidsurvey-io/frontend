<template>
  <div
    class="c-survey-template u-pointer"
    @click="create">
    <c-icon icon="file" class="fa-fw mr" />
    <span>Blank survey</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      questions: [],
      surveyTitle: 'Blank Survey',
      surveyDescription: 'Click me to change the name and description of this survey...'
    }
  },

  methods: {
    ...mapActions('activeSurvey', [
      'startTemplate'
    ]),

    create () {
      this.startTemplate({
        questions: this.questions,
        surveyTitle: this.surveyTitle,
        surveyDescription: this.surveyDescription
      })

      this.$router.push({ path: 'ask/edit' })
    }
  }
}
</script>
