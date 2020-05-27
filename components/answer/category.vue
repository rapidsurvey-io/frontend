<template>
  <section class="c-category">
    <div class="c-category-header">
      <h2>Category title</h2>
      <p>Category description goes here</p>
    </div>

    <div class="c-category-questions">
      <answer-question />
      <answer-question />
      <answer-question />
      <answer-question />
    </div>
  </section>
</template>

<script>
import AnswerQuestion from '@/components/answer/question.vue'

export default {
  components: {
    AnswerQuestion
  }
}
</script>

<style scoped>
  .c-category {
    position: relative;
    margin-bottom: 50px;
  }

  .c-category-header {
    position: absolute;
    top: 65px;
    left: 0;
    right: 0;
    position: sticky;
    padding: 60px 30px 80px 30px;
    background-color: #E2E2E2;
  }

  .c-category-questions {
    margin-top: -120px;
  }
</style>
