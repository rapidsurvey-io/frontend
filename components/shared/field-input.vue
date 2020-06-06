<template>
  <label class="c-input">
    <p
      class="c-input-label"
      v-text="label" />

    <input
      :required="isRequired"
      :value="model"
      type="text"
      @input="updateValue($event.target.value)">
  </label>
</template>

<script>
export default {
  name: 'FieldInput',

  props: {
    label: {
      type: String,
      required: true
    },

    isRequired: {
      type: Boolean,
      default: false
    },

    model: {
      type: String,
      default: ''
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
.c-input {
  display: block;
  padding: 10px 10px 10px 0;

  .c-input-label {
    margin: 0 10px 5px 0;
  }

  input {
    display: block;
    width: 100%;
    padding: 15px;
    background-color: #EDEDED;
    outline: none;
    border: 1px solid white;
    transition: all 0.2s ease-in-out;
    border-radius: 5px;

    &:hover, &:active {
      border: 1px solid #E2E2E2;
    }
  }
}
</style>
