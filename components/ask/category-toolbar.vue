<template>
  <action-wrapper>
    <!-- <icon-button icon="palette" />
    <icon-button icon="wrench" /> -->
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

  methods: mapActions('activeSurvey', [
    'deleteCategory'
  ])
}
</script>
