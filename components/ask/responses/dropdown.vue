<template>
  <form-select
    label="Pick one option">
    <option
      v-for="(choice, index) in responses"
      :key="index"
      value="choice">
      {{ choice }}
    </option>
  </form-select>
</template>

<script>
export default {
  props: {
    responses: {
      type: Array,
      default: () => []
    }
  }
}
</script>
