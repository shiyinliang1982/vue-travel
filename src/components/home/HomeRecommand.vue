<template>
  <div class="out-wrapper">
    <div class="wrapper-title">热销推荐</div>

    <div class="inner-wrapper" v-for="item,index in list">
      <img class="inner-img" :src="item.imgUrl" alt="">
      <div class="inner-item">
        <div class="item-title">{{item.title}}</div>
        <div class="item-desc">{{item.desc}}</div>
        <div class="item-btn">查看详情</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommand",
    props:['list'],

  }
</script>

<style scoped lang="stylus">
  .out-wrapper

    .wrapper-title
      background #eee
    .inner-wrapper
      display flex
      flex-wrap wrap
      .inner-img
        width 100px
        height 100px
      .inner-item
        margin-left 4px
        display flex
        flex-direction column
        justify-content center
        flex 1
        .item-title
          flex 1
        .item-desc
          flex 1
        .item-btn
          display flex
          justify-content center
          align-items center
          flex 1
          background #ff9300
          border-radius 4px
          width 100px


</style>
