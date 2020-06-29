<template functional>
  <div class="c-icon-button u-pointer">
    <c-icon
      :icon="props.icon"
      class="fa-fw" />
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'times'
    }
  }
}
</script>

<style scoped lang="scss">
.c-icon-button {
  display: inline-block;
  padding: 10px;
  background-color: #EDEDED;
  border-radius: 5px;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: #E2E2E2;
  }
}
</style>
