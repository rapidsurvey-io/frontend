<template>
  <modal :submit-function="submitQuestion">
    <template v-slot:header>
      <h3>
        <span>Ask a question</span>
        <c-icon icon="times" class="fa-fw u-pointer u-float-right" @click="QUESTION_BUILDER_HIDE" />
      </h3>
    </template>

    <template v-slot:body>
      <form-select
        v-model="categorySelection"
        :model="categorySelection"
        label="Which category should the question belong too?">
        <option value="new">Create a new category</option>
        <option
          v-for="(selectedCategoryName, index) in categoryNames"
          :key="index"
          :value="selectedCategoryName"
          v-text="selectedCategoryName" />
      </form-select>

      <form-input
        v-show="showCategoryNameField"
        v-model="categoryName"
        :model="categoryName"
        label="What do you want to call the category? (*)"
        is-required />

      <hr>

      <form-input
        v-model="questionName"
        :model="questionName"
        label="What do you want to ask? (*)"
        is-required />

      <form-input
        v-show="showDescriptionField"
        v-model="questionDescription"
        :model="questionDescription"
        class="a-fadeIn"
        field-type="textarea"
        label="Would you like to describe the question?" />

      <hr>

      <form-select
        v-model="responseType"
        :model="responseType"
        label="How should the visitor respond?">
        <option value="1">Yes or No</option>
        <option value="2">Free Text</option>
        <option value="4">Multi-line text</option>
        <option value="5">Star Rating</option>
      </form-select>
    </template>

    <template v-slot:footer>
      <div class="u-float-container">
        <square-button
          v-if="!showDescriptionField"
          text="Add Description"
          :execute="showDescription"
          type="button" />

        <div class="u-float-right">
          <square-button
            text="Cancel"
            :execute="QUESTION_BUILDER_HIDE"
            type="button" />

          <square-button
            text="Add"
            is-primary />
        </div>
      </div>
    </template>
  </modal>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import generator from 'shortid'
import { QUESTION_BUILDER_HIDE } from '@/store/mutations.constants'

export default {
  data () {
    return {
      questionId: '',
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
      'showQuestionBuilder',
      'questionToEdit'
    ]),

    ...mapGetters('surveyBuilder', [
      'categoryNames'
    ])
  },

  watch: {
    categorySelection (value) {
      this.showCategoryNameField = (value === 'new')
      this.categoryName = value === 'new' ? '' : value
    },
    showQuestionBuilder (value) {
      if (value === true && this.categoryNames.size > 0) {
        this.categorySelection = this.categoryNames.values().next().value
      }
    }
  },

  mounted () {
    if (this.questionToEdit) {
      this.questionId = this.questionToEdit.questionId
      this.questionName = this.questionToEdit.questionName
      this.questionDescription = this.questionToEdit.questionDescription
      this.categoryName = this.questionToEdit.categoryName
      this.categorySelection = this.questionToEdit.categoryName
      this.responseType = this.questionToEdit.responseType
      this.showCategoryNameField = false
      this.showDescriptionField = (this.questionToEdit.questionDescription)
    } else {
      this.questionId = generator.generate()
    }
  },

  methods: {
    ...mapMutations('questionBuilder', [
      QUESTION_BUILDER_HIDE
    ]),

    ...mapActions('surveyBuilder', [
      'updateQuestion'
    ]),

    showDescription () {
      this.showDescriptionField = true
    },

    submitQuestion () {
      this.updateQuestion({
        questionId: this.questionId,
        questionName: this.questionName,
        questionDescription: this.questionDescription,
        categoryName: this.categoryName,
        responseType: this.responseType
      })

      this.questionId = ''
      this.questionName = ''
      this.questionDescription = ''
      this.categoryName = ''

      this.QUESTION_BUILDER_HIDE()
    }
  }
}
</script>
