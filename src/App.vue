<template>
  <div id="app">
    <Header/>
    <ButtonTop/>
    <HamMenu v-if="dataShared.hamMenuOpen"/>
    <Main/>
    <Footer/>
  </div>   
</template>

<script>
import HamMenu from './components/elements/HamMenu.vue'
import ButtonTop from './components/elements/ButtonTop.vue'
import Header from './components/macro/Header.vue'
import Main from './components/macro/Main.vue'
import Footer from './components/macro/Footer.vue'
import dataShared from './sharing/dataShared'


export default {
  name: 'App',
  components: {
    Header,
    ButtonTop,
    HamMenu,
    Main,
    Footer
  },
  data() {
    return {
      dataShared,
    }
  },
}
</script>

<style lang="scss">
  @import './assets/style/global.scss';
  @import './assets/style/_variables.scss';

</style>
