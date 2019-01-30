<template>
  <div id="app">
    <div class="">
      <ul>
        <li><router-link :to="{ name: 'Home', params: {} }">Home</router-link></li>
        <li><router-link :to="{ name: 'About', params: {} }">About</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
