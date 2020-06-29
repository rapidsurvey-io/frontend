<template>
  <client-only>
    <star-rating
      v-model="rating"
      :star-size="30"
      :rounded-corners="true"
      :padding="10" />
  </client-only>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
  components: {
    StarRating
  },

  data () {
    return {
      rating: 0
    }
  }
}
</script>
