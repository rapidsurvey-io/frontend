<template>
  <div class="c-colour-picker">
    <p
      v-text="label" />

    <div
      v-for="(colour, index) in colours"
      :key="index"
      :class="[
        'c-colour-picker-option u-pointer',
        { 'selected' : model === colour },
        colour
      ]"
      @click="$emit('input', colour)" />
  </div>
</template>

<script>
export default {
  name: 'FieldColourPicker',

  props: {
    label: {
      type: String,
      default: 'Choose a colour'
    },

    model: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      colours: ['gray', 'red', 'blue', 'green']
    }
  }
}
</script>

<style scoped lang="scss">
.c-colour-picker-option {
  display: inline-block;
  width: 32px;
  height: 32px;
  padding: 10px;
  border-radius: 50%;
  border: 1px dashed silver;
  margin: 5px 2.5px;

  &.gray {
    background-color: gray;
  }

  &.red {
    background-color: #FE5F55;
  }

  &.blue {
    background-color: #003FBA;
  }

  &.green {
    background-color: #87B38D;
  }

  &.selected {
    border: 1px solid black;
  }
}
</style>
