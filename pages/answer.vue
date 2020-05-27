<template>
  <section>
    <answer-category />
    <answer-category />
    <modal
      v-if="showQuestionBuilder"
      header="Test Modal">
      <template v-slot:header>
        <div class="u-flex-container">
          <h3 class="u-flex-grow">Ask a question</h3>
          <c-icon icon="times" class="fa-fw u-pointer" @click="cancel" />
        </div>
      </template>
    </modal>

    <ask-toolbar />
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AnswerCategory from '@/components/answer/category.vue'
import AskToolbar from '@/components/ask/toolbar.vue'

export default {
  components: {
    AnswerCategory,
    AskToolbar
  },

  computed: mapState('questionBuilder', {
    showQuestionBuilder: 'show'
  }),

  methods: mapActions('questionBuilder', [
    'cancel'
  ])
}
</script>
