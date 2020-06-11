<template>
  <div class="u-flex-normal">
    <div class="u-flex-grow">
      <page-header>
        <template slot="heading">
          <img class="c-avatar u-hidden-mobile" :src="$auth.user.picture">
          <h1>Welcome Back {{ $auth.user.given_name }}</h1>
          <p>Start a new Survey or edit an existing one below.</p>
        </template>
      </page-header>

      <survey-template-selector />
      <existing-survey-selector />
    </div>

    <events-header />
  </div>
</template>

<script>
import SurveyTemplateSelector from '@/components/ask/templates/survey-template-selector.vue'
import ExistingSurveySelector from '@/components/ask/existing-survey-selector.vue'
import EventsHeader from '@/components/events/events-header.vue'

export default {
  components: {
    SurveyTemplateSelector,
    ExistingSurveySelector,
    EventsHeader
  },

  created () {
    this.$store.dispatch('breadcrumb/set', [{ icon: 'list-alt', title: 'Dashboard', href: '/dashboard' }])
  },

  head () {
    return {
      title: 'RapidSurvey.io | Dashboard'
    }
  },

  middleware: [
    'auth'
  ]
}
</script>

<style scoped>
.u-flex-normal {
  display: flex;
}

.c-avatar {
  float: left;
  height: 100px;
  width: 100px;
  margin-right: 30px;
  border-radius: 50%;
}
</style>
