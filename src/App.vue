<template>
  <div id="application">
     <router-view/>
     <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
  name: 'App',
  components: {
    //可以简写：FooterGuide
    FooterGuide:FooterGuide,
  },
  methods:{
    
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#application
    width:100%
    height: 100%
    background-color: #fff
</style>>


