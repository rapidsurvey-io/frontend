<template>
  <div class="c-ask-button">
    <p v-text="text" />
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .c-ask-button {
    display: inline-block;
    margin: 10px;
    padding: 20px 30px;
    border: 1px solid black;
  }
</style>
