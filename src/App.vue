<template>
  <div id="app">
    <MainLayout />
  </div>
</template>
<script>
import MainLayout from "./layouts/MainLayout.vue";
export default {
  components: {
    MainLayout,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,
body {
  margin: 0;
  padding: 0;
  background: #e2e2e2;
}
</style>
