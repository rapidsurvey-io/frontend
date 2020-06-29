<template>
  <div>
    <page-hero show-breadcrumb>
      <survey-heading />
    </page-hero>

    <page-content is-padded>
      <category
        v-for="(category, index) in categoryNames"
        :key="index"
        class="a-fadeIn"
        :category-name="category" />
    </page-content>

    <client-only>
      <question-builder
        v-if="showQuestionBuilder" />

      <category-builder
        v-if="showCategoryBuilder" />

      <publish-survey-builder
        v-if="showPublishBuilder" />

      <survey-footer />
    </client-only>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Category from '@/components/ask/category.vue'
import SaveSurveyMixin from '@/mixins/save-survey.mixin.vue'
import QuestionBuilder from '@/components/ask/builders/question-builder.vue'
import CategoryBuilder from '@/components/ask/builders/category-builder.vue'
import PublishSurveyBuilder from '@/components/ask/builders/publish-builder.vue'
import SurveyHeading from '@/components/ask/survey-heading.vue'
import SurveyFooter from '@/components/ask/survey-footer.vue'

export default {
  beforeRouteLeave (to, from, next) {
    this.save()
    next()
  },

  components: {
    Category,
    QuestionBuilder,
    CategoryBuilder,
    PublishSurveyBuilder,
    SurveyHeading,
    SurveyFooter
  },

  mixins: [
    SaveSurveyMixin
  ],

  computed: {
    ...mapGetters('surveyBuilder', [
      'categoryNames'
    ]),

    ...mapState('surveyBuilder', [
      'surveyName',
      'surveyDescription',
      'questions',
      'showPublishBuilder'
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
    'identificationMiddleware'
  ]
}
</script>
