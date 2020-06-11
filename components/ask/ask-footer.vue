<template>
  <div class="c-answer-footer">
    <square-button
      text="Cancel"
      is-white
      :execute="cancel" />
    <square-button
      text="Save Survey"
      :execute="save"
      is-primary />
  </div>
</template>

<script>
import SaveSurveyMixin from '@/mixins/save-survey.mixin.vue'

export default {
  mixins: [SaveSurveyMixin]
}
</script>

<style scoped lang="scss">
.c-answer-footer {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 600px;
  max-width: 90%;
  margin: 0 auto;
  margin-right: 120px;

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

button {
  flex-grow: 1;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  border: none;
  outline: none;
}
</style>
