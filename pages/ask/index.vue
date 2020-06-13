<template>
  <section>
    <survey-heading />

    <answer-category
      v-for="(category, index) in categories"
      :key="index"
      class="a-fadeIn"
      :category-name="category" />

    <client-only>
      <question-builder
        v-if="showQuestionBuilder" />

      <category-builder
        v-if="showCategoryBuilder" />

      <ask-footer />
    </client-only>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import AnswerCategory from '@/components/answer/category.vue'
import QuestionBuilder from '@/components/ask/builders/question-builder.vue'
import CategoryBuilder from '@/components/ask/builders/category-builder.vue'
import AskFooter from '@/components/ask/ask-footer.vue'
import SurveyHeading from '@/components/answer/survey-heading.vue'

export default {
  components: {
    AnswerCategory,
    QuestionBuilder,
    CategoryBuilder,
    AskFooter,
    SurveyHeading
  },

  computed: {
    ...mapGetters('activeSurvey', [
      'categories'
    ]),

    ...mapState('activeSurvey', [
      'surveyName',
      'surveyDescription',
      'questions'
    ]),

    ...mapState('categoryBuilder', [
      'showCategoryBuilder'
    ]),

    ...mapState('questionBuilder', [
      'showQuestionBuilder'
    ])
  },

  created () {
    this.$store.dispatch('breadcrumb/set', [{ icon: 'list-alt', title: 'Dashboard', href: '/dashboard' }, { icon: 'poll', title: 'Edit Survey', href: '/ask' }])
  },

  head () {
    return {
      title: 'RapidSurvey.io | Edit Survey'
    }
  },

  middleware: [
    'auth'
  ]
}
</script>
