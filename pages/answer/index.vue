<template>
  <section>
    <answer-category
      v-for="(category, index) in categories"
      :key="index"
      :category-name="category" />

    <question-builder />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import AnswerCategory from '@/components/survey/category.vue'
import QuestionBuilder from '@/components/ask/question-builder.vue'

export default {
  components: {
    AnswerCategory,
    QuestionBuilder
  },

  computed: mapGetters('activeSurvey', [
    'categories'
  ])
}
</script>
