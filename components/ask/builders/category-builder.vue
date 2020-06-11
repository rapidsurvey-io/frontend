<template>
  <modal :submit-function="submit">
    <template v-slot:header>
      <h3>
        <span>Edit Category</span>
        <c-icon icon="times" class="fa-fw u-pointer u-float-right" @click="cancelCategoryBuilder" />
      </h3>
    </template>

    <template v-slot:body>
      <field-input
        v-model="newCategoryName"
        :model="newCategoryName"
        label="What do you want to call the category?"
        is-required />

      <field-textarea
        v-model="newCategoryDescription"
        :model="newCategoryDescription"
        label="Would you like to describe the category?" />

      <field-colour-picker
        v-model="newColour"
        :model="newColour"
        label="Choose a category background colour" />
    </template>

    <template v-slot:footer>
      <square-button
        text="Cancel"
        :execute="cancelCategoryBuilder"
        type="button" />

      <square-button
        text="Save Changes"
        is-primary />
    </template>
  </modal>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      newCategoryName: '',
      newCategoryDescription: '',
      newColour: ''
    }
  },

  computed: mapState('categoryBuilder', [
    'categoryName',
    'categoryDescription',
    'colourCode'
  ]),

  mounted () {
    this.newCategoryName = this.categoryName
    this.newCategoryDescription = this.categoryDescription
    this.newColour = this.colourCode
  },

  methods: {
    ...mapActions('categoryBuilder', [
      'cancelCategoryBuilder'
    ]),

    ...mapActions('activeSurvey', [
      'updateCategory'
    ]),

    submit () {
      this.updateCategory({
        oldCategoryName: this.categoryName,
        newCategoryName: this.newCategoryName,
        newCategoryDescription: this.newCategoryDescription,
        colourCode: this.newColour
      })

      this.cancelCategoryBuilder()
    }
  }
}
</script>
