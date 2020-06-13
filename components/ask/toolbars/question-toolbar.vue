<template>
  <action-wrapper>
    <span @click="editQuestion">
      <icon-button icon="wrench" />
    </span>
    <span @click="deleteQuestion(questionId)">
      <icon-button />
    </span>
  </action-wrapper>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: {
    questionId: {
      type: String,
      required: true
    }
  },

  computed: mapState('activeSurvey', [
    'questions'
  ]),

  methods: {
    ...mapActions('activeSurvey', [
      'deleteQuestion'
    ]),

    ...mapActions('questionBuilder', [
      'edit'
    ]),

    editQuestion () {
      const question = this.questions.find(question => question.questionId === this.questionId)

      this.edit(question)
    }
  }
}
</script>
