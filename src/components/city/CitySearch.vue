<template>
  <div class="wrapper">
    <div class="input-wrapper">
      <span class="search iconfont icon-sousuo"></span>
      <input type="text" class="input-content" placeholder="请输入城市/景点/主题">
    </div>
  </div>
</template>

<script>
    export default {
        name: "CitySearch"
    }
</script>

<style scoped lang="stylus">
  @import "../../assets/stylus/variables.styl"
  .wrapper
    background #525cff
    height $HeaderHeight
    position absolute
    top 55px
    left 0px
    right 0px
    display flex
    justify-content space-between
    align-items center
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

</style>
