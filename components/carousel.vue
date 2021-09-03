<template>
  <section class="carousel">
    <Header
      class="logo"
      :img1="{
        src: 'header/belay-dev-logo-WHITE.png',
        alt: 'The Belay logo in white',
        width: '501',
        height: '216',
      }"
    />

    <!-- <div class="carousel-wrapper">
      <div class="carousel-image">
        <div class="image__inner-carousel" :style="{paddingBottom: img1.height / img1.width * 100 + '%'}"/>
          <ResponsiveImage :src="`${img1.src}`" :alt="`${img1.alt}`" lazy />
      </div>
    </div> -->

    <div class="carousel-wrapper">
      <div class="carousel-image"
       v-if="show" 
       :key="current" 
       :class="images[current].className">

        <div
          class="image__inner-carousel"  
          :style="{ paddingBottom: images[current].height / images[current].width * 100 + '%' }"
          />
        <ResponsiveImage :src="images[current].src" :alt="images[current].alt" lazy />
      </div>
    </div>

    <!-- <div class="arrow-button left"></div>
    <div class="arrow-button"></div> -->
    <button class='arrow left' @click="slide(-1)"></button>
    <button class='arrow' @click="slide(1)"></button>
    <!-- <div class="arrow left"></div>
    <div class="arrow"></div> -->

    <div class="arrow-button-trapezoid left"></div>
    <div class="arrow-button-trapezoid"></div>

    <p class="hotel-title spread">The Coloradan</p>
    <p class="hotel-date spread">2021</p>
  </section>
</template>

<script>
import Header from "~/components/header";
import ResponsiveImage from "~/components/responsive-image";
export default {
  components: {
    Header,
    ResponsiveImage,
  },
  props: {
    images: {
      type: Array,
    },
  },
  data: function(){
    return{
      current: 0,
      direction: 1,
      transitionName: "fade",
      show: true,
    }
 
  },
  methods: {
    // next(index){
    //   console.log(index);
    //   const currentSlide = this.images[index];
    //   // index++;
    //   // this.images[index] = currentSlide; 
    //   // return(currentSlide);
      
    // }, 

    // previous(index){
    //   const currentSlide = this.images[index];
    //   index--;
    //   this.images[index] = currentSlide;
    // },

    slide(dir) {
      this.direction = dir;
      dir === 1
        ? (this.transitionName = "slide-next")
        : (this.transitionName = "slide-prev");
      console.log(dir);
      var len = this.images.length;
      console.log(this.images);
      this.current = (this.current + dir % len + len) % len;
      // console.log(this.current);
    }
  },

  mounted() {
    this.show = true;
    console.log("here");
  }
};
</script>

<style lang="scss">
$iconSize: 22px;

.carousel {
  position: relative;
  z-index: 4;
  .logo {
    position: absolute;
    z-index: 5;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 3%;
  }

  .arrow {
    position: absolute;
    top: 50%;
    left: 97%;
    display: none;

    &.left {
      display: none;
      position: absolute;
      top: 50%;
      left: 3%;
    }
  }

  .arrow-button-trapezoid {
    position: absolute;
    top: 50%;
    right: 0%;

    &.left {
      position: absolute;
      top: 50%;
      left: 0%;
    }
  }

  .hotel-title {
    position: absolute;
    z-index: 4;
    top: 105%;
    left: 5%;
    color: $white;
  }

  .hotel-date {
    position: absolute;
    z-index: 4;
    top: 105%;
    left: 85%;
    color: $white;
  }

  .carousel-wrapper {
    .carousel-image {
      width: span(28);
      height: span(26);
      position: relative;
      margin: 0 auto;

      img {
        object-fit: cover;
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
  .carousel {
    .hotel-date {
      position: absolute;
      top: 105%;
      left: 88%;
    }

    .hotel-title {
      top: 105%;
      left: 5%;
    }
    .arrow {
      top: 50%;
      left: 90%;
      display: block;

      &.left {
        top: 50%;
        left: 5%;
        display: block;
      }
    }

    .arrow-button-trapezoid {
      position: absolute;
      top: 50%;
      left: 92%;
      display: none;

      &.left {
        position: absolute;
        top: 50%;
        left: 0%;
        display: none;
      }
    }
  }
}

@include respond-to($desktop) {
  .carousel {
    .carousel-wrapper {
      // overflow: hidden;
      // display: none;
      .carousel-image {
        
        width: span(28);
        height: span(14);
      }
    }

    .hotel-date {
      top: 105%;
      left: 90%;
    }

    .hotel-title {
      top: 105%;
      left: 5%;
    }
    .arrow {
      position: absolute;
      top: 50%;
      right: 96%;

      &.left {
        top: 50%;
        left: 4%;
      }
    }

    .arrow-button-trapezoid {
      position: absolute;
      top: 50%;
      left: 92%;
      display: none;

      &.left {
        position: absolute;
        top: 50%;
        left: 0%;
        display: none;
      }
    }
  }
}
</style>
