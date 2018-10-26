<template>
    <div>
      <city-header></city-header>
      <city-search></city-search>
      <city-list :cities="cities" :hotCities="hotCities"></city-list>
    </div>
</template>

<script>
  import CityHeader from './CityHeader'
  import CitySearch from './CitySearch'
  import CityList from './CityList'
  const axios = require('axios');
  export default {
    name: "City",
    components:{
      CityHeader,
      CitySearch,
      CityList
    },
    data(){
      return{
        cities:[],
        hotCities:[]
      }
    },
    mounted(){
      axios.get('../../static/mock/city.json').then((response)=> {
        this.cities = response.data.data.cities
        this.hotCities = response.data.data.hotCities
      })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
</script>

<style scoped lang="stylus">

</style>
