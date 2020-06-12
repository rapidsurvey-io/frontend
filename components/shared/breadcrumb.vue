<template>
  <div class="c-breadcrumb">
    <nuxt-link
      v-for="(step, index) in links"
      :key="index"
      class="c-breadcrumb-link"
      :to="step.href">
      <c-icon
        v-if="step.icon"
        :icon="step.icon" />

      <span
        v-text="step.title" />
    </nuxt-link>
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

<style scoped lang="scss">
  .c-breadcrumb {
    display: flex;
    background-color: #E2E2E2;
    padding: 7.5px 30px;

    @media (max-width: 768px) {
      padding: 7.5px 10px;
    }
  }

  .c-breadcrumb-link {
    text-decoration: none;
    margin-right: 10px;
    padding: 10px;
    color: black;
    border-radius: 10px;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: #C4C4C4;
    }
  }
</style>
