<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommand :list="recommendList"></home-recommand>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
  import HomeHeader from './HomeHeader'
  import HomeSwiper from './HomeSwiper'
  import HomeIcons from './HomeIcons'
  import HomeRecommand from './HomeRecommand'
  import HomeWeekend from './HomeWeekend'
  const axios = require('axios');

  export default {
    name: "Home",
    data(){
      return{
        swiperList:[],
        iconList:[],
        recommendList:[],
        weekendList:[]
      }
    },
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommand,
      HomeWeekend
    },
    mounted(){
      axios.get('../../static/mock/index.json').then((response)=> {
        this.swiperList= response.data.data.swiperList;
        this.iconList=response.data.data.iconList;
        this.recommendList=response.data.data.recommendList;
        this.weekendList=response.data.data.weekendList
      })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
</script>

<style scoped lang="stylus">

</style>
