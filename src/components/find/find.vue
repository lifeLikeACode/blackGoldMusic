<template>
  <div class="find">
    <scroll :data="recommandList" ref="scroll" class="find-content">
      <div>
        <div class="slider-wrapper" v-if="bannerList.length" ref="sliderWrapper">
          <div class="slider-content">
            <slider>
              <div :key="index" class="slider-item"  v-for="(banner, index) in bannerList">
                  <a :href="banner.url">
                      <img :src="banner.picUrl">
                  </a>
              </div>
            </slider>
          </div>
        </div>
        <div class="slider-recommand">
          <div class="recommand-head"><span class="recommand-title">Recommand</span><span class="more">more&nbsp;&gt;</span></div>
          <div class="recommand-content">
            <scroll>
              <div>
                <div :key="index" class="recommand-item"  v-for="(recommand, index) in recommandList">
                  <img :src="recommand.album.picUrl">
                </div>
              </div>
            </scroll>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>
<script>
import slider from '../../base/slider/slider'
import scroll from '../../base/scroll/scroll'
import { ERR_OK } from '../../common/js/config'
import api from '../../api/index'
export default {
  data () {
    return {
      bannerList: [],
      recommandList: []
    }
  },
  components: {
    scroll,
    slider
  },
  methods: {
    getBanner () {
      this.$axios({
        url: '/banner',
        methods: 'GET'
      }).then((res) => {
        if (res.data.code === ERR_OK) {
          this.bannerList = res.data.banners
        }
      })
    },
    _login () {
      if (document.cookie) {
        this._getRecommand()
      } else {
        api.getLoginCellphoneResource('18358726842', 'wobuainiQQ13579').then((res) => {
          if (res.data.code === ERR_OK) {
            this._getRecommand()
          }
        })
      }
    },
    _getRecommand () {
      api.getRecommendSongsResource().then((res) => {
        if (res.data.code === ERR_OK) {
          this.recommandList = res.data.recommend
        }
      })
    }
  },
  mounted () {
    this.getBanner()
    this._login()
  }
}
</script>
<style lang='stylus'>
    @import '~common/stylus/variable'
    .find
        position fixed
        top 44px
        width 100%
        height 100%
        background  $color-background
        .find-content
          height 100%
          overflow hidden
          .slider-wrapper
              position relative
              width 96%
              height 0
              padding-top 43.6%
              margin 12px auto
              overflow hidden
              border-radius 10px
              // box-shadow 0px 6px 11px 0px rgba(135,188,65,0.2)
              .slider-content
                position absolute
                top 0
                left 0
                width 100%
                height 100%
                overflow hidden
                border-radius 10px
                .slider-item
                  float: left
                  box-sizing: border-box
                  overflow: hidden
                  text-align: center
                  a
                    display inline-block
                    img
                      width 100%
                      height 100%
          .slider-recommand
            width 96%
            margin 12px auto
            .recommand-head
              display flex
              justify-content space-between
              .recommand-title
                font-size $font-size-medium-x
                color $color-text
                font-weight bolder
              .more
                color $color-theme
                font-weight bold
            .recommand-content
              .recommand-item
                width 80px
                height 80px
                float left
                img
                  width 100%
                  height 100%
</style>
