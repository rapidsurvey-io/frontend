<template>
  <nuxt-link to="/ask" class="c-survey-list-item u-flex-container">
    <p class="u-grow">Survey one</p>
  </nuxt-link>
</template>

<style scoped lang="scss">
  .c-survey-list-item {
    display: block;
    padding: 20px 20px;
    text-decoration: none;
    border-radius: 10px;
    border: 2px solid #EDEDED;
    margin-bottom: 5px;
    transition: all 0.2s ease-in-out;
  }

  .c-survey-list-item:nth-child(even) {
  background-color: #F7F7F7;
  border: 2px solid #EDEDED;

  &:hover {
    border: 2px solid #F7F7F7;
  }
}

.c-survey-list-item:nth-child(odd) {
  background-color: white;
  border: 2px solid #EDEDED;

  &:hover {
    border: 2px solid white;
  }
}
</style>
