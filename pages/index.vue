<template>
  <div class="outer">


    <Header/>
    <Carousel/>
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/header'
import Carousel from '~/components/carousel'
import Footer from '~/components/footer'
export default {
  components: {
    Header,
    Carousel,
    Footer
  }

}
</script>



<style lang="scss">
@import "~/assets/styles/reset.scss";
@import "~/assets/styles/app.scss";



</style>
