<template>
  <section class="carousel">
    <Header
      class="logo"
      :img1="{
        src: 'header/belay-logo-white.svg',
        alt: 'The Belay logo in white',
        width: '183',
        height: '87',
      }"
    />

    <div class="background-wrapper">
      <div class="background-inner">
        <div class="background-transition" :class="transitionClass">
          <div class="background-outer-1">
             <div class="background-inner-1">
               <div
                  class="carousel-image-wrap"
                  v-for="(image, i) in images"
                  :key="i"
                  :class="{ 'current': i === current }"
                >
                  <img
                    class="carousel-image"
                    :src="require(`~/static/images/${image.src}`)"
                    :alt="image.alt"
                    :style="{ 'object-position': image.objectPosition }"
                  />
                </div>
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
  width: 100%;
  // height: 100vh;
  height: span(26);
  z-index: 4;
  .logo {
    //background: rgba(red, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    //pointer-events: none;
    position: absolute;
    z-index: 5;
    //height: 20%;
    height: 15vh;
    left: 0;
    right: 0;
    top: 0;
  }

  .arrow {
    position: absolute;
    top: calc(50% - 50px);
    right: 5%;
    display: none;

    &.left {
      display: none;
      position: absolute;
      top: calc(50% - 50px);
      left: 5%;
    }
  }

  .arrow-trap {
    position: absolute;
    top: calc(50% - 55px);
    right: 0%;
    display: block;

    &.left {
      position: absolute;
      top: calc(50% - 55px);
      left: 0%;
      display: block;
    }
  }

  .hotel-title {
    position: absolute;
    z-index: 4;
    bottom: 0%;
    left: 5%;
    height: 80px;
    line-height: 90px;
    color: $white;
  }

  .hotel-date {
    position: absolute;
    z-index: 4;
    bottom: 0%;
    right: 5%;
    height: 80px;
    line-height: 90px;
    color: $white;
  }

  .background-wrapper{
    position: absolute;
    top: 0px;
    // left: 0px;
    right: 0px;
    bottom: 80px;
    width: 100%;
    //height: 100%;

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
            //background: linear-gradient(#8fcde1, #c5e7f1);
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            transform-origin: 100% 0%;
            transform: rotateY(0deg) rotateX(0deg);
            transition: transform 400ms cubic-bezier(0.666, 0.000, 0.333, 1.000) 300ms;
            transform-style: preserve-3d;
            backface-visibility: hidden;

            .carousel-image-wrap {
              background: linear-gradient(#8fcde1, #c5e7f1);
              //height: calc(100% - 15vh);
              opacity: 0;
              position: absolute;
              transition: opacity 800ms;
              z-index: 6;
              bottom: 0;
              left: 0px;
              top: 0;
              width: 100%;
              &.current {
                opacity: 1;
                transition-delay: 800ms;
                z-index: 7;
              }
              .carousel-image {
                object-fit: contain;
                position: absolute;
                width: 100%;
                height: calc(100% - 15vh);
                //height: 100%;
                bottom: 0;
                left: 0;
                // bottom: 0;
                // left: 0px;
                //opacity: 0;
                //transition: opacity 800ms;
                //z-index: 6;
                // &.current {
                //   opacity: 1;
                //   transition-delay: 800ms;
                //   z-index: 7;
                // }
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
    // height: span(18);
     height: 85vh;

    .arrow {
      display: block;

      &.left {
        display: block;
      }
    }

    .arrow-trap {
      display: none;

      &.left {
        display: none;
      }
    }
  }
}

@include respond-to($desktop) {
  .carousel {
    width: 100%;
    // height: span(14);
    height: 100vh;

    .arrow {
     display: block;

      &.left {
        display: block;
      }
    }

    .arrow-trap {
      display: none;

      &.left {
        display: none;
      }
    }
  }
}
</style>
