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
.c-overlay {
  display: flex;
  align-items: center;
}

.c-modal {
  margin: 0 auto;
  background-color: white;
  z-index: 20;
  width: 600px;
  max-width: 90%;
  border-radius: 10px;
}

.c-modal-header {
  background-color: #003FBA;
  color: white;
  padding: 15px 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.c-modal-body {
  padding: 15px 20px;
  min-height: 150px;
  max-height: 80vh;
  overflow: auto;
}
</style>
