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
        v-if="step.title"
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
    position: absolute;
    top: 50px;
    width: 100%;
    display: flex;
    border-top: 0.5px solid #2C2C2C;
    border-bottom: 0.5px solid #2C2C2C;
    padding: 7.5px 20px;
    z-index: 5000;

    @media (max-width: 768px) {
      padding: 7.5px 10px;
    }
  }

  .c-breadcrumb-link {
    text-decoration: none;
    margin-right: 15px;
    padding: 10px;
    color: white;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;

    svg {
      margin-right: 5px;
    }

    &:hover {
      background-color: #2C2C2C;
    }
  }
</style>
