<template>
    <div>
      <div class="wrapper" ref="wrapper">
        <div class="content">
          <div class="section">当前城市</div>
          <div class="cur-wrapper">
            <div class="cur-city">深圳</div>
          </div>


          <div class="section">热门城市</div>
          <div class="hot-wrapper">
            <div class="hot-city" v-for="item,index in hotCities" :key="index"
                 @click="cityClick(item.name)">{{item.name}}</div>
          </div>


          <div class="item-wrapper" v-for="section,key,index in cities" :key="index" :ref="key">
            <div class="section">{{key}}</div>
            <div class="item-title" v-for="item,index in section" :key="index"
                 @click="cityClick(item.name)">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="letter-wrapper">
        <div class="letter" v-for="item,index in letters" @click="handLetterClick(item)"
             @touchmove="handTouchMove" :ref="index">{{item}}
        </div>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "CityList",
    props:['cities','hotCities'],
    mounted() {
      // const wrapper = document.querySelector('.wrapper')
      let wrapper = this.$refs.wrapper;
      this.scroll = new BScroll(wrapper,{
        click:true
      })
    },
    computed: {
      letters() {
        let arr = []
        for (let key in this.cities) {
          arr.push(key)
          // let value = this.cities[key]
        }
        return arr
      }
    },
    methods: {
      cityClick(name){
        this.$store.commit('changeCity',name);
        this.$router.push('/')
      },
      handLetterClick(letter) {
        // let person = {'name':'zhangsan '}
        // person.name
        // person['name']
        //跳转到指定的条目
        this.scroll.scrollToElement(this.$refs[letter][0])
      },
      handTouchMove(e){
        //A字母对应的y值
        let aEle = this.$refs[0][0];
        //a最上面的y值
        let startY = aEle.offsetTop+110;
        //手指的Y值
        let fingerY = e.touches[0].clientY;
        //每一行行高
        let heightLimit = 20;
        //求index
        let index = parseInt((fingerY-startY)/heightLimit);
        //处理越界
        if(index<0){
          index = 0
        }else if(index>this.letters.length-1){
          index = this.letters.length-1
        }

        //跳转的字母
        let letter = this.letters[index];
        //跳转
        this.scroll.scrollToElement(this.$refs[letter][0])
      }
    }
  }
</script>

<style scoped lang="stylus">
  .wrapper
    position absolute
    top 110px
    bottom 0px
    left 0px
    right 0px
    z-index 1
    .content
      .section
        background-color #eee
        padding 12px
        font-size 18px
        color #666
      .cur-wrapper
        padding 20px
        .cur-city
          border solid 1px #ccc
          width fit-content
          padding-left 20px
          padding-right 20px
          padding-top 5px
          padding-bottom 5px
          border-radius 4px
      .section
        background-color #eee
        padding 12px
        font-size 18px
        color #666
      .hot-wrapper
        padding 20px
        display: flex
        flex-wrap wrap
        .hot-city
          margin-left 20px
          border solid 1px #ccc
          margin-top 10px
          width fit-content
          padding-left 20px
          padding-right 20px
          padding-top 5px
          padding-bottom 5px
          border-radius 4px
      .item-wrapper
        .section
          background-color #eee
          padding 12px
          font-size 18px
          color #666
        .item-title
          border-bottom solid 1px #eee
          color #666
          padding 10px

  .letter-wrapper
    position fixed
    z-index 2
    right 0px
    bottom 0px
    top 110px
    .letter
      font-size 14px
      height 20px
      padding 6px
</style>
