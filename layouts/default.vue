<template>
  <div data-app>
    <main-navigator />
    <nuxt />
  </div>
</template>

<script>
import '@/styles/animation.scss'
import '@/styles/utilities.scss'

export default {}
</script>

<style lang="scss">
html {
  font-family: 'Karla', 'Source Sans Pro';
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  background-color: black;

  @media (max-width: 767px) {
    font-size: 14px;
  }
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

input, button, select, textarea, p {
  font-family: 'Karla', 'Source Sans Pro';
  font-size: 1rem;
}

h1 {
  font-weight: 300;
  font-size: 2.5rem;
  word-spacing: 1px;
  margin-bottom: 20px;
}

h2 {
  font-size: 1.5rem;
}

h3 {
  font-size: 1.25rem;
}

h4 {
  font-size: 1rem;
}

p {
  font-size: 1rem;
}

hr {
  border: 1px solid #EDEDED;
  margin: 5px 15px 5px 5px;
  text-align: center;
}

a {
  color: white;
}

.pane {
  padding: 20px;
  padding-bottom: 60px;

  @media (max-width: 767px) {
    padding: 10px;
    padding-bottom: 60px;
  }
}
</style>
