<template>
  <div class="c-question c-question-wrapper">
    <h3
      v-text="questionName" />

    <p
      v-text="questionDescription" />

    <br>

    <yes-no-response v-if="responseType === '1'" />
  </div>
</template>

<script>
import YesNoResponse from '@/components/answer/types/yesNo.vue'

export default {
  components: {
    YesNoResponse
  },

  props: {
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
    min-height: 200px;
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
</style>
