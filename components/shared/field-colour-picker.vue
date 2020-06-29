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
      colours: ['gray', 'red', 'blue', 'green', 'orange', 'yellow', 'purple']
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
    background-color: #E2E2E2;
  }

  &.red {
    background-color: #FF4E50;
  }

  &.blue {
    background-color: #476F95;
  }

  &.green {
    background-color: #3FB8AF;
  }

  &.orange {
    background-color: #FC913A;
  }

  &.yellow {
    background-color: #F9D423;
  }

  &.purple {
    background-color: #AB526B;
  }

  &.selected {
    border: 1px solid black;
  }
}
</style>
