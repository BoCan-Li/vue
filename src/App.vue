<template>
  <div id="app">
    <a-button>button</a-button>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/user">user</router-link> |
      <router-link to="/form">basic-form</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
