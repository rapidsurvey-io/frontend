<template>
  <section>
    <answer-category
      v-for="(category, index) in categories"
      :key="index"
      :category-name="category" />

    <question-builder />
    <ask-toolbar />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import AnswerCategory from '@/components/answer/category.vue'
import AskToolbar from '@/components/ask/toolbar.vue'
import QuestionBuilder from '@/components/ask/question-builder.vue'

export default {
  components: {
    AnswerCategory,
    AskToolbar,
    QuestionBuilder
  },

  computed: mapGetters('activeSurvey', [
    'categories'
  ])
}
</script>
