<template>
  <div class="c-answer-footer a-slideInUp">
    <div class="c-answer-footer-inner">
      <tab-button
        text="Publish"
        icon="share-alt"
        :execute="SURVEY_BUILDER_SHOW_PUBLISH_MODAL" />
      <tab-button
        text="Ask Question"
        icon="plus"
        :execute="QUESTION_BUILDER_SHOW"
        is-primary />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { QUESTION_BUILDER_SHOW, SURVEY_BUILDER_SHOW_PUBLISH_MODAL } from '@/store/mutations.constants'

export default {
  methods: {
    ...mapMutations('questionBuilder', [
      QUESTION_BUILDER_SHOW
    ]),

    ...mapMutations('surveyBuilder', [
      SURVEY_BUILDER_SHOW_PUBLISH_MODAL
    ])
  }
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
