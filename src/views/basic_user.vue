<template>
  <div class="admin">
    <router-link to="/">Log out</router-link>
    <h1>Hello, <u>basic user</u>.</h1>
    <p>Have a nice day !</p>
    <Navigation/>
    <Card v-bind:title='this.cars[0].title' v-bind:price="this.cars[0].price" v-bind:carImage="this.cars[0].url"/>
    <Card v-bind:title='this.cars[1].title' v-bind:price="this.cars[1].price" v-bind:carImage="this.cars[1].url"/>
    <Card v-bind:title='this.cars[2].title' v-bind:price="this.cars[2].price" v-bind:carImage="this.cars[2].url"/>
  </div>
</template>
<script>
import Navigation from '@/components/Navigation.vue'
import Card from '@/components/Card.vue'
export default {
  name: 'basic-user',
  components: {
    Navigation,
    Card
  },
  data(){
    return {
      cars:[
        {
          title:"car nummer 1",
          price: '£1000',
          url:'https://api.ferrarinetwork.ferrari.com/v2/network-content/medias/resize/5d371735c3f9ec0af647572d-ferrari_488pista_intro_socialshare?apikey=9QscUiwr5n0NhOuQb463QEKghPrVlpaF&width=1080'
        },
        {
          title:"car nummer 2",
          price: '£2000',
          url: 'https://live.staticflickr.com/8682/16105614840_4b3fb5a981_b.jpg'
        },
        {
          title:"car nummer 3",
          price: '£3000',
          url: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Zastava_Jugo_45_F.jpg'
        }
      ]
    }
  }
}
</script>
<style>

</style>