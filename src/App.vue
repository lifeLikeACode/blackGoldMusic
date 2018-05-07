<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      test: 'this is a this'
    }
  },
  methods: {
    getApiSerach () {
      this.$axios({
        url: '/search',
        method: 'GET',
        params: {
          keywords: '海阔天空'
        }
      }).then((res) => {
        console.log(res)
      })
    }
  },
  mounted () {
    this.getApiSerach()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
