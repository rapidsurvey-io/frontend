<template>
  <div
    class="c-blank-survey-template u-pointer"
    @click="create">
    <div class="c-blank-survey-template-spacer" />
    <p>Blank survey</p>
  </div>
</template>

<script>
export default {
  methods: {
    create () {
      this.$router.push({ path: 'ask/edit' })
    }
  }
}
</script>

<style scoped lang="scss">
  .c-blank-survey-template {
    display: inline-block;
    width: 200px;
    background-color: white;
    padding: 10px;
    text-align: center;
    border-radius: 5px;
    margin: 5px;
    transition: all 0.2s ease-in-out;
    border: 2px solid #EDEDED;

    &:hover {
      border: 2px solid white;
    }
  }

  .c-blank-survey-template-spacer {
    height: 125px;
  }
</style>
