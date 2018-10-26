<template>
    <div class="wrapper">
      <swiper :options="swiperOption" class="swper-options">
        <swiper-slide class="swiper-wrapper" v-for="page,index in pagers" :key="index">
          <div class="item-wrapper" v-for="item,index in page" :key="index">
            <img class="item-img" :src="item.imgUrl" alt="">
            <div class="item-content">{{item.desc}}</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
  require('swiper/dist/css/swiper.css')
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name: "HomeIcons",
    props:['list'],
    computed:{

      pagers(){
        //每页8个
        let pageLimit = 8;
        //数组长度
        let length = this.list.length;
        //页数
        let page = (length+pageLimit-1)/pageLimit;
        //向下取整
        page = parseInt(page);
        //存放分页数据
        let result=[];
        for (let i = 0; i < page; i++) {
           let arr= this.list.slice(i*pageLimit,(i+1)*pageLimit);
          result.push(arr)
        }
        return result
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    data(){
      return {
        swiperOption: {
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .wrapper
    margin-top -4px
    .swper-options
      display flex
      flex-wrap wrap
      .swiper-wrapper
        display flex
        flex-wrap wrap
        margin-top 4px
        .item-wrapper
          width 25%
          text-align center
          .item-img
            width 70px
            height 70px
          .item-content
            background blue
</style>
