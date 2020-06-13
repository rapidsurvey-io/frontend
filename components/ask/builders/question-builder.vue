<template>
  <modal :submit-function="submitQuestion">
    <template v-slot:header>
      <h3>
        <span>Ask a question</span>
        <c-icon icon="times" class="fa-fw u-pointer u-float-right" @click="QUESTION_BUILDER_HIDE" />
      </h3>
    </template>

    <template v-slot:body>
      <field-select
        v-model="categorySelection"
        :model="categorySelection"
        label="Which category should the question belong too?">
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
        :model="questionName"
        label="What do you want to ask? (*)"
        is-required />

      <field-textarea
        v-show="showDescriptionField"
        v-model="questionDescription"
        :model="questionDescription"
        label="Would you like to describe the question?" />

      <hr>

      <field-select
        v-model="responseType"
        :model="responseType"
        label="How should the visitor respond?">
        <option value="1">Yes or No</option>
        <option value="2">Free Text</option>
        <option value="4">Multi-line text</option>
      </field-select>
    </template>

    <template v-slot:footer>
      <square-button
        text="Cancel"
        :execute="QUESTION_BUILDER_HIDE"
        type="button" />

      <square-button
        text="Add Question"
        is-primary />
    </template>
  </modal>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import generator from 'shortid'
import { QUESTION_BUILDER_HIDE, ACTIVE_SURVEY_ADD_QUESTION } from '@/store/mutations.constants'

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
      'showQuestionBuilder',
      'questionToEdit'
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

  mounted () {
    if (this.questionToEdit) {
      this.questionName = this.questionToEdit.questionName
      this.questionDescription = this.questionToEdit.questionDescription
      this.categoryName = this.questionToEdit.categoryName
      this.categorySelection = this.questionToEdit.categoryName
      this.responseType = this.questionToEdit.responseType
      this.showCategoryNameField = false
      this.showDescriptionField = (this.questionToEdit.questionDescription)
    }
  },

  methods: {
    ...mapMutations('questionBuilder', [
      QUESTION_BUILDER_HIDE
    ]),

    ...mapMutations('activeSurvey', [
      ACTIVE_SURVEY_ADD_QUESTION
    ]),

    ...mapActions('activeSurvey', [
      'updateQuestion'
    ]),

    submitQuestion () {
      if (this.questionToEdit) {
        this.updateQuestion({
          questionId: this.questionToEdit.questionId,
          questionName: this.questionName,
          questionDescription: this.questionDescription,
          categoryName: this.categoryName,
          responseType: this.responseType
        })
      } else {
        this.ACTIVE_SURVEY_ADD_QUESTION({
          questionId: generator.generate(),
          questionName: this.questionName,
          questionDescription: this.questionDescription,
          categoryName: this.categoryName,
          responseType: this.responseType
        })
      }

      this.questionName = ''
      this.questionDescription = ''
      this.categoryName = ''

      this.QUESTION_BUILDER_HIDE()
    }
  }
}
</script>
