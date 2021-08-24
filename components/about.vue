<template>
  <section class="about">
    <div class="small-block-wrapper">
      <div class="small-block">
        <div class="image__inner-small" :style="{paddingBottom: img1.height / img1.width * 100 + '%'}"/>
        <ResponsiveImage :src="`${img1.src}`" :alt="`${img1.alt}`" lazy />
      </div>
    </div>

    <div class="text-box">
      <h3 class="title-upper">Our Angle </h3>
      <h6 class="subtitle">About Us</h6>
      <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt quis urna non facilisis. Donec sit amet faucibus dui, mattis fringilla odio. Ut sem metus, placerat vitae tortor in, pharetra pulvinar mauris. Aliquam erat volutpat.</p>
    </div>

    <div class="medium-block-wrapper">
      <div class="medium-block">
        <div class="image__inner-medium" :style="{paddingBottom: img2.height / img2.width * 100 + '%'}"/>
        <ResponsiveImage :src="`${img2.src}`" :alt="`${img2.alt}`" lazy />
      </div>
    </div>

    <div class="large-block-wrapper">
      <div class="large-block">
        <div class="image__inner-large" :style="{paddingBottom: img3.height / img3.width * 100 + '%'}"/>
        <ResponsiveImage :src="`${img3.src}`" :alt="`${img3.alt}`" lazy />
      </div>
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
  background-color: $deep-blue;
  color: $white;
  position: relative;
  height: span(20);

  .text-box {
    text-align: left;
    padding-right: span(12);
    top: 30%;
    left: 10%;
    z-index: 4;
    position: absolute;

    .title-upper{
      margin-bottom: $margin-small;
    }
    .subtitle{
      margin-bottom: $margin-extra-large;
      margin-top: $margin-extra-large;
    }
    .text{
    }
  }


  .small-block-wrapper{
    position: absolute;
    left: 70%;
    top: -8%;
    .small-block {
      position: relative;
      width: span(4);
      z-index: 3;

      img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
      }
    }
  }

.medium-block-wrapper{
  position: absolute;
  left: 10%;
  top: 2%;
  .medium-block {
    position: relative;
    width: span(12);
    z-index: 2;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
    }
  }
}

.large-block-wrapper{
  position: absolute;
  top: 25%;
  .large-block {
    position: relative;
    width: span(28);
    height: span(18);
    z-index: 1;
    img {
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
