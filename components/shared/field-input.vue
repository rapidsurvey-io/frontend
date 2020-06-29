<template>
  <label class="c-input">
    <p
      class="c-input-label"
      v-text="label" />

    <input
      :required="isRequired"
      :value="model"
      :type="type"
      @input="$emit('input', $event.target.value)">
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },

    model: {
      type: String,
      default: ''
    },

    isRequired: {
      type: Boolean,
      default: false
    },

    type: {
      type: String,
      default: 'text'
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
