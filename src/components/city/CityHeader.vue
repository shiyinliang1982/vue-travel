<template>
    <div class="wrapper">
      <div class="header-wrapper">
        <span class="back iconfont icon-fanhui"></span>
        <div class="city-title">城市选择</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "CityHeader"
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
      .city-title
        color white
        height $HeaderHeight
        position absolute
        top 0
        left 0
        right 0
        display flex
        justify-content center
        align-items center
</style>
