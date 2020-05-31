<template>
  <div>
    <page-header>
      <h1>Ask</h1>
      <p>Looking to create or edit a survey? You are in the right place</p>
      <br>
      <nuxt-link to="ask/edit">Start a new Survey?</nuxt-link>
    </page-header>

    <survey-list-item />
    <survey-list-item />
    <survey-list-item />
  </div>
</template>

<script>
import PageHeader from '@/components/shared/page-header.vue'
import SurveyListItem from '@/components/ask/survey-list-item.vue'

export default {
  components: {
    PageHeader,
    SurveyListItem
  }
}
</script>

<style scoped>
.c-survey-list-item:nth-child(even) {
  background-color: #F7F7F7;
}
</style>
