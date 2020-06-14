<template>
  <div>
    <survey-heading />

    <category
      v-for="(category, index) in categories"
      :key="index"
      class="a-fadeIn"
      :category-name="category" />

    <client-only>
      <question-builder
        v-if="showQuestionBuilder" />

      <category-builder
        v-if="showCategoryBuilder" />

      <survey-footer />
    </client-only>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Category from '@/components/ask/category.vue'
import QuestionBuilder from '@/components/ask/builders/question-builder.vue'
import CategoryBuilder from '@/components/ask/builders/category-builder.vue'
import SurveyHeading from '@/components/ask/survey-heading.vue'
import SurveyFooter from '@/components/ask/survey-footer.vue'

export default {
  components: {
    Category,
    QuestionBuilder,
    CategoryBuilder,
    SurveyHeading,
    SurveyFooter
  },

  computed: {
    ...mapGetters('surveyBuilder', [
      'categories'
    ]),

    ...mapState('surveyBuilder', [
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
