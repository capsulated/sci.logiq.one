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
    margin-top: 70px;
  }

  a {
    text-decoration: none;
    color: #41b883;
  }

  a:hover {
    color: #76C2AF;
  }
</style>
