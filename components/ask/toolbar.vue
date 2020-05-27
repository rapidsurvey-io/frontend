<template>
  <div class="c-toolbar">
    <div class="c-toolbar-add c-toolbar-button u-pointer" @click="start">
      <c-icon icon="plus" class="fa-fw" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: mapActions('questionBuilder', [
    'start'
  ])
}
</script>

<style scoped lang="scss">
.c-toolbar {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.c-toolbar-button {
  background-color: #E2E2E2;
  padding: 10px;
  border-radius: 50%;
  padding: 15px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #003FBA;
    color: white;
  }
}

.c-toolbar-add {
  display: inline-block;
}
</style>
