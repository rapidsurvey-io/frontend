<template functional>
  <overlay>
    <div class="c-modal">
      <div class="c-modal-header">
        <slot
          name="header" />
      </div>

      <div class="c-modal-body">
        <slot
          name="body" />
      </div>
    </div>
  </overlay>
</template>

<script>
export default {
  name: 'Modal'
}
</script>

<style scoped>
.c-modal {
  position: fixed;
  top: 120px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: white;
  z-index: 20;
  width: 600px;
  border-radius: 10px;
}

.c-modal-header {
  background-color: #E2E2E2;
  padding: 15px 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.c-modal-body {
  padding: 15px 20px;
  height: 600px;
  max-height: 90vh;
  overflow: auto;
}
</style>
