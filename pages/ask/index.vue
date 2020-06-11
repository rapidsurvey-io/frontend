<template>
  <section>
    <page-header :has-actions="true">
      <template slot="heading">
        <h1 v-text="surveyTitle" />
        <p v-text="surveyDescription" />
      </template>

      <template slot="actions">
        <survey-toolbar />
      </template>
    </page-header>

    <answer-category
      v-for="(category, index) in categories"
      :key="index"
      :category-name="category" />

    <question-builder />
    <category-builder
      v-if="showCategoryBuilder" />
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import SurveyToolbar from '@/components/ask/toolbars/survey-toolbar.vue'
import AnswerCategory from '@/components/answer/category.vue'
import QuestionBuilder from '@/components/ask/builders/question-builder.vue'
import CategoryBuilder from '@/components/ask/builders/category-builder.vue'

export default {
  components: {
    SurveyToolbar,
    AnswerCategory,
    QuestionBuilder,
    CategoryBuilder
  },

  computed: {
    ...mapGetters('activeSurvey', [
      'categories'
    ]),

    ...mapState('activeSurvey', [
      'surveyTitle',
      'surveyDescription',
      'questions'
    ]),

    ...mapState('categoryBuilder', [
      'showCategoryBuilder'
    ])
  },

  created () {
    this.$store.dispatch('breadcrumb/set', [{ icon: 'list-alt', title: 'Dashboard', href: '/dashboard' }, { icon: 'poll', title: 'Edit Survey', href: '/ask' }])
  },

  middleware: [
    'auth'
  ]
}
</script>
