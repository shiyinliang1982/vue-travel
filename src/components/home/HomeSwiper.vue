<template>
    <div>
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item,index in list" :key="index">
          <img style="width: 100%;"
            :src="item.imgUrl" alt="">
        </swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: "HomeSwiper",
    props:['list'],
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption:{
          pagination : '.swiper-pagination',
          loop:true,
          autoplay:2000,
          autoplayDisableOnInteraction: false
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  >>>.swiper-pagination-bullet-active
    background-color white

</style>
