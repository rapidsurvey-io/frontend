<template>
  <field-select
    v-model="response"
    :model="response"
    label="Pick one option">
    <option
      v-for="(choice, index) in responses"
      :key="index"
      value="choice">
      {{ choice }}
    </option>
  </field-select>
</template>

<script>
export default {
  props: {
    responses: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      response: ''
    }
  }
}
</script>
