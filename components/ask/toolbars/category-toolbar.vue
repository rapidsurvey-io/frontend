<template>
  <action-wrapper>
    <span @click="showCategoryBuilder(categoryName)">
      <icon-button icon="wrench" />
    </span>
    <span @click="deleteCategory(categoryName)">
      <icon-button />
    </span>
  </action-wrapper>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    categoryName: {
      type: String,
      required: true
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
