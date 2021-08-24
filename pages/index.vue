<template>
  <div class="outer">
    <Carousel
      :img1="{
          src: 'carousel/building1.png',
          alt: 'A picture of a commercial building',
          width: '1572',
          height: '1348'
        }"/>

    <About
    :img1="{
        src: 'about/small-block.png',
        alt: 'A small cube ',
        width: '159',
        height: '175',
      }"
      :img2="{
        src: 'about/medium-block.png',
        alt: 'A medium cube',
        width: '665',
        height: '474',
      }"
      :img3="{
        src: 'about/large-block.png',
        alt: 'a large cube',
        width: '1440',
        height: '1096',
      }"/>
    <PropertyTypes
    :img1="{
        src: 'property-types/icon-set.png',
        alt: 'A picture of a commercial building',
        width: '2880',
        height: '1670'
      }"
      />
      <Tagline/>
    <Footer
    :img1="{
        src: 'footer/footer-big-block.png',
        alt: 'A medium cube',
        width: '633',
        height: '384',
      }"
    :img2="{
        src: 'footer/footer-small-block.png',
        alt: 'A small cube',
        width: '168',
        height: '118',
      }"
      />
  </div>
</template>

<script>
import Carousel from '~/components/carousel';
import About from '~/components/about';
import PropertyTypes from '~/components/property-types';
import Tagline from '~/components/tagline';
import Footer from '~/components/footer';

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
