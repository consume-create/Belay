<template>
  <picture v-if="src.match('.jpg|.png')" class="picture">
    <source
      type="image/webp"
      v-bind="source_attrs"
    >
      <!-- v-if="srcset_webp !== 'false'"  -->
    <img
      class="image"
      :class="{'lazyload': lazy}"
      v-bind="image_attrs"
    >
  </picture>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    lazy: {
      type: Boolean,
      default: true
    },
    require: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    computed_src_webp() {
      return require(`~/static/images/${this.src}?webp`);
    },
    computed_src() {
      return require(`~/static/images/${this.src}`);
    },
    src_type() {
      return this.lazy ? "data-src" : "src";
    },
    srcset_type() {
      return this.lazy ? "data-srcset" : "srcset";
    },
    source_attrs() {
      return {
        // [this.srcset_type]: this.computed_srcset_webp,
        [this.src_type]: this.computed_src_webp,
        sizes: this.sizes
      }
    },
    image_attrs() {
      return {
        [this.src_type]: this.computed_src,
        sizes: this.sizes,
        alt: this.alt
      }
    },
  }
};
</script>

<style lang="scss">

.picture {
  img {
    width: 100%;
  }
}

</style>
