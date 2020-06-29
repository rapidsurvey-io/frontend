<template>
  <div
    class="c-card u-grow"
    :style="cardStyles">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card',

  props: {
    borderColour: {
      type: String,
      default: '#2C2C2C'
    },
    borderRadius: {
      type: String,
      default: '10px'
    }
  },

  computed: {
    cardStyles () {
      return {
        '--border-colour': this.borderColour,
        '--border-radius': this.borderRadius
      }
    }
  }
}
</script>

<style scoped>
.c-card {
  border: 1px solid var(--border-colour);
  border-radius: var(--border-radius);
  padding: 15px;
  margin: 10px;
  flex-grow: 1;
  text-align: center;
}
</style>
