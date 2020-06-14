<template>
  <section class="c-category c-action-wrapper-parent">
    <div :class="`c-category-header ${categoryColour}`">
      <div class="c-category-header-inner">
        <h2
          v-text="categoryName" />
        <p
          v-if="category"
          v-text="category.categoryDescription" />
      </div>
    </div>

    <div class="c-category-questions">
      <question
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
import Question from '@/components/ask/question.vue'

export default {
  components: {
    CategoryToolbar,
    Question
  },

  props: {
    categoryName: {
      type: String,
      required: true
    }
  },

  computed: {
    ...mapState('surveyBuilder', [
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

    &::last-child {
      padding-bottom: 0;
    }
  }

  .c-category:last-of-type {
    padding-bottom: 0 !important;
  }

  .c-category-header {
    top: 75px;
    left: 0;
    right: 0;
    position: sticky;
    padding: 80px 30px 100px 30px;
    background-color: #E2E2E2;
    transition: background-color 0.3s ease-in-out;
    border-radius: 10px;
    opacity: 0.9;

    &.gray {
      background-color: #E2E2E2;
    }

    &.red {
      background-color: #FE5F55;
    }

    &.blue {
      background-color: #003FBA;
      color: white;
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

  .c-category-header-inner {
    max-width: 275px;

    @media (max-width: 768px) {
      max-width: none;
    }
  }

  .c-category-questions {
    margin-top: -150px;

    @media (max-width: 768px) {
      margin-top: 0;
    }
  }
</style>