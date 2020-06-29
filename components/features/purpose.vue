<template>
  <div class="c-purpose u-flex-stretch">
    <card>
      <h2>Ask</h2>
      <p>Create free surveys fast, use a template or start from scratch!</p>
      <br>
      <square-button is-primary>
        Get Started
      </square-button>
    </card>

    <card>
      <h2>Answer</h2>
      <p>Blah</p>
    </card>

    <card>
      <h2>Analyse</h2>
      <p>Blah</p>
    </card>
  </div>
</template>

<style scoped>
.c-purpose {
  position: absolute;
  bottom: -100px;
  left: 0;
  right: 0;
  z-index: 6000;
}

.c-purpose .c-card {
  width: 33%;
  background-color: black;
}
</style>
