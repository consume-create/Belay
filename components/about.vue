<template>
  <section class="about">
    <div class="small-block-wrapper" v-event-horizon:parallax="{y: {from: 0, to: 700}}">
      <div class="small-block">
        <div class="image__inner-small" :style="{paddingBottom: img1.height / img1.width * 100 + '%'}"/>
        <ResponsiveImage :src="`${img1.src}`" :alt="`${img1.alt}`" lazy />
      </div>
    </div>

    <div class="small-block-wrapper-mobile" v-event-horizon:parallax="{y: {from: 0, to: 200}}">
      <div class="small-block-mobile">
        <div class="image__inner-small-mobile" :style="{paddingBottom: img1.height / img1.width * 100 + '%'}"/>
        <ResponsiveImage :src="`${img1.src}`" :alt="`${img1.alt}`" lazy />
      </div>
  </div>

    <div class="text-box">
      <h3 class="title-upper">Our Angle</h3>
      <h6 class="subtitle spread">About Us</h6>
      <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt quis urna non facilisis. Donec sit amet faucibus dui, mattis fringilla odio.</p>
    </div>

    <div class="medium-block-wrapper" v-event-horizon:parallax="{y: {from: 0, to: 300}}">
      <div class="medium-block">
        <div class="image__inner-medium" :style="{paddingBottom: img2.height / img2.width * 100 + '%'}"/>
        <ResponsiveImage :src="`${img2.src}`" :alt="`${img2.alt}`" lazy />
      </div>
    </div>

    <div class="medium-block-wrapper-mobile" v-event-horizon:parallax="{y: {from: 0, to: 100}}">
      <div class="medium-block-mobile">
        <div class="image__inner-medium-mobile" :style="{paddingBottom: img2.height / img2.width * 100 + '%'}"/>
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

// <div class="medium-block-wrapper" v-event-horizon:parallax="{y: {from: 0, to: 300}}">
// <div class="small-block-wrapper" v-event-horizon:parallax="{y: {from: 0, to: 500}}">


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
  height: span(18);

  .text-box {
    text-align: left;
    padding: span(2) span(5) span(2) span(2);
    top: 18%;
    left: 2%;
    z-index: 4;
    position: absolute;
    margin: 0 auto;

    .title-upper{
      margin-bottom: $margin-normal;
    }
    .subtitle{
      padding-bottom: span(1);
      border-bottom: 2px solid $light-blue;
      margin-bottom: $margin-small;
    }
    .text{

    }
  }

    .small-block-wrapper{
      z-index: 3;
      left: 65%;
      top: -8%;
      position: absolute;
      display: none;

      .small-block {
        z-index: 3;
        position: relative;
        width: span(4);
        display: none;

        img {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0px;
          left: 0px;
        }
      }
    }

    .small-block-wrapper-mobile{
      position: absolute;
      left: 70%;
      top: -38%;
      z-index: 3;
      display: block;

      .small-block-mobile {
        position: relative;
        width: span(4);
        display: block;
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
    z-index: 1;
    display: none;
    .medium-block {
      position: relative;
      width: span(12);
      display: none;

      img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
      }
    }
  }

  .medium-block-wrapper-mobile{
    position: absolute;
    left:-10%;
    top: -42%;
    z-index: 1;
    display: block;
    .medium-block-mobile {
      position: relative;
      width: span(18);
      display: block;

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
    bottom: -64%;
    z-index: 2;

    .large-block {
      position: relative;
      width: span(28);
      height: span(22);

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
    .about{
      .text-box {
        text-align: left;
        padding-right: span(8);
        top: 45%;
        left: 10%;
        z-index: 4;
        position: absolute;

        .title-upper{
          margin-bottom: $margin-small;
        }
        .subtitle{
          margin-bottom: $margin-extra-large;
          margin-top: $margin-extra-large;
          border-bottom: 2px solid $light-blue;
          padding-bottom: $margin-large;
        }
        .text{
          padding-right: span(1);
        }
      }

      .small-block-wrapper{
        display: block;
        left: 70%;
        top: -45%;
        .small-block {
          display: block;
        }
      }

      .small-block-wrapper-mobile{
        display: none;
        .small-block-mobile {
          display: none;
        }
      }

      .medium-block-wrapper{
        // position: absolute;
        left: 10%;
        top: 2%;
      }

      .large-block-wrapper{
        // position: absolute;
        // top: 10%;
        bottom: -58%;
      }
    }
  }

  @include respond-to($desktop) {
  .about{
    .text-box {
      text-align: left;
      padding-right: span(10);
      top: 45%;
      left: 10%;
      z-index: 4;
      position: absolute;

      .title-upper{
        margin-bottom: $margin-small;
      }
      .subtitle{
        margin-bottom: $margin-extra-large;
        margin-top: $margin-extra-large;

        padding-bottom: $margin-large;
      }
      .text{
        padding-right: span(1);
      }
    }
    .small-block-wrapper{
      display: block;
      left: 65%;
      top: -8%;
      .small-block {
        display: block;
      }
    }

    .small-block-wrapper-mobile{
      display: none;
      .small-block-mobile {
        display: none;
      }
    }

    .medium-block-wrapper{
      display: block;
      .medium-block{
        display: block;
      }
    }

    .medium-block-wrapper-mobile{
      display: none;
      .medium-block-mobile {
        display: none;
      }
    }

    .large-block-wrapper{
      // position: absolute;
      // z-index: 2;
      bottom: -58%;
    }
  }
}

</style>
