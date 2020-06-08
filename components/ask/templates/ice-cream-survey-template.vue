<template>
  <div
    class="c-blank-survey-template u-pointer"
    @click="create">
    <div class="c-blank-survey-template-spacer" />
    <p>Ice Cream Preferences</p>
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
        responseType: '3'
      },
      {
        questionId: generator.generate(),
        questionName: 'How do you prefer it served?',
        categoryName: 'Your Preferences',
        responseType: '4',
        responses: [
          'In a Cone',
          'In a Bowl',
          'Out of the Tub'
        ]
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

<style scoped lang="scss">
  .c-blank-survey-template {
    display: inline-block;
    width: 200px;
    background-color: white;
    padding: 10px;
    text-align: center;
    border-radius: 5px;
    margin: 5px;
    transition: all 0.2s ease-in-out;
    border: 2px solid #EDEDED;

    &:hover {
      border: 2px solid white;
    }
  }

  .c-blank-survey-template-spacer {
    height: 125px;
  }
</style>
