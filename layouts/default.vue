<template>
  <div data-app>
    <main-navigator />
    <breadcrumb />

    <div class="pane">
      <nuxt />
    </div>
  </div>
</template>

<script>
import MainNavigator from '~/components/navigation/main-navigator.vue'

export default {
  components: {
    MainNavigator
  }
}
</script>

<style lang="scss">
html {
  font-family: 'Karla', 'Source Sans Pro';
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #EDEDED;
}

input, button, select, textarea, p {
  font-family: 'Karla', 'Source Sans Pro';
  font-size: 1rem;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

h1 {
  font-weight: 300;
  font-size: 2.5rem;
  color: #526488;
  word-spacing: 1px;
  margin-bottom: 20px;
}

p {
  font-size: 1rem;
}

hr {
  border: 1px solid #EDEDED;
  margin: 5px 15px 5px 5px;
  text-align: center;
}

.pane {
  padding: 30px 0;
  width: 95%;
  margin: 0 auto;
}

.u-pointer {
  cursor: pointer;
}

.u-float {
  float: left;
}

.u-float-right {
  float: right;
}

.u-noScroll {
  overflow: auto;
  -ms-overflow-style: none;
}

.u-noScroll::-webkit-scrollbar {
  display: none;
}

.u-hover {
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #660066;
    border: 1px solid white;
    cursor: pointer;

    .light & {
      border: 1px solid black;
      background-color: pink;
    }
  }
}

.u-border {
  border: 1px solid white;
  border-radius: 5px;

  .light & {
    border: 1px solid black;
  }
}

.u-inline-block {
  display: inline-block;
}

.u-flex-container {
  display: flex;
  align-items: center;
  margin: 0 auto;
}

.u-flex-stretch {
  display: flex;
  align-items: stretch;
}

.u-flex-grow {
  flex-grow: 1;
  max-width: 100%;
}

.u-break-word {
  word-break: break-all;
}

.u-bold {
  font-weight: bold;
}

.u-text-link {
  text-decoration: underline;
  cursor: pointer;
}

.u-text-small {
  font-size: 0.75rem;
}

p.u-text-warning {
  color: red;
}

.u-standard-width {
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
}

.u-hidden-mobile {
  @media (max-width: 767px) {
    display: none !important;
  }
}
</style>
