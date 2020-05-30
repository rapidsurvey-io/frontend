<template>
  <label class="c-select">
    <p
      class="c-select-label"
      v-text="label" />
    <select
      :required="isRequired"
      @input="updateValue($event.target.value)">
      <slot />
    </select>
  </label>
</template>

<script>
export default {
  name: 'FieldSelect',

  props: {
    label: {
      type: String,
      required: true
    },

    isRequired: {
      type: Boolean,
      default: false
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
.c-select {
  display: block;
  padding: 10px 10px 10px 0;

  .c-select-label {
    margin: 0 10px 5px 0;
  }

  select {
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
