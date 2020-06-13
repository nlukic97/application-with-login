<template>
  <div class="home">
    <div class="for">
      <div class="left">
        <h3>Login</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, qui.</p>
      </div>
      <div class="right">
        <label for="email">Email</label>
        <input id="email" v-model="inputEmail" type="text">
        <div id="passGroup">
          <label for="pass">Password</label>
          <button @click="changeVisibility" id="eyeBtn"><i v-bind:class="eye"></i></button>
        </div> 
        <input id="pass" v-model="inputPass" v-bind:type="visible" v-on:keyup.enter="validate">
        <div v-if="hasError">{{error}}</div>
        <button v-on:click="validate" id="loginBtn">Log in</button>
      </div>
    </div>
    <p>email: <u>show@cars.com</u> | pass: <u>secret</u></p>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  data: function(){ //ubacis ovde ovako da vracas data
    return {
      email: 'show@cars.com',
      pass:'secret',
      inputEmail:'',
      inputPass:'',
      visible: 'password',
      eye: 'fas fa-eye',
      error:'The credentials are not correct.',
      hasError: false
    }
  },
  methods: {
    changeVisibility: function(){
      if(this.visible === 'password'){
        this.visible = 'text';
        this.eye = 'fas fa-eye-slash';
      } else {
        this.visible = 'password';
        this.eye = 'fas fa-eye';
      }
    },
    validate: function(){
      if(this.inputEmail === this.email && this.inputPass === this.pass){
        //this.hasError = false;
        this.$router.push({path: '/basic_user'}) //ovim definises na koji view da te posalje. Mora this jer nije pozvan na ovom elementu. Mora ovako
        alert('Validation successful');
      } else {
        this.hasError = true;
      }
    }
  }
}
</script>
<style lang="scss" scoped> //ako pise scoped, onda je vezano samo za sve sto je za ovu komponentu
  .home{
    font-family: 'Trebuchet MS';
    .for {
      width:50%;
      margin: 0 auto;
      display:flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      transition: 1s width;
      .left {
        background-color: #fff;
        display: flex;
        justify-content: center;
        flex-direction: column;
        width:50%;
        height:160px;
        text-align: left;
        transition: 1s height;
        h3 {
          margin:0;
          padding:0 40px;
          font-size:30px;
          color:#000;
        }
        p {
          margin:0;
          padding:15px 40px 0 40px;
          font-size:15px;
          color:rgb(177, 174, 174);
        }
      }
      .right {
        border-radius: 5px;
        box-shadow: 0 0 15px #32475C;
        width:50%;
        height:280px; 
        text-align: left;
        background-color:#32475C;
        color:#abb8c3;
        transition: 1s height;
        input {
          font-size:15px;
          font-weight: normal;
          display:block;
          background-color:#32475C;
          width:69%; //zasto ovde ide 69 %, iako je ostalo sve 70% ?
          margin: 5px auto 0 auto;
          padding:8px 10px;
          color:#d2e2f0;
          border:none;
          outline:none;
          box-shadow: 0px 0px 3px rgb(69, 97, 126); //kako ovo ?
          transition: 0.3s box-shadow;
          &:hover{
            box-shadow: 0px 0px 5px rgb(95, 134, 173);
          }
          &:focus, &:active {
            outline:none;
            background-color:#32475C;
            box-shadow: 0px 0px 6px 0px;
          }
          &:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus { //still an issue on autocomplete
          border: none;
          -webkit-text-fill-color: red;
          -webkit-input-fill-background-color:red;
          //-webkit-box-shadow: none;
          }
        }
        label{
          font-size: 14px;
          &[for="email"] {
          display:block;
          margin:40px auto 0 auto;
          width:75%;
          }
          &[for="pass"] {
            display:inline;
          }
          &:hover {
            cursor: pointer;
          }
        }
        div { //warning message
          width:75%;
          margin: 0 auto;
          &#passGroup { //password + eye button
          margin:15px auto 0 auto;
          width:75%;
          }
        }
        button {
          transition: 0.4s box-shadow;
          &#eyeBtn {
            color:#fff;
            background-color:rgba(0,0,0,0);
            border:none;
            outline:none;
            border-radius: 50%;
            font-size:18px;
            margin-left:5px;
          }
          &#loginBtn { //id za login dugme
            display:block;
            width:75%;
            margin: 20px auto 0 auto;
            padding: 15px 0;
            &:hover {
              box-shadow: 0px 0px 5px #fff;
            }
          }
          &:hover {
            cursor:pointer;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 860px) { 
  .home {
    .for {
      width:80%;
      transition:1s width;
      .right {
        height:300px;
        transition: 1s height;
      }
      .left {
        height:200px;
        transition: 1s height;
      }
    }
  }
}
  @media only screen and (max-width: 673px) {
  .home {
    .for {
      width:95%;
      transition:1s width;
      .right {
        height:300px;
        transition: 1s height;
      }
      .left {
        height:200px;
        transition: 1s height;
      }
    }
  }
}
@media only screen and (max-width: 350px) {
  .home {
    .for {
      width:95%;
      transition:1s width;
      .right {
        height:310px;
        transition: 1s height;
      }
      .left {
        height:250px;
        transition: 1s height;
      }
    }
  }
}

</style>
