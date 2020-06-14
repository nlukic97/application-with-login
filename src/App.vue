<template>
  <div id="app" v-bind:class="cookieColorMode"> <!-- ne znam kako na ceo body da stavim -->
    <div id="nav">
      <router-link to="/basic_user">Basic homepage</router-link> |
      <router-link to="/">Login page</router-link>
        <div class="lightModeContainer" v-on:click="lightModeSwitch">
          <div class="lightModeBtn" v-bind:class="this.cookieButtonPosition"></div>
        </div>
    </div>
    
    <router-view/>
  </div>
</template>
<script>
export default {
  name:'app',
  data: function(){
    return {
      lightMode:'light', //default on load to generate cookie for cookieColorMode
      buttonPosition:'lightMode', //default on load to generate cookie for cookieButtonPosition
      cookieObj:null,
      cookieColorMode:null,
      cookieButtonPosition:null
    }
  },
  methods: {
    lightModeSwitch(){
      this.cookieObj = new this.$cookie
      if(this.cookieButtonPosition == 'lightMode'){
        //color scheme change
        this.cookieObj.create('colorMode','dark',10);
        this.cookieColorMode = this.cookieObj.read('colorMode')

        //button position change
        this.cookieObj.create('buttonPosition','darkMode',10);
        this.cookieButtonPosition = this.cookieObj.read('buttonPosition')
      } else {
        //color scheme change
        this.cookieObj.create('colorMode','light',10);
        this.cookieColorMode = this.cookieObj.read('colorMode')

        //button position change
        this.cookieObj.create('buttonPosition','lightMode',10);
        this.cookieButtonPosition = this.cookieObj.read('buttonPosition')
      }
    }
  },
  mounted(){
    this.cookieObj = new this.$cookie;

    this.cookieColorMode = this.cookieObj.read('colorMode')
    if(!this.cookieColorMode){
      this.cookieObj.create('colorMode',this.lightMode,10)
      this.cookieColorMode = this.cookieObj.read('colorMode') //setting the color to default light
    }

    this.cookieButtonPosition = this.cookieObj.read('buttonPosition')
    if(!this.cookieButtonPosition){
      this.cookieObj.create('buttonPosition',this.buttonPosition,10)
      this.cookieButtonPosition = this.cookieObj.read('buttonPosition') //setting the button to default light
    }
  }
}
</script>

<style lang="scss">
body {
  margin:0;
  padding:0;
  height:100%;
  //background-color:red; //kako da targetujem body da bih mogao da koristim :class="cookieColorMode" ?
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  transition:1s all;
  height:100%;
}

.lightModeContainer {
  width:70px;
  height:33px;
  background-color: white;
  border:1px solid rgba(51, 51, 51, 0.5);
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
    border:1px solid rgba(51, 51, 51, 0.479);
    position: absolute;
    top:3px;
    border-radius: 50%;
    transition: 0.6s all;
    box-shadow: 0 0 2px #333;
  }

.lightMode  {
  left: 5px;
  transition: 0.6s all;
}
.darkMode  {
  left: 38px;
  transition: 0.6s all;
  background-color: rgb(65, 187, 9);
}

.dark {
  background-color:black;
  color:#fff;
}

.light {
  background-color:white;
  color:#2c3e50;
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
