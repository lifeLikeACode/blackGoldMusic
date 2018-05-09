<template>
  <div class="recommand-content">
    <div ref="wrapper" >
      <div>
        <div :key="index" class="recommand-item"  v-for="(recommand, index) in recommandList">
          <img :src="recommand.album.picUrl">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import { ERR_OK } from '../../common/js/config'
import api from '../../api/index'
export default {
  props: {
  },
  data () {
    return {
      recommandList: []
    }
  },
  methods: {
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
    },
    _initScroll () {
      this.scrollLeft = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click
      })
    }
  },
  mounted () {
    this._login()
    setTimeout(() => {
      this._initScroll()
    }, 20)
  }
}
</script>
<style lang="stylus">
  .recommand-content
    width 100%
    height 100%
    .recommand-item
      float left
      width 80px
      height 80px
      img
        width 100%
        height 100%
</style>
