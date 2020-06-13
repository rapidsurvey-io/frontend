<template>
  <page-header>
    <template slot="heading">
      <editable-element
        element="h1"
        :text="surveyName"
        @component-updated="setSurveyName" />
      <editable-element
        element="p"
        :text="surveyDescription"
        @component-updated="setSurveyDescription" />
    </template>
  </page-header>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: mapState('activeSurvey', [
    'surveyName',
    'surveyDescription'
  ]),

  methods: mapMutations('activeSurvey', [
    'setSurveyName',
    'setSurveyDescription'
  ])
}
</script>
