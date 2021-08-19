<template>
  <div class="outer">
    <Header
    :img1="{
            src: 'header/belay-dev-logo-WHITE.png',
            alt: 'The Belay logo',
            width: '501',
            height: '216'
          }"/>
    <Carousel/>
    <About/>
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/header'
import Carousel from '~/components/carousel'
import About from '~/components/about'
import Footer from '~/components/footer'

export default {
  components: {
    Header,
    Carousel,
    About,
    Footer
  }
}
</script>



<style lang="scss">
@import "~/assets/styles/reset.scss";
@import "~/assets/styles/app.scss";



</style>
