<template>
  <div>
    <page-header>
      <h1>Ask a question</h1>
      <p>Its super easy to ask a question, and when you do you can share it with whoever you need, friends, family or colleagues right away.</p>
    </page-header>

    <section class="c-ask">
      <div class="c-input-group">
        <label>
          <p>What do you want to ask?</p>
          <input type="text" placeholder="What do you want to ask?" required>
        </label>
      </div>

      <div class="c-input-group">
        <label>
          <p>Can you provide a description or clarification?</p>
          <input type="text" placeholder="Can you provide a description or clarification?" required>
        </label>
      </div>

      <div class="c-button-wrapper">
        <button-component text="Submit" :is-primary="true" />
        <button-component text="Cancel" :is-primary="false" />
      </div>
    </section>
  </div>
</template>

<script>
import pageHeader from '@/components/shared/page-header.vue'
import buttonComponent from '@/components/shared/button.vue'

export default {
  components: {
    pageHeader,
    buttonComponent
  }
}
</script>

<style scoped lang="scss">
  .c-ask {
    padding: 30px;
  }

  .c-input-group {
    margin-bottom: 20px;

    p {
      color: darkgray;
    }
  }

  input {
    display: block;
    width: 100%;
    font-size: 20px;
    padding: 20px;
    background-color: whitesmoke;
    border: 0;
    outline: none;
    margin-top: 10px;
  }

  .c-button-wrapper {
    text-align: right;
  }
</style>
