<template>
  <div class="c-yesNo u-flex-stretch">
    <div class="c-choice u-pointer">
      <p>Yes</p>
    </div>

    <div class="c-choice u-pointer">
      <p>No</p>
    </div>
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

.c-choice:hover {
  border: 3px solid #E2E2E2;
}
</style>
