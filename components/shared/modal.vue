<template>
  <overlay>
    <form class="c-modal" @submit.prevent="submitFunction">
      <div class="c-modal-header">
        <slot
          name="header" />
      </div>

      <div class="c-modal-body">
        <slot
          name="body" />
      </div>

      <div class="c-modal-footer">
        <slot
          name="footer" />
      </div>
    </form>
  </overlay>
</template>

<script>
export default {
  name: 'Modal',

  props: {
    submitFunction: {
      type: Function,
      default: () => {}
    }
  }
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
  max-width: 95%;
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
  min-height: 100px;
  max-height: 80vh;
  overflow: auto;
}

.c-modal-footer {
  padding: 5px 30px 25px 25px;
}
</style>
