<template>
  <field-input
    v-model="response"
    label="Your answer"
    is-required />
</template>

<script>
export default {
  data () {
    return {
      response: ''
    }
  }
}
</script>
