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
import SaveSurveyMixin from '@/mixins/save-survey.mixin.vue'

export default {
  beforeRouteLeave (to, from, next) {
    this.save()
    next()
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
