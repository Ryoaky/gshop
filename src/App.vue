<template>
  <div id="app">
    <router-view/>
    <FootGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FootGuide from './components/FooterGuide/FootGuide'
export default {
  name: 'App',
  components: {
    FootGuide
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus">
  .app
    width: 100%
    height: 100%
    background #f5f5f5

</style>
