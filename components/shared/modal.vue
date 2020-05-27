<template functional>
  <overlay>
    <div class="c-modal">
      <div class="c-modal-header">
        <p v-text="props.header" />
      </div>

      <div class="c-modal-body">
        <slot />
      </div>
    </div>
  </overlay>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    header: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.c-modal {
  position: fixed;
  top: 100px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  background-color: white;
  border: 1px solid black;
  z-index: 3;
  height: 500px;
  width: 500px;
  border-radius: 5px;
  padding: 20px;
}
</style>
