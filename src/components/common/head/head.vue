<template>
    <div class="head">
        <div class="left">
            <router-link tag="div" to="/find">
                <span>Find</span>
            </router-link>
            <router-link tag="div" to="/album" >
                <span>Album</span>
            </router-link>
            <router-link tag="div" to="/mine" >
                <span>Mine</span>
            </router-link>
        </div>
        <div class="right">
            <span class="icon-search">搜索</span>
        </div>
    </div>
</template>
<script>
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import '~common/stylus/variable'
    .head
        box-sizing border-box
        position relative
        display flex
        justify-content space-between
        align-items center
        padding 0 16px
        width 100%
        height 44px
        box-shadow $box-shadow-theme
        background-color $color-background
        z-index 9
        .left
            display flex
            justify-content space-around
            align-items center
            height 44px
            font-size $font-size-medium-x
            color $color-text
            div
                span
                    margin-right 45px
                    line-height 42px
                &.router-link-active
                    span
                        font-weight bolder
                        padding-bottom 10px
                        border-bottom 2px solid $color-text
        .right
            font-size $font-size-medium-x
            font-weight bolder
            span
                color $color-text
</style>
