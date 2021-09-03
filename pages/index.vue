<template>
  <div class="outer">
    <Carousel
      :images="[
        {
          src: 'carousel/building1.png',
          alt: 'A picture of a commercial building',
          width: '1572',
          height: '1348', 
          className: 'first',
          objectPosition: '50% 0%'
        },
        {
          src: 'carousel/building2.jpg',
          alt: 'A picture of a commercial building',
          width: '1280',
          height: '1920',
          className: 'second',
          objectPosition: '50% 40%'
        }
      ]"/>
    <About
    :img1="{
        src: 'about/small-block.svg',
        alt: 'A small cube ',
        width: '154',
        height: '170',
      }"
      :img2="{
        src: 'about/medium-block.svg',
        alt: 'A medium cube',
        width: '665',
        height: '474',
      }"
      :img3="{
        src: 'about/large-block.svg',
        alt: 'A large cube',
        width: '1440',
        height: '1096',
      }"/>
    <PropertyTypes
    :img1="{
        src: 'property-types/icon-set-2.png',
        alt: 'a 5 by 3 grid of illustrations of different building types',
        width: '2880',
        height: '1670'
      }"
      :img2="{
          src: 'property-types/icon-set-vertical.png',
          alt: 'a 2 by 7 grid of illustrations of different building types',
          width: '1152',
          height: '3892'
        }"
        />
      <Tagline/>
    <Footer
    :img1="{
        src: 'footer/footer-big-block.svg',
        alt: 'A medium cube',
        width: '618',
        height: '376',
      }"
    :img2="{
        src: 'footer/footer-small-block.svg',
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
