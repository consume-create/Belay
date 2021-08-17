<template>
  <picture v-if="src.match('.jpg|.png')" class="picture">
    <source :[srcset_type]="computed_src_webp" type="image/webp">
    <source :[srcset_type]="computed_src" type="image/jpeg">
    <img :[src_type]="computed_src" class="image" :alt="alt" :class="{'lazyload': lazy}">
  </picture>
  <img v-else class="image" :[src_type]="computed_src" :alt="alt" :class="{'lazyload': lazy}">
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
      return this.lazy ? "data-srcSet" : "srcSet";
    }
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
