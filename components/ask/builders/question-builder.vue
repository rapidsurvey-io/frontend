<template>
  <modal v-if="showQuestionBuilder">
    <template v-slot:header>
      <div class="u-flex-container">
        <h3 class="u-flex-grow">Ask a question</h3>
        <c-icon icon="times" class="fa-fw u-pointer" @click="cancel" />
      </div>
    </template>

    <template v-slot:body>
      <form class="c-category-slide" @submit.prevent="submitQuestion">
        <field-select
          v-model="categorySelection"
          :model="categorySelection"
          label="What category does the question belong too?">
          <option value="new">Create a new category</option>
          <option
            v-for="(selectedCategoryName, index) in categories"
            :key="index"
            :value="selectedCategoryName"
            v-text="selectedCategoryName" />
        </field-select>

        <field-input
          v-show="showCategoryNameField"
          v-model="categoryName"
          :model="categoryName"
          label="What do you want to call the category? (*)"
          is-required />

        <hr>

        <field-input
          v-model="questionName"
          label="What do you want to ask? (*)"
          is-required />

        <field-textarea
          v-show="showDescriptionField"
          v-model="questionDescription"
          label="Would you like to describe the question?" />

        <hr>

        <field-select
          v-model="responseType"
          :model="responseType"
          label="How should the visitor respond?">
          <option value="1">Yes or No</option>
          <option value="2">Free Text</option>
        </field-select>

        <div class="c-questionBuilder-footer">
          <square-button
            text="Cancel"
            :execute="cancel"
            type="button" />

          <square-button
            text="Add Question"
            is-primary />
        </div>
      </form>
    </template>
  </modal>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import generator from 'shortid'

export default {
  data () {
    return {
      questionName: '',
      questionDescription: '',
      categorySelection: 'new',
      categoryName: '',
      responseType: '1',
      showCategoryNameField: true,
      showDescriptionField: false
    }
  },

  computed: {
    ...mapState('questionBuilder', [
      'showQuestionBuilder'
    ]),

    ...mapGetters('activeSurvey', [
      'categories'
    ])
  },

  watch: {
    categorySelection (value) {
      this.showCategoryNameField = (value === 'new')
      this.categoryName = value === 'new' ? '' : value
    },
    showQuestionBuilder (value) {
      if (value === true && this.categories.size > 0) {
        this.categorySelection = this.categories.values().next().value
      }
    }
  },

  methods: {
    ...mapActions('questionBuilder', [
      'cancel'
    ]),

    ...mapActions('activeSurvey', [
      'addQuestion'
    ]),

    submitQuestion () {
      this.addQuestion({
        questionId: generator.generate(),
        questionName: this.questionName,
        questionDescription: this.questionDescription,
        categoryName: this.categoryName,
        responseType: this.responseType
      })

      this.questionName = ''
      this.questionDescription = ''
      this.categoryName = ''

      this.cancel()
    }
  }
}
</script>

<style scoped>
.c-questionBuilder-footer {
  text-align: right;
  padding: 10px;
}
</style>
