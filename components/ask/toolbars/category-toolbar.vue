<template>
  <action-wrapper>
    <span @click="showCategoryBuilder(category)">
      <icon-button icon="wrench" />
    </span>
    <span @click="deleteCategory(categoryName)">
      <icon-button />
    </span>
  </action-wrapper>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: {
    categoryName: {
      type: String,
      required: true
    }
  },

  computed: {
    ...mapState('activeSurvey', [
      'categories'
    ]),

    category () {
      const category = this.categories.find(category => category.categoryName === this.categoryName)

      return {
        categoryName: category?.categoryName || this.categoryName,
        categoryDescription: category?.categoryDescription || ''
      }
    }
  },

  methods: {
    ...mapActions('activeSurvey', [
      'deleteCategory'
    ]),

    ...mapActions('categoryBuilder', [
      'showCategoryBuilder'
    ])
  }
}
</script>
