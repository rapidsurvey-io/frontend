<template>
  <section class="c-category">
    <div class="c-category-header">
      <h2>Category title</h2>
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

<style scoped lang="scss">
  .c-category {
    position: relative;
    margin-bottom: 100px;

    @media (max-width: 767px) {
      margin-bottom: 20px;
    }
  }

  .c-category-header {
    top: 65px;
    left: 0;
    right: 0;
    position: sticky;
    padding: 100px 30px 120px 30px;
    background-color: #E2E2E2;

    @media (max-width: 767px) {
      padding: 30px 30px 30px 30px;
      z-index: 2;
      margin-bottom: 20px;
    }
  }

  .c-category-questions {
    margin-top: -200px;

    @media (max-width: 767px) {
      margin-top: 0;
    }
  }
</style>
