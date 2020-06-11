<template>
  <div id="app">
    <div id="nav">
      <router-link to="/basic_user">Basic homepage</router-link> | 
      <router-link to="/admin">Admin Homepage</router-link> | 
    </div>
    
    <router-view/> <!-- ovde se prikazuje strana u zavisnosti od toga koja je ruta pozvana iz router view-a -->
  </div>
</template>

<style lang="scss">
body {
  background-color: #DFE0E3;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
