<template>
    <div class="nav">
        <router-link class="nav__link" to="/">Главная</router-link>
        <router-link class="nav__link" to="/publication1">Статья</router-link>
        <router-link class="nav__link" to="/abstract">Автореферат</router-link>
        <router-link class="nav__link" to="/chapter1">Глава 1</router-link>
        <router-link class="nav__link" to="/chapter2">Глава 2</router-link>
        <router-link class="nav__link" to="/chapter3">Глава 3</router-link>
        <router-link class="nav__link" to="/chapter4">Глава 4</router-link>
    </div>
</template>

<script>
  export default {
    name: 'Navigation'
  }
</script>

<style scoped>
    .nav {
        font-family: "Ubuntu", sans-serif;
        font-size: 14px;
        text-transform: uppercase;
        position: fixed;
        width: 100%;
        background-color: #41b883;
        top: 0;
        left: 0;
    }
    .nav__link {
        color: white;
        padding: 10px;
        display: inline-block;
    }
    .nav__link:hover {
        color: #99ffcf;
    }
</style>
