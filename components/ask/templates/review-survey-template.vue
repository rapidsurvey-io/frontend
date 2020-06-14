<template>
  <div
    class="c-survey-template u-pointer"
    @click="create">
    <c-icon icon="star" class="fa-fw u-mr-small" />
    <span>Customer Review</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import generator from 'shortid'
import QuestionModelGenerator from '@/models/question.js'
import CategoryModelGenerator from '@/models/category.js'

export default {
  data () {
    return {
      questions: [
        QuestionModelGenerator('Your Review', 'What is your name?', '', '2'),
        QuestionModelGenerator('Your Review', 'What rating would you give for the service provided?', 'Where 1 star is poor and 5 stars is perfect', '5'),
        QuestionModelGenerator('Your Review', 'Would you like to add any comments?', '', '4')
      ],
      surveyName: 'Review Form',
      surveyDescription: 'We want to collect your feedback on our service, please complete your feedback in this form.',
      categories: [
        CategoryModelGenerator('Your Review', 'Let me know what you thought about our service', 'blue')
      ]
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
        surveyDescription: this.surveyDescription,
        categories: this.categories
      })

      this.$router.push({ path: 'ask' })
    }
  }
}
</script>
