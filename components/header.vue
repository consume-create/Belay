<template>
  <section class="header-wrapper">
    <div class="image__container">
      <div class="header-image">
        <div class="image__inner-header" :style="{paddingBottom: img1.height / img1.width * 100 + '%'}"/>
      <ResponsiveImage :src="`${img1.src}`" :alt="`${img1.alt}`" lazy />
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
      title: String,
      text: String,
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
  width: 100%;
  padding: span(2,28) span(2,28);
  background-color: $dark-blue;

  .image__container{

    .header-image {
      position: relative;
      width: span(11,24);
      margin-right: span(2,24);

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

</style>
