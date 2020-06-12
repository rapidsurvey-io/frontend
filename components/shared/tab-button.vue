<template functional>
  <div
    :class="['c-tab-button', { 'u-primary': props.isPrimary }]"
    @click="props.execute">
    <c-icon
      :icon="props.icon"
      class="fa-fw" />

    <span
      v-text="props.text" />
  </div>
</template>

<script>
export default {
  name: 'TabButton',
  props: {
    text: {
      type: String,
      default: 'Submit'
    },

    icon: {
      type: String,
      required: true
    },

    isPrimary: {
      type: Boolean,
      default: false
    },

    execute: {
      type: Function,
      default: () => { }
    }
  }
}
</script>

<style scoped lang="scss">
.c-tab-button {
  display: inline-block;
  background-color: #D3D3D3;
  padding: 15px 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
  border: 1px solid #EDEDED;
  border-bottom: 0;
  transition: all 0.2s ease-in-out;

  svg {
    margin-right: 5px;
  }

  &:hover {
    background-color: #C4C4C4;
    border: 1px solid #d3d3d3;
    border-bottom: 0;
  }

  &.u-primary {
    background-color: #003FBA;
    color: white;

    &:hover {
      background-color: #003FBA;
      border: 1px solid #003FBA;
      border-bottom: 0;
    }
  }
}
</style>
