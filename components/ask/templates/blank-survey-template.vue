<template>
  <div
    class="c-survey-template u-pointer"
    @click="create">
    <c-icon icon="file" class="fa-fw mr" />
    <span>Blank survey</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      questions: []
    }
  },

  methods: {
    ...mapActions('activeSurvey', [
      'startTemplate'
    ]),

    create () {
      this.startTemplate({
        questions: this.questions
      })

      this.$router.push({ path: 'ask/edit' })
    }
  }
}
</script>
