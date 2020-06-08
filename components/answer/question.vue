<template>
  <div class="c-question c-question-wrapper">
    <h3
      v-text="questionName" />

    <p
      v-text="questionDescription" />

    <br>

    <yes-no-response
      v-if="responseType === '1'" />

    <free-text-response
      v-if="responseType === '2'" />

    <dropdown-response
      v-if="responseType === '3'"
      :responses="responses" />

    <question-toolbar :question-id="questionId" />
  </div>
</template>

<script>
import QuestionToolbar from '@/components/ask/toolbars/question-toolbar.vue'
import YesNoResponse from '@/components/answer/responses/yesNo.vue'
import FreeTextResponse from '@/components/answer/responses/freeText.vue'
import DropdownResponse from '@/components/answer/responses/dropdown.vue'

export default {
  components: {
    QuestionToolbar,
    YesNoResponse,
    FreeTextResponse,
    DropdownResponse
  },

  props: {
    questionId: {
      type: String,
      required: true
    },

    questionName: {
      type: String,
      required: true
    },

    questionDescription: {
      type: String,
      default: ''
    },

    responseType: {
      type: String,
      default: '1'
    },

    responses: {
      type: Array,
      default: () => []
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
    margin-right: 120px;
    margin-bottom: 20px;
    min-height: 150px;
    background-color: white;
    z-index: 1;
    border-radius: 10px;

    @media (max-width: 1024px) {
      margin-right: 30px;
      width: 500px;
    }

    @media (max-width: 768px) {
      margin: 0 auto;
      margin-bottom: 15px;
      width: 90%;
    }
  }

  .c-question {
    padding: 30px;
  }

  h3 {
    margin-bottom: 10px;
  }
</style>
