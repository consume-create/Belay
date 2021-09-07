<template>
  <section class="header-wrapper">
    <div class="header-image">
      <div
        class="image__inner-header"
        :style="{ paddingBottom: (img1.height / img1.width) * 100 + '%' }"
      />
      <ResponsiveImage :src="`${img1.src}`" :alt="`${img1.alt}`" lazy />
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
    position: relative;
    width: span(10);
    margin: 0 auto;
    img {
      @include abs-fill;
    }
  }
}

@include respond-to($tablet) {
  .header-wrapper {
    .header-image {
      width: span(7);
    }
  }
}

@include respond-to($desktop) {
  .header-wrapper {
    .header-image {
      width: span(7);
    }
  }
}
</style>
