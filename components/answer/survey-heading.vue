<template>
  <page-header>
    <template slot="heading">
      <editable-element
        element="h1"
        :text="surveyName"
        @component-updated="ACTIVE_SURVEY_SET_SURVEY_NAME" />
      <editable-element
        element="p"
        :text="surveyDescription"
        @component-updated="ACTIVE_SURVEY_SET_SURVEY_DESCRIPTION" />
    </template>
  </page-header>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { ACTIVE_SURVEY_SET_SURVEY_NAME, ACTIVE_SURVEY_SET_SURVEY_DESCRIPTION } from '@/store/mutations.constants'

export default {
  computed: mapState('activeSurvey', [
    'surveyName',
    'surveyDescription'
  ]),

  methods: mapMutations('activeSurvey', [
    ACTIVE_SURVEY_SET_SURVEY_NAME,
    ACTIVE_SURVEY_SET_SURVEY_DESCRIPTION
  ])
}
</script>
