<template>
    <div>
      <div class="wrapper-title">周末去哪儿</div>

      <div class="inner-wrapper" v-for="item,index in list">
        <img class="inner-img" :src="item.imgUrl" alt="">
        <div class="inner-item">
          <div class="item-title">{{item.title}}</div>
          <div class="item-desc">{{item.desc}}</div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "HomeWeekend",
    props:['list']
  }
</script>

<style scoped lang="stylus">

</style>
