<template>
  <div class="c-answer-footer">
    <div class="c-answer-footer-inner">
      <tab-button
        text="Save Survey"
        icon="save"
        :execute="save" />

      <tab-button
        text="Ask Question"
        icon="plus"
        :execute="start"
        is-primary />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import SaveSurveyMixin from '@/mixins/save-survey.mixin.vue'

export default {
  mixins: [SaveSurveyMixin],

  methods: mapActions('questionBuilder', [
    'start'
  ])
}
</script>

<style scoped lang="scss">
.c-answer-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #EDEDED;
  padding-top: 15px;
  padding-right: 10px;
  text-align: right;
  z-index: 20;
}

.c-answer-footer-inner {
  width: 600px;
  max-width: 90%;
  margin: 0 auto;
  margin-right: 125px;

  @media (max-width: 1024px) {
    margin-right: 30px;
    width: 500px;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
    width: 90%;
  }
}
</style>
