<template>
  <div id="app">
    <vhead></vhead>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import vhead from '@/components/common/head/head'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    vhead
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style>
</style>
