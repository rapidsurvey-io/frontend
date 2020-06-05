<template>
  <action-wrapper>
    <!-- <icon-button icon="wrench" /> -->
    <span @click="deleteQuestion(questionId)">
      <icon-button />
    </span>
  </action-wrapper>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    questionId: {
      type: String,
      required: true
    }
  },

  methods: mapActions('activeSurvey', [
    'deleteQuestion'
  ])
}
</script>
