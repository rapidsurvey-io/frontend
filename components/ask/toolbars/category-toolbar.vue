<template>
  <action-wrapper>
    <span @click="CATEGORY_BUILDER_SHOW(category)">
      <icon-button icon="wrench" />
    </span>
    <span @click="deleteCategory(categoryName)">
      <icon-button />
    </span>
  </action-wrapper>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import { CATEGORY_BUILDER_SHOW } from '@/store/mutations.constants'

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
        categoryDescription: category?.categoryDescription || '',
        colourCode: category?.colourCode || 'gray'
      }
    }
  },

  methods: {
    ...mapActions('activeSurvey', [
      'deleteCategory'
    ]),

    ...mapMutations('categoryBuilder', [
      CATEGORY_BUILDER_SHOW
    ])
  }
}
</script>
