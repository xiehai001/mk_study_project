<template>
  <div id="app">
    <s-header></s-header>
    <router-view></router-view>
    <s-footer></s-footer>
  </div>
</template>
<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'app',
  components: {
    SHeader: Header,
    SFooter: Footer
  }
}
</script>
<style lang="scss">
@import "assets/layui/css/layui.css";
@import "assets/css/global.css";
@import "assets/layui/css/modules/layer/default/layer.css";
</style>
