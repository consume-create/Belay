<template>
  <section class="header-wrapper">
    <div class="header-image">
      <img
        :src="require(`~/static/images/${img1.src}`)"
        :alt="img1.alt"
        :style="{ 'object-position': img1.objectPosition }"
      />
    </div>
  </section>
</template>

<script>
import ResponsiveImage from "~/components/responsive-image";
export default {
  components: {
    ResponsiveImage,
  },
  props: {
    img1: {
      type: Object,
      default: () => {
        return {
          src: "",
          alt: "",
          height: "",
          width: "",
        };
      },
    },
  },
};
</script>

<style lang="scss">
.header-wrapper {
  .header-image {
    height: 65%;
    position: relative;
    width: 100%;
    img {
      @include abs-fill;
    }
  }
}
</style>
