<template>
  <modal v-if="showCategoryBuilder">
    <template v-slot:header>
      <div class="u-flex-container">
        <h3 class="u-flex-grow">Edit Category</h3>
        <c-icon icon="times" class="fa-fw u-pointer" @click="cancelCategoryBuilder" />
      </div>
    </template>

    <template v-slot:body>
      <form class="c-category-slide" @submit.prevent="submit">
        <field-input
          v-model="newCategoryName"
          :model="newCategoryName"
          label="What do you want to call the category?"
          is-required />

        <div class="c-categoryBuilder-footer">
          <square-button
            text="Cancel"
            :execute="cancelCategoryBuilder"
            type="button" />

          <square-button
            text="Save Changes"
            is-primary />
        </div>
      </form>
    </template>
  </modal>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      newCategoryName: ''
    }
  },

  computed: mapState('categoryBuilder', [
    'showCategoryBuilder',
    'categoryName'
  ]),

  watch: {
    categoryName () {
      this.newCategoryName = this.categoryName
    }
  },

  methods: {
    ...mapActions('categoryBuilder', [
      'cancelCategoryBuilder'
    ]),

    ...mapActions('activeSurvey', [
      'addQuestion',
      'updateCategoryName'
    ]),

    submit () {
      this.updateCategoryName({
        oldCategoryName: this.categoryName,
        newCategoryName: this.newCategoryName
      })

      this.cancelCategoryBuilder()
    }
  }
}
</script>

<style scoped>
.c-categoryBuilder-footer {
  text-align: right;
  padding: 10px;
}
</style>
