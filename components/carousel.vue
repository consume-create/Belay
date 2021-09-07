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
      
    <div class="background-wrapper">
      <div class="background-inner">
        <div class="background-transition" :class="transitionClass">
          <div class="background-outer-1">
             <div class="background-inner-1">
                <img
                  v-for="(image, i) in images"
                  :key="i"
                  class="carousel-image"
                  :class="{ 'current': i === current }"
                  :src="require(`~/static/images/${image.src}`)"
                  :alt="image.alt"
                  :style="{ 'object-position': image.objectPosition }"
                />
            </div> 
          </div> 
        </div> 
      </div>
    </div>

    <button class="arrow left" @click="slide(-1)"></button>
    <button class="arrow" @click="slide(1)"></button>

    <button class="arrow-trap left" @click="slide(1)"></button>
    <button class="arrow-trap" @click="slide(1)"></button>

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
  data: function () {
    return {
      current: 0,
      direction: 1,
      transitionClass: "", 
    };
  },
  methods: {    
    slide(dir) {
      this.direction = dir;
      const duration = 400;
      this.transitionClass ="out";
    
      window.setTimeout(() => {
      this.transitionClass = "";
      }, duration * 2);

      var len = this.images.length;
      this.current = (this.current + (dir % len) + len) % len;
    },
  },

  mounted() {
  },
};
</script>

<style lang="scss">
$iconSize: 22px;

.carousel {
  position: relative;
  //width: span(28);
  width: 100%;
  height: span(26);
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

  .arrow-trap {
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

  .background-wrapper{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;

    .background-inner{
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: $blurple;

      .background-transition{
        width: 100%;
        height: 100%;
        perspective: 800px;
        overflow: hidden;
        transform-style: preserve-3d;

        .background-outer-1{
          width: 100%;
          height: 100%;
          perspective: 800px;
          transform-origin: 0% 100%;
          transform: rotateX(0deg) rotateY(0deg);
          transition: transform 400ms cubic-bezier(0.666, 0.000, 0.333, 1.000);
          transform-style: preserve-3d;
          backface-visibility: hidden;

          .background-inner-1{
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            transform-origin: 100% 0%;
            transform: rotateY(0deg) rotateX(0deg);
            transition: transform 400ms cubic-bezier(0.666, 0.000, 0.333, 1.000) 300ms;
            transform-style: preserve-3d;
            backface-visibility: hidden;

            .carousel-image {
                object-fit: cover;
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0px;
                left: 0px;
                opacity: 0;
                transition: opacity 800ms;
                z-index: 10;
                &.current {
                  opacity: 1;
                  transition-delay: 800ms;
                  z-index: 20;
                }
            }
          } 
        } 
      } 
      .background-transition.out{
      .background-outer-1{
       transform: rotateX(8deg) rotateY(4deg);
          .background-inner-1{
         transform: rotateY(-4deg) rotateX(-8deg);
       }
      }
     } 
    }
  }
}
@include respond-to($tablet) {
  .carousel {
    width: 100%;
    height: span(18);
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
        left: 7%;
        display: block;
      }
    }

    .arrow-trap {
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
    //width: span(28);
    width: 100%;
    //height: span(14);
    height: 85vh;

    .hotel-date {
      top: 105%;
      left: 90%;
    }

    .hotel-title {
      top: 105%;
      left: 5%;
    }
    .arrow {
      top: 50%;
      left: 93%;
      display: block;

      &.left {
        top: 50%;
        left: 5%;
        display: block;
      }
    }

    .arrow-trap {
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
