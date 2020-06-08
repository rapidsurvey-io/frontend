<template>
  <section class="c-category">
    <div class="c-category-header">
      <h2
        v-text="categoryName" />
    </div>

    <div class="c-category-questions">
      <answer-question
        v-for="(question, index) in questionsInCategory"
        :key="index"
        v-bind="question" />
    </div>

    <category-toolbar
      v-if="isAskMode"
      :category-name="categoryName" />
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import CategoryToolbar from '@/components/ask/toolbars/category-toolbar.vue'
import AnswerQuestion from '@/components/answer/question.vue'

export default {
  components: {
    CategoryToolbar,
    AnswerQuestion
  },

  props: {
    categoryName: {
      type: String,
      required: true
    }
  },

  computed: {
    ...mapState('activeSurvey', [
      'questions'
    ]),

    ...mapGetters('activeSurvey', [
      'isAskMode'
    ]),

    questionsInCategory () {
      return this.questions.filter(question => question.categoryName === this.categoryName)
    }
  }
}
</script>

<style scoped lang="scss">
  .c-category {
    position: relative;
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 20px;
    }
  }

  .c-category-header {
    top: 95px;
    left: 0;
    right: 0;
    position: sticky;
    padding: 100px 30px 120px 30px;
    background-color: #E2E2E2;
    border-radius: 10px;
    opacity: 0.9;

    @media (max-width: 768px) {
      top: 65px;
      padding: 30px 30px 30px 30px;
      z-index: 2;
      margin-bottom: 20px;
      opacity: 1;
    }
  }

  .c-category-questions {
    margin-top: -150px;

    @media (max-width: 768px) {
      margin-top: 0;
    }
  }
</style>
