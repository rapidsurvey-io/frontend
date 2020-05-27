<template>
  <section>
    <answer-category />
    <answer-category />
    <modal v-if="false" header="Test Modal" />
  </section>
</template>

<script>
import AnswerCategory from '@/components/answer/category.vue'

export default {
  components: {
    AnswerCategory
  }
}
</script>
