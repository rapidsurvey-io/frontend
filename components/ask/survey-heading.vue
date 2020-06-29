<template>
  <div>
    <editable-element
      element="h1"
      :text="surveyName"
      @component-updated="SURVEY_BUILDER_SET_SURVEY_NAME" />

    <editable-element
      element="p"
      :text="surveyDescription"
      @component-updated="SURVEY_BUILDER_SET_SURVEY_DESCRIPTION" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { SURVEY_BUILDER_SET_SURVEY_NAME, SURVEY_BUILDER_SET_SURVEY_DESCRIPTION } from '@/store/mutations.constants'

export default {
  computed: mapState('surveyBuilder', [
    'surveyName',
    'surveyDescription'
  ]),

  methods: mapMutations('surveyBuilder', [
    SURVEY_BUILDER_SET_SURVEY_NAME,
    SURVEY_BUILDER_SET_SURVEY_DESCRIPTION
  ])
}
</script>

<style scoped>
h1 {
  margin-bottom: 0;
}
</style>
