<template>
  <section>
    <answer-category
      v-for="(category, index) in categories"
      :key="index"
      :category-name="category" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import AnswerCategory from '@/components/answer/category.vue'

export default {
  components: {
    AnswerCategory
  },

  computed: mapGetters('activeSurvey', [
    'categories'
  ])
}
</script>
