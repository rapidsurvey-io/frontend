<template>
  <div
    class="c-survey-template u-pointer"
    @click="create">
    <c-icon icon="envelope" class="fa-fw mr" />
    <span>Contact Form</span>
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
        QuestionModelGenerator('Your Details', 'What is your name?', '', '2'),
        QuestionModelGenerator('Your Details', 'What is your email address?', '', '2'),
        QuestionModelGenerator('Your Details', 'Do you want a response?', '', '1'),
        QuestionModelGenerator('Your Message', 'What is the nature of your message?', '', '3', ['General Chat', 'Business', 'Other']),
        QuestionModelGenerator('Your Message', 'What message would you like to send?', '', '4')
      ],
      surveyName: 'Contact Me',
      surveyDescription: 'Click me to change the name and description of this survey...',
      categories: [
        CategoryModelGenerator('Your Details', 'Let me know who you are and how I should get back to you...', 'blue'),
        CategoryModelGenerator('Your Message', 'What do you want to talk about...', 'blue')
      ]
    }
  },

  methods: {
    ...mapActions('activeSurvey', [
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
