<template>
  <section>
    <div class="c-action" @click="start">
      <c-icon icon="plus" class="fa-fw" />
      <span>Add Question</span>
    </div>

    <div class="c-action" @click="start">
      <c-icon icon="share-alt" class="fa-fw" />
      <span>Publish</span>
    </div>
  </section>
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
.c-action {
  display: inline-block;
  background-color: #D3D3D3;
  padding: 12px 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  svg {
    margin-right: 5px;
  }

  &:hover {
    background-color: #C4C4C4;
  }
}
</style>
