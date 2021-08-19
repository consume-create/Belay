<template>
  <section class="property-wrapper">

    <h5 class="title">Property Types</h5>

    <div class="property-image">
      <div class="image__inner-property" :style="{paddingBottom: img1.height / img1.width * 100 + '%'}"/>
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
  .property-wrapper{
    // padding: span(6);

    // float: left;

    .title{
        text-align: center;
        margin: 0 auto;
        margin-bottom: $margin-extra-large;
        margin-top: $margin-extra-large;
    }
    .property-image {
      position: relative;
      width: span(28);
      // margin: 0 auto;

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
