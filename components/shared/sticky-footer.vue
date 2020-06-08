<template>
  <div class="c-sticky-footer">
    <p v-text="message" />
  </div>
</template>

<script>
export default {
  name: 'StickyFooter',

  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.c-sticky-footer {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #FFB7B7;
  min-height: 30px;
  padding: 10px;
  text-align: center;
  z-index: 15;
}
</style>
