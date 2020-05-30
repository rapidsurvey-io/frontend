<template>
  <div class="c-question c-question-wrapper">
    <h3
      v-text="questionName" />

    <p
      v-text="questionDescription" />

    <br>
    <question-choice />
    <question-choice />
    <question-choice />
  </div>
</template>

<script>
import QuestionChoice from '@/components/answer/types/choice.vue'

export default {
  components: {
    QuestionChoice
  },

  props: {
    questionName: {
      type: String,
      required: true
    },

    questionDescription: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
  .c-question-wrapper {
    position: relative;
    width: 600px;
    max-width: 90%;
    margin: 0 auto;
    margin-bottom: 15px;
    min-height: 250px;
    background-color: white;
    z-index: 1;
    border-radius: 10px;

    @media (max-width: 1024px) {
      margin-right: 30px;
    }

    @media (max-width: 768px) {
      margin: 0 auto;
    }
  }

  .c-question {
    padding: 30px;
  }
</style>
