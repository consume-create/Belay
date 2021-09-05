<template>
  <section class="header-wrapper">
      <div class="header-image">
        <div class="image__inner-header" :style="{paddingBottom: img1.height / img1.width * 100 + '%'}"/>
        <ResponsiveImage :src="`${img1.src}`" :alt="`${img1.alt}`" lazy />
    </div>
    <!-- <div class="header-image-blue">
      <div class="image__inner-header-blue" :style="{paddingBottom: img2.height / img2.width * 100 + '%'}"/>
      <ResponsiveImage :src="`${img2.src}`" :alt="`${img2.alt}`" lazy />
  </div> -->
 </section>
</template>

<script>
import ResponsiveImage from "~/components/responsive-image";
  export default{
    components: {
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
      img2:
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
.header-wrapper{
  .header-image {
    position: relative;
    width: span(12);
    margin: 0 auto;
    // display: none;

    img {
      @include abs-fill;
    }
  }

    // .header-image-blue {
    //   position: relative;
    //   width: span(6);
    //   margin: 0 auto;
    //   display: block;
    //
    //   img {
    //     @include abs-fill;
    //
    //   }
    // }
  }

  @include respond-to($tablet) {
    .header-wrapper{
      .header-image {
          width: span(8);
          // display: block;
      }
      // .header-image-blue {
      //     width: span(4);
      //     display: none;
      // }
    }
  }

  @include respond-to($desktop) {
  .header-wrapper{
    .header-image {
        width: span(8);
        // display: block;
    }
    // .header-image-blue {
    //     width: span(4);
    //     display: none;
    // }
  }


  }

</style>
