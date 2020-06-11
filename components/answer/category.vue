<template>
  <section class="c-category">
    <div :class="`c-category-header ${categoryColour}`">
      <h2
        v-text="categoryName" />
      <p
        v-if="category"
        v-text="category.categoryDescription" />
    </div>

    <div class="c-category-questions">
      <answer-question
        v-for="(question, index) in questionsInCategory"
        :key="index"
        v-bind="question" />
    </div>

    <category-toolbar
      :category-name="categoryName" />
  </section>
</template>

<script>
import { mapState } from 'vuex'
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
      'questions',
      'categories'
    ]),

    questionsInCategory () {
      return this.questions.filter(question => question.categoryName === this.categoryName)
    },

    category () {
      return this.categories.find(category => category.categoryName === this.categoryName)
    },

    categoryColour () {
      return (this.category)
        ? this.category.colourCode
        : 'gray'
    }
  }
}
</script>

<style scoped lang="scss">
  .c-category {
    position: relative;
    padding-bottom: 50px;

    @media (max-width: 768px) {
      padding-bottom: 20px;
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

    &.gray {
      background-color: #E2E2E2;
    }

    &.red {
      background-color: #FE5F55;
    }

    &.blue {
      background-color: #7796CB;
    }

    &.green {
      background-color: #87B38D;
    }

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
