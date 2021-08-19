<template>
  <section class="about">
    <div class="small-block">
      <div class="image__inner-small" :style="{paddingBottom: img1.height / img1.width * 100 + '%'}"/>
      <ResponsiveImage :src="`${img1.src}`" :alt="`${img1.alt}`" lazy />
    </div>

    <div class="text-box">
      <h3 class="title-upper">Our Angle </h3>
      <h5 class="subtitle">About Us</h5>
      <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt quis urna non facilisis. Donec sit amet faucibus dui, mattis fringilla odio. Ut sem metus, placerat vitae tortor in, pharetra pulvinar mauris. Aliquam erat volutpat.</p>
    </div>

    <div class="medium-block">
      <div class="image__inner-medium" :style="{paddingBottom: img1.height / img1.width * 100 + '%'}"/>
      <ResponsiveImage :src="`${img2.src}`" :alt="`${img2.alt}`" lazy />
    </div>

    <div class="large-block">
      <div class="image__inner-large" :style="{paddingBottom: img1.height / img1.width * 100 + '%'}"/>
      <ResponsiveImage :src="`${img3.src}`" :alt="`${img3.alt}`" lazy />
    </div>

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
      img3:
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
  .about{
    padding: 0;
    position: relative;
    .text-box {
      text-align: left;
      // right: 60%;
      padding-right: span(12);
      z-index: 1;

      .title-upper{
        margin-bottom: $margin-small;
      }
      .subtitle{
        margin-bottom: $margin-extra-large;
      }
      .text{
      }
    }

    .small-block {
      position: relative;
      width: span(4);
      left: 30%;
      margin: 0 auto;
      z-index: 2;

      img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
      }
    }

    .medium-block {
      position: relative;
      width: span(6);
      margin: 0 auto;
      z-index: 3;
      margin-top: -span(10);

      img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
      }
    }

    .large-block {
      position: relative;
      width: span(28);
      margin: 0 auto;
      margin-top: -span(20);
      z-index: 4;

      img {
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
