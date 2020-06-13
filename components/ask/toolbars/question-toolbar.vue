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
import { mapState, mapMutations, mapActions } from 'vuex'
import { QUESTION_BUILDER_SET_EDIT_SURVEY, QUESTION_BUILDER_SHOW } from '@/store/mutations.constants'
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

    ...mapMutations('questionBuilder', [
      QUESTION_BUILDER_SET_EDIT_SURVEY,
      QUESTION_BUILDER_SHOW
    ]),

    editQuestion () {
      const question = this.questions.find(question => question.questionId === this.questionId)

      this.QUESTION_BUILDER_SET_EDIT_SURVEY(question)
      this.QUESTION_BUILDER_SHOW()
    }
  }
}
</script>
