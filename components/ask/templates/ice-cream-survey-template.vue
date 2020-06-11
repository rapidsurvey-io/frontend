<template>
  <div
    class="c-survey-template u-pointer"
    @click="create">
    <c-icon icon="ice-cream" class="fa-fw mr" />
    <span>Ice Cream Preferences</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import generator from 'shortid'

export default {
  data () {
    return {
      questions: [{
        questionId: generator.generate(),
        questionName: 'Do you like Ice Cream?',
        questionDescription: '',
        categoryName: 'Your Preferences',
        responseType: '1'
      },
      {
        questionId: generator.generate(),
        questionName: 'What is your favourite flavour?',
        questionDescription: 'Everybody has a favourite flavour, but what is yours?',
        categoryName: 'Your Preferences',
        responseType: '2'
      },
      {
        questionId: generator.generate(),
        questionName: 'How do you prefer it served?',
        categoryName: 'Your Preferences',
        responseType: '3',
        responses: [
          'In a Cone',
          'In a Bowl',
          'Out of the Tub'
        ]
      }],
      surveyTitle: 'Ice Cream Preferences',
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

      this.$router.push({ path: 'ask' })
    }
  }
}
</script>
