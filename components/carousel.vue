<template>
  <section class="carousel">
    <Header class="logo"
    :img1="{
            src: 'header/belay-dev-logo-WHITE.png',
            alt: 'The Belay logo',
            width: '501',
            height: '216'
          }"/>
    <div class="carousel-image">
      <div class="image__inner-carousel" :style="{paddingBottom: img1.height / img1.width * 100 + '%'}"/>
        <ResponsiveImage :src="`${img1.src}`" :alt="`${img1.alt}`" lazy />
    </div>
  </section>
</template>


<script>
import Header from '~/components/header';
import ResponsiveImage from "~/components/responsive-image";
  export default{
    components: {
      Header,
      ResponsiveImage
    },
    props: {
      img1:
      {
        type: Object,
        default: () => {
          return {
            src: "",
            alt: "",
            height: "",
            width: ""
          }
        }
      },
    },

  }

</script>

<style lang="scss">

.carousel{
  // padding: span(8) span(4);
  background-color: $dark-blue;

  .logo{
    margin-bottom: span(1);
  }

  .carousel-image{
    width: span(16);
    position: relative;
    margin: 0 auto;

    img{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
    }
  }
}




@include respond-to($tablet) {


}

@include respond-to($desktop) {

}

</style>
