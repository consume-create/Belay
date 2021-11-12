<template>
  <div class="outer">
    <Carousel
      :images="[
        {
          src: 'carousel/flora.jpg',
          alt: 'A picture of a commercial building',
          width: '3783',
          height: '4146',
          className: 'first',
          objectPosition: '50% 50%',
          title: 'FLORA', 
          date: '2021'
        },
        {
          src: 'carousel/popdenver.jpg',
          alt: 'A picture of a commercial building',
          width: '3251',
          height: '3084',
          className: 'first',
          objectPosition: '50% 70%',
          title: 'POP DENVER',
          date: '2022'
        },
        {
          src: 'carousel/tennyson.jpg',
          alt: 'A picture of a commercial building',
          width: '4750',
          height: '5632',
          className: 'first',
          objectPosition: '50% 70%',
          title: 'THE TENNYSON',
          date: '2023'
        },
          {
          src: 'carousel/sunny-side.jpeg',
          alt: 'A picture of a commercial building',
          width: '640',
          height: '480',
          className: 'first',
          objectPosition: '50% 100%',
          title: 'SUNNYSIDE',
          date: '2023'
        },
          {
          src: 'carousel/condor.jpeg',
          alt: 'A picture of a commercial building',
          width: '320',
          height: '213',
          className: 'first',
          objectPosition: '50% 100%',
          title: 'CONDOR',
          date: '2023'
        },
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
        src: 'property-types/iconset-horizontal.png',
        alt: 'a 5 by 3 grid of illustrations of different building types',
        width: '2880',
        height: '1670'
      }"
      :img2="{
          src: 'property-types/iconset-vertical-update.png',
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
// import EmailCta from '~/components/email-cta';

export default {
  components: {
    Carousel,
    About,
    PropertyTypes,
    Tagline,
    Footer,
    // EmailCta,
  }
}
</script>

<style lang="scss">
@import "~/assets/styles/reset.scss";
@import "~/assets/styles/app.scss";
</style>
