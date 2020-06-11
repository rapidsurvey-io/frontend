<template>
  <div class="c-colour-picker">
    <p v-text="label" />
    <div class="c-colour-picker-inner">
      <option
        v-for="(colour, index) in colours"
        :key="index"
        :class="`c-colour-picker-option ${colour} ${model === colour ? 'selected' : ''}`"
        @click="updateValue(colour)" />
    </div>
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
      colours: [
        'gray',
        'red',
        'blue',
        'green'
      ]
    }
  },

  methods: {
    updateValue (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped lang="scss">
.c-colour-picker-inner {
  padding: 10px;
}

.c-colour-picker-option {
  display: inline-block;
  cursor: pointer;
  width: 32px;
  height: 32px;
  background-color: red;
  border-radius: 50%;
  border: 1px dashed silver;
  margin: 2.5px;

  &.gray {
    background-color: gray;
  }

  &.red {
    background-color: #FE5F55;
  }

  &.blue {
    background-color: #7796CB;
  }

  &.green {
    background-color: #87B38D;
  }

  &.selected {
    border: 1px solid black;
  }
}
</style>
