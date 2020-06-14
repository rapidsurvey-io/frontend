<template>
  <action-wrapper>
    <span title="Edit Category" @click="CATEGORY_BUILDER_SHOW(category)">
      <icon-button icon="wrench" />
    </span>
    <span title="Delete Category" @click="SURVEY_BUILDER_DELETE_CATEGORY(categoryName)">
      <icon-button />
    </span>
  </action-wrapper>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { CATEGORY_BUILDER_SHOW, SURVEY_BUILDER_DELETE_CATEGORY } from '@/store/mutations.constants'

export default {
  props: {
    categoryName: {
      type: String,
      required: true
    }
  },

  computed: {
    ...mapState('surveyBuilder', [
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
    ...mapMutations('surveyBuilder', [
      SURVEY_BUILDER_DELETE_CATEGORY
    ]),

    ...mapMutations('categoryBuilder', [
      CATEGORY_BUILDER_SHOW
    ])
  }
}
</script>
