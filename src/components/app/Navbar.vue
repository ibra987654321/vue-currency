<template>
  <div id="nav">
    <router-link to="/">Convert</router-link>
    <router-link to="/currency">Currency</router-link>
  </div>
</template>
<style lang="scss" scoped>
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: rgb(207, 207, 207);
    text-decoration: none;
    margin: 10px;

    &.router-link-exact-active {
      color: #fff;
      transition: 0.3s;
    }
  }
}
</style>
