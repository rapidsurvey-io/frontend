<template>
  <div class="c-question c-question-wrapper">
    <h3 v-text="questionName" />
    <p v-text="questionDescription" />

    <br>

    <div v-bind:class="[{'c-question-disabled' : isAskMode }]">
      <yes-no-response v-if="responseType === '1'" />
      <free-text-response v-if="responseType === '2'" />
      <dropdown-response v-if="responseType === '3'" :responses="responses" />
      <multiline-text-response v-if="responseType === '4'" />
    </div>

    <question-toolbar
      v-if="isAskMode"
      :question-id="questionId" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import QuestionToolbar from '@/components/ask/toolbars/question-toolbar.vue'
import YesNoResponse from '@/components/answer/responses/yesNo.vue'
import FreeTextResponse from '@/components/answer/responses/freeText.vue'
import DropdownResponse from '@/components/answer/responses/dropdown.vue'
import MultilineTextResponse from '@/components/answer/responses/multilineText.vue'

export default {
  components: {
    QuestionToolbar,
    YesNoResponse,
    FreeTextResponse,
    DropdownResponse,
    MultilineTextResponse
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
  },

  computed: {
    ...mapGetters('activeSurvey', [
      'isAskMode'
    ])
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

  .c-question-disabled {
    pointer-events: none;
  }

  h3 {
    margin-bottom: 10px;
  }
</style>
