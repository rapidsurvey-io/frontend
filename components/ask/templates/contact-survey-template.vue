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

export default {
  data () {
    return {
      questions: [{
        questionId: generator.generate(),
        questionName: 'What is your email address?',
        questionDescription: '',
        categoryName: 'Your Details',
        responseType: '2'
      },
      {
        questionId: generator.generate(),
        questionName: 'Do you want a response?',
        questionDescription: '',
        categoryName: 'Your Details',
        responseType: '1'
      },
      {
        questionId: generator.generate(),
        questionName: 'What is the nature of your message?',
        questionDescription: '',
        categoryName: 'Your Message',
        responseType: '3',
        responses: ['General Chat', 'Business', 'Other']
      },
      {
        questionId: generator.generate(),
        questionName: 'What message would you like to send?',
        categoryName: 'Your Message',
        responseType: '4'
      }]
    }
  },

  methods: {
    ...mapActions('activeSurvey', [
      'startTemplate'
    ]),

    create () {
      this.startTemplate({
        questions: this.questions
      })

      this.$router.push({ path: 'ask/edit' })
    }
  }
}
</script>
