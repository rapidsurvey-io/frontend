<template>
  <div class="c-tab-button" @click="execute">
    <c-icon v-if="icon" :icon="icon" class="fa-fw" />
    <span v-text="text" />
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
      default: ''
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
  transition: all 0.2s ease-in-out;

  svg {
    margin-right: 5px;
  }

  &:hover {
    background-color: #C4C4C4;
  }
}
</style>
