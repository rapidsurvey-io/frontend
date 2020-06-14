<template>
  <modal :submit-function="submit">
    <template v-slot:header>
      <h3>
        <span>Publish Survey</span>
        <c-icon
          icon="times"
          class="fa-fw u-pointer u-float-right"
          @click="SURVEY_BUILDER_HIDE_PUBLISH_MODAL" />
      </h3>
    </template>

    <template v-slot:body>
      <p>Coming Soon</p>
    </template>

    <template v-slot:footer>
      <div class="u-float-container">
        <div class="u-float-right">
          <square-button
            text="Cancel"
            :execute="SURVEY_BUILDER_HIDE_PUBLISH_MODAL"
            type="button" />

          <square-button
            text="Save Changes"
            is-primary />
        </div>
      </div>
    </template>
  </modal>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { SURVEY_BUILDER_HIDE_PUBLISH_MODAL } from '@/store/mutations.constants'

export default {
  computed: mapState('surveyBuilder', [
    'showPublishBuilder'
  ]),

  methods: {
    ...mapMutations('surveyBuilder', [
      SURVEY_BUILDER_HIDE_PUBLISH_MODAL
    ]),

    submit () {
    }
  }
}
</script>
