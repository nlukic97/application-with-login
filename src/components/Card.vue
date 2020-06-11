<template>
  <div>
    <h1>{{title}}</h1>
    <img v-bind:src="carImage" alt=""> <!-- jel ovo ovako okay ? Pogledati basic_user za vise informacija -->
    <p>Price: {{price}}</p>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props:{
    title: String,
    carImage: String,
    price: String
  }
}
</script>
<style lang="scss" scoped>
img {
  max-width:30%;
}
</style>