<template>
  <label class="c-textarea">
    <p
      class="c-textarea-label"
      v-text="label" />

    <textarea
      :required="isRequired"
      :value="model"
      @input="$emit('input', $event.target.value)" />
  </label>
</template>

<script>
export default {
  name: 'FieldTextarea',

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
    }
  }
}
</script>

<style scoped lang="scss">
.c-textarea {
  display: block;
  padding: 10px 10px 10px 0;

  .c-textarea-label {
    margin: 0 10px 5px 0;
  }

  textarea {
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
