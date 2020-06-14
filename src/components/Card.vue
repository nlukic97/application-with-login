<template>
  <div class="box">
    <h2>{{title}}</h2>
    <div class="imageContainer">
      <img v-bind:src="carImage" v-bind:alt="title"> <!-- whatever the title is in the api, will be the alt -->
    </div>
    <p><span>Price: </span> {{price}}</p>
    <p><span>Year: </span> {{year}}</p>
    <p><span>About: </span> {{description}}</p>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props:{
    title: String,
    carImage: String,
    price: String,
    year: String,
    description: String
  }
}
</script>
<style lang="scss">
.box {
  box-sizing: border-box;;
  // border:1px solid #333;
  box-shadow: 0 0 7px rgb(102, 114, 105);
  width:400px;
  min-height:485px;
  margin: 0 15px 50px 15px;
  padding:15px;
  .imageContainer {
    height:195px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    text-align: left;
    width:80%;
    margin:15px auto;
    span {
    font-weight: bold;
    }
  }
  img {
  width:90%;
  }
}
</style>