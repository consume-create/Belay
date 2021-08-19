<template>
  <div class="outer">
    <Carousel
      :img1="{
          src: 'carousel/building1.png',
          alt: 'A picture of a commercial building',
          width: '1572',
          height: '1348'
        }"/>
    <About/>
    <PropertyTypes
    :img1="{
        src: 'property-types/IconSet.png',
        alt: 'A picture of a commercial building',
        width: '1920',
        height: '1080'
      }"/>
      <Tagline/>
    <Footer/>
  </div>
</template>

<script>
import Carousel from '~/components/carousel'
import About from '~/components/about'
import PropertyTypes from '~/components/property-types'
import Tagline from '~/components/Tagline'
import Footer from '~/components/footer'

export default {
  components: {
    Carousel,
    About,
    PropertyTypes,
    Tagline,
    Footer,
  }
}
</script>



<style lang="scss">
@import "~/assets/styles/reset.scss";
@import "~/assets/styles/app.scss";



</style>
