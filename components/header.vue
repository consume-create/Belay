<template>
  <section class="header-wrapper">
      <div class="header-image">
        <div class="image__inner-header" :style="{paddingBottom: img1.height / img1.width * 100 + '%'}"/>
        <ResponsiveImage :src="`${img1.src}`" :alt="`${img1.alt}`" lazy />
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
    },
  }

</script>

<style lang="scss">
.header-wrapper{
  // padding: span(1);
  // background-color: $deep-blue;

  .header-image {
    position: relative;
    width: span(4);
    margin: 0 auto;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
    }
  }

  @include respond-to($tablet) {
    .header-image {
    }
  }

  @include respond-to($desktop) {
    .header-image {
    }
  }
}

</style>
