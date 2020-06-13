<template>
  <div id="app" v-bind:class="lightMode">
    <div id="nav">
      <router-link to="/basic_user">Basic homepage</router-link> |
      <router-link to="/">Login page</router-link>
        <div class="lightModeContainer" v-on:click="lightModeSwitch">
          <div class="lightModeBtn" v-bind:class="this.currentLightMode"></div>
        </div>
    </div>
    
    <router-view/> <!-- ovde se prikazuje strana u zavisnosti od toga koja je ruta pozvana iz router view-a -->
  </div>
</template>
<script>
export default {
  name:'app',
  data: function(){
    return {
      currentLightMode:'brightMode'
    }
  },
  methods: {
    lightModeSwitch(){
      if(this.currentLightMode == 'brightMode'){
        this.currentLightMode = 'darkMode' //button animate
        this.lightMode = 'dark' //background
        console.log('it is dark')
      } else {
        this.currentLightMode = 'brightMode'
        console.log('it is bright') //button animate
        this.lightMode = 'light' //background
      }
    }
  }
}
</script>

<style lang="scss">
body {
  // background-color: #DFE0E3;
  margin:0;
  padding:0;
  height:100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  transition:1s background-color;
}

.lightModeContainer {
  width:70px;
  height:30px;
  background-color: white;
  border:1px solid #333;
  border-radius: 25px;
  position: relative;
  margin: 20px auto 0 auto;
}

.lightModeContainer:hover {
  cursor: pointer;
}

.lightModeBtn {
    content:'';
    height:25px;
    width:25px;
    background-color: rgb(51, 255, 0);
    border:1px solid #333;
    position: absolute;
    top:1px;
    border-radius: 50%;
    transition: 0.6s all;
  }

.brightMode  {
  left: 3px;
  transition: 0.6s all;
}
.darkMode  {
  left: 38px;
  transition: 0.6s all;
  background-color: #881ec5;
}

.dark {
  background-color:black;
}

.light {
  background-color:white;
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
