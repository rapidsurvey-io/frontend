<template>
  <div class="c-question c-question-wrapper">
    <div class="c-question-definition">
      <h3
        v-text="questionName" />
      <p
        v-show="questionDescription"
        v-text="questionDescription" />
    </div>

    <div>
      <yes-no v-if="responseType === '1'" />
      <form-input
        v-if="responseType === '2'"
        label="Your answer"
        is-required />

      <form-input
        v-if="responseType === '4'"
        label="Your answer"
        field-type="textarea"
        is-required />

      <dropdown v-if="responseType === '3'" :responses="responses" />
      <star-rating v-if="responseType === '5'" />
    </div>

    <question-toolbar
      :question-id="questionId" />
  </div>
</template>

<script>
export default {
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
    margin-right: 200px;
    margin-bottom: 50px;
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
    padding: 40px;
  }

  h3 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 10px;
  }

  .c-question-definition {
    margin-bottom: 20px;
  }
</style>
