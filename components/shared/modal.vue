<template functional>
  <overlay>
    <div class="c-modal">
      <div class="c-modal-header">
        <slot name="header" />
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
  top: 120px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  background-color: white;
  z-index: 20;
  height: 500px;
  width: 600px;
  border-radius: 5px;
}

.c-modal-header {
  background-color: #E2E2E2;
  padding: 20px;
}
</style>
