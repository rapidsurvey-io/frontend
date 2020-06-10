<template>
  <div v-show="links" class="c-breadcrumb">
    <div class="c-breadcrumb-inner">
      <nuxt-link
        v-for="(step, index) in links"
        :key="index"
        class="c-breadcrumb-link"
        :to="step.href">
        <c-icon v-if="step.icon" :icon="step.icon" />
        <span v-text="step.title" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Breadcrumb',

  computed: mapState('breadcrumb', [
    'links'
  ])
}
</script>

<style scoped>
  .c-breadcrumb {
    display: flex;
    align-items: center;
    background-color: #E2E2E2;
    border-radius: 10px;
  }

  .c-breadcrumb-inner {
    width: 95%;
    padding: 17.5px 0;
    margin: 0 auto;
  }

  .c-breadcrumb-link {
    text-decoration: none;
    margin-right: 10px;
    padding: 10px;
    color: black;
    border-radius: 10px;
    background-color: transparent;
    transition: background-color 0.2s ease-in-out;
  }

  .c-breadcrumb-link:hover {
    background-color: #C4C4C4;
  }
</style>
