<template>
  <div class="admin">
    <h1>Cars</h1>
    <div class="cars-display">
        <Card v-for="(carObj, index) in cars" v-bind:key="index" v-bind:title='carObj.title' v-bind:price="carObj.price" v-bind:year="carObj.year" v-bind:carImage="carObj.url" v-bind:description="carObj.description"/>
      </div>    
  </div>
</template>
<script>
import Card from '@/components/Card.vue'
export default {
  name: 'basic-user',
  components: {
    Card
  },
  data(){
    return {
      textColor:'black', // I do not know how to change this from the app
      cars:[
        {
          title:"Ferarri",
          price: '£265.000',
          year:'2020',
          url:'https://api.ferrarinetwork.ferrari.com/v2/network-content/medias/resize/5d371735c3f9ec0af647572d-ferrari_488pista_intro_socialshare?apikey=9QscUiwr5n0NhOuQb463QEKghPrVlpaF&width=1080',
          description:'Lorem 1 ipsum dolor sit amet consectetur adipisicing elit. Totam suscipit ex exercitationem inventore excepturi, sequi nam impedit neque non alias?'
        },
        {
          title:"Lamborghini",
          price: '£200.000',
          year:'2017',
          url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Lamborghini_Sian_at_IAA_2019_IMG_0332.jpg',
          description:'Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Totam suscipit ex exercitationem inventore excepturi, sequi nam impedit neque non alias?'
        },
        {
          title:"Tesla Cybertruck",
          price: '£312.000',
          year:'2018',
          url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-tesla-cyber-truck-mmp-1-1579127142.jpg',
          description:'Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Totam suscipit ex exercitationem inventore excepturi, sequi nam impedit neque non alias?'
        }
      ]
    }
  }
}
</script>
<style>
  .cars-display {
    display:flex;
    justify-content: center;
    align-items:baseline;
    flex-wrap: wrap;
    margin:0 auto;
  }
</style>