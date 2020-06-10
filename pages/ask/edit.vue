<template>
  <section>
    <page-header>
      <template slot="heading">
        <h1>My first survey</h1>
        <p>This is an amazing, but as yet unfinished survey website.</p>
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
    <category-builder />
    <sticky-footer message="You are viewing this survey in Ask mode" />
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
      'questions'
    ])
  },

  created () {
    this.$store.dispatch('breadcrumb/set', [{ icon: 'list-alt', title: 'Ask', href: '/ask' }, { icon: 'poll', title: 'Edit Survey', href: '/ask/edit' }])
  },

  middleware: [
    'auth'
  ]
}
</script>
