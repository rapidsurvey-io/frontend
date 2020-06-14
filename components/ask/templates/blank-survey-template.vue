<template>
  <div
    class="c-survey-template u-pointer"
    @click="create">
    <c-icon icon="star" class="fa-fw mr" />
    <span>Blank survey</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import generator from 'shortid'

export default {
  data () {
    return {
      questions: [],
      surveyName: 'Blank Survey',
      surveyDescription: 'Click me to change the name and description of this survey...'
    }
  },

  methods: {
    ...mapActions('surveyBuilder', [
      'startTemplate'
    ]),

    create () {
      this.startTemplate({
        questions: this.questions,
        surveyId: generator.generate(),
        surveyName: this.surveyName,
        surveyDescription: this.surveyDescription
      })

      this.$router.push({ path: 'ask' })
    }
  }
}
</script>
