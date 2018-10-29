<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
  import Navigation from './components/Navigation.vue'

  export default {
    name: 'app',
    components: {
      Navigation
    }
  }
</script>

<style lang="scss">
  $color: #41b883;

  html, body {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: "Times New Roman", serif;
    font-size: 24px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 36px;
  }

  h1 {
    text-transform: uppercase;
    font-size: 1.5em;
    line-height: 1.5em;
  }

  ul, li {
    text-align: left;
  }

  li{
    line-height: 1.6em;
    text-align: justify;
  }

  a {
    text-decoration: none;
    color: #41b883;
  }

  a:hover {
    color: #b2ebd1;
  }

  button.btn-standard {
    cursor: pointer;
    outline: none;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    margin-top: 25px;
    padding: 7px 20px;
    border-radius: 6px;
    border: 1px solid $color;
    background-color: $color;
    color: white;
    font-size: 16px;
    &:hover{
      background-color: transparent;
      color: $color;
    }
    &:active{
      background-color: #b2ebd1;
      color: $color;
    }
  }

  .bar-place {
    max-width: 450px;
    margin: 50px auto;
  }

  .trials, .dices {
    font-family: "Times New Roman", serif;
    padding: 4px;
    width: 150px;

    border: 1px solid #dadada;
    outline: none;
    font-size: 24px;
    text-align: center;
  }

  .container {
    max-width: 1280px;
    padding: 10px;
    margin: auto;
  }

  p {
    text-indent: 1.5em;
    text-align: justify;
    line-height: 1.4em;
  }
</style>
