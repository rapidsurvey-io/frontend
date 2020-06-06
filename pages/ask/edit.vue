<template>
  <section>
    <page-header>
      <template slot="heading">
        <h1>My first survey</h1>
        <p>This is an amazing, but as yet unfinished survey website.</p>
      </template>
      <template slot="actions">
        <div class="c-action" @click="start">
          <c-icon icon="plus" class="fa-fw" />
          <span>Add Question</span>
        </div>
      </template>
    </page-header>

    <answer-category
      v-for="(category, index) in categories"
      :key="index"
      :category-name="category" />

    <question-builder />
    <category-builder />
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import PageHeader from '@/components/shared/page-header.vue'
import AnswerCategory from '@/components/survey/category.vue'
import QuestionBuilder from '@/components/ask/question-builder.vue'
import CategoryBuilder from '@/components/ask/category-builder.vue'

export default {
  components: {
    PageHeader,
    AnswerCategory,
    QuestionBuilder,
    CategoryBuilder
  },

  computed: {
    ...mapGetters('activeSurvey', [
      'categories'
    ]),

    ...mapState('activeSurvey', [
      'questions'
    ])
  },

  methods: mapActions('questionBuilder', [
    'start'
  ])
}
</script>
