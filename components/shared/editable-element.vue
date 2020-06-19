
<template>
  <component
    :is="element"
    class="c-editable-element"
    contenteditable="true"
    @input="updateComponent"
    @keydown.enter.prevent
    v-text="text" />
</template>

<script>
import Debounce from '@/services/debounce.js'

export default {
  name: 'EditableElement',

  props: {
    element: {
      type: String,
      default: 'h1'
    },

    text: {
      type: String,
      default: 'Empty heading'
    }
  },
  methods: {
    updateComponent: Debounce(function (event) {
      this.$emit('component-updated', event.target.textContent)
    }, 1500)
  }
}
</script>

<style scoped lang="scss">
.c-editable-element {
  outline: 0;
  border: 1px solid transparent;
  transition: border 0.2s ease-in-out;
  padding: 10px 5px;
  border-radius: 10px;

  &:hover, &:active, &:focus {
    border: 1px dashed silver;
  }
}
</style>
