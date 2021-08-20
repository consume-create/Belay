<template>
  <section class="carousel">
    <Header class="logo"
    :img1="{
            src: 'header/belay-dev-logo-WHITE.png',
            alt: 'The Belay logo',
            width: '501',
            height: '216'
          }"/>
    <div class="carousel-wrapper">
      <div class="carousel-image">
        <div class="image__inner-carousel" :style="{paddingBottom: img1.height / img1.width * 100 + '%'}"/>
          <ResponsiveImage :src="`${img1.src}`" :alt="`${img1.alt}`" lazy />
      </div>
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
  // background-color: $dark-blue;
  position: relative;
  .logo{
    // margin-bottom: span(1);
    position: absolute;
    z-index: 2;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    // left: 45%;
  }

  .carousel-wrapper{
    .carousel-image{
      width: span(28);
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
}




@include respond-to($tablet) {


}

@include respond-to($desktop) {

}

</style>
