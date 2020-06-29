<template>
  <div class="u-flex-stretch">
    <p class="c-choice c-choice-yes u-pointer">Yes</p>
    <p class="c-choice c-choice-no u-pointer">No</p>
  </div>
</template>

<style scoped>
.c-choice {
  flex: 1;
  margin: 5px;
  padding: 10px;
  background-color: #E2E2E2;
  border: 3px solid white;
  border-radius: 5px;
  transition: all 0.1s ease-in-out;
}

.c-choice-yes:hover {
  border: 3px solid #77FF70;
  background-color: #77FF70;
}

.c-choice-no:hover {
  border: 3px solid #FF6060;
  background-color: #FF6060;
}
</style>
