<template>
  <div class="wrapper">
    <div class="header-wrapper">
      <span class="back iconfont icon-fanhui"></span>
      <div class="input-wrapper">
        <span class="search iconfont icon-sousuo"></span>
        <input type="text" class="input-content" placeholder="请输入城市/景点/主题">
      </div>
      <div class="city-wrapper" @click="toCity">
        <span class="down-word">深圳</span>
        <span class="down iconfont icon-xiala"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeHeader",
    methods: {
      toCity() {
        this.$router.push('/city')
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "../../assets/stylus/variables.styl"
  .wrapper
    .header-wrapper
      background #525cff
      height $HeaderHeight
      display flex
      justify-content space-between
      align-items center
      .back
        margin-left 4px
        font-size 24px
        color white
      .input-wrapper
        border 1px solid #fff
        border-radius 4px
        padding 4px
        display flex
        align-items center
        background white
        flex 1
        margin-left 10px
        margin-right 10px
        .search
          font-size 24px
          color #ccc
        .input-content
          outline none
          height 25px
          border 0
          flex 1
      .city-wrapper
        margin-right 4px
        .down-word
          color white
          font-size 24px
        .down
          font-size 24px
          color white
</style>
