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
                :class="{ current: i === current }"
              >
               <!-- <ResponsiveImage :src="`${image.src}`" :alt="`${image.alt}`" lazy class="carousel-image" /> -->
                <img
                  class="carousel-image"
                  :src="require(`~/static/images/${image.src}`)"
                  :alt="image.alt"                
                />
                <!-- :style="{ paddingBottom: (image.height / image.width) * 100 + '%' }" -->
                <!-- :style="{ 'object-position': image.objectPosition }" -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button class="arrow left" @click="slide(-1)"></button>
    <button class="arrow" @click="slide(1)"></button>

    <button class="arrow-trap left" @click="slide(-1)"></button>
    <button class="arrow-trap" @click="slide(1)"></button>

    <div
      class="text-wrapper"
      v-for="(image, i) in images"
      :key="i"
      :class="{ current: i === current }"
    >
      <p class="hotel-title spread">{{ image.title }}</p>
      <p class="hotel-date spread">{{ image.date }}</p>
    </div>
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
      this.transitionClass = "out";

      window.setTimeout(() => {
        this.transitionClass = "";
      }, duration * 2);

      var len = this.images.length;
      this.current = (this.current + (dir % len) + len) % len;
    },
  },
};
</script>

<style lang="scss">
$iconSize: 22px;
$aspect-ratio: calc(1620px / 2880px);;

.carousel {
  position: relative;
  width: 100%;
  // height: 56.25%;
  height: 100vw;

  // padding-bottom: calc($aspect-ratio );
  // height: calc((1620 / 2880) * 1vh);
  z-index: 4;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 5;
    height: 15vh;
    background-color: $deep-blue;
    // left: 0;
    // right: 0;
    // top: 0;
  }

  .arrow {
    position: absolute;
    // top: 50%;
    top: calc(50% - 50px);
    right: span(2);
    display: none;

    &.left {
      display: none;
      position: absolute;
      top: calc(50% - 50px);
      right: auto;
      left: span(2);
    }
  }

  .arrow-trap {
    position: absolute;
    // top: calc(54.7% - 55px);
    top: 48.5%;
    right: 0%;
    display: block;

    &.left {
      position: absolute;
      // top: calc(54.7% - 55px);
      top: 48.5%;
      left: 0%;
      display: block;
    }
  }

  .text-wrapper {
    opacity: 0;
    transition: opacity 700ms;
    z-index: 6;

    .hotel-title {
      position: absolute;
      bottom: 0%;
      left: span(2);
      height: 80px;
      line-height: 80px;
      color: $white;
    }

    .hotel-date {
      position: absolute;
      bottom: 0%;
      right: span(2);
      height: 80px;
      line-height: 80px;
      color: $white;
    }
    &.current {
      opacity: 1;
      transition-delay: 700ms;
      z-index: 7;
    }
  }

  .background-wrapper {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 80px;
    width: 100%;

    .background-inner {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: #220178;

      .background-transition {
        width: 100%;
        height: 100%;
        perspective: 800px;
        overflow: hidden;
        transform-style: preserve-3d;

        .background-outer-1 {
          width: 100%;
          height: 100%;
          perspective: 800px;
          transform-origin: 100% 0%;
          transform: rotateX(0deg) rotateY(0deg);
          transition: transform 400ms cubic-bezier(0.666, 0, 0.333, 1);
          transform-style: preserve-3d;
          backface-visibility: hidden;

          .background-inner-1 {
            //background: linear-gradient(#8fcde1, #c5e7f1);
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            transform-origin: 0% 100%;
            transform: rotateY(0deg) rotateX(0deg);
            transition: transform 400ms cubic-bezier(0.666, 0, 0.333, 1) 300ms;
            transform-style: preserve-3d;
            backface-visibility: hidden;

            .carousel-image-wrap {
              // background: linear-gradient(#8fcde1, #c5e7f1);
              background-color: $deep-blue;
              //height: calc(100% - 15vh);
              opacity: 0;
              position: absolute;
              transition: opacity 700ms;
              z-index: 6;
              bottom: 0;
              left: 0px;
              top: 0;
              width: 100%;
              // height: 56.25%;
              &.current {
                opacity: 1;
                transition-delay: 700ms;
                z-index: 7;
              }
              .carousel-image {
                // object-fit: contain;
                position: absolute;
                width: 100%;
                // height: calc(100% - 15vh);
                // height: 30.25vh;
                height: 66%;
                // height: 100%;
                bottom: 0px;
                left: 0px;
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
      .background-transition.out {
        .background-outer-1 {
          transform: rotateX(-3deg);
          .background-inner-1 {
            transform: rotateX(3deg);
          }
        }
      }
    }
  }
}
@include respond-to($tablet) {
  .carousel {
    width: 100%;
    height: 85vh;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 5;
    height: 15vh;
    left: 0;
    right: 0;
    top: 0;
    background-color: rgba(0,0,0,0);
  }

  .background-wrapper {
    .background-inner {
      .background-transition {
        .background-outer-1 {
          .background-inner-1 {
             .carousel-image-wrap {
               .carousel-image {
                object-fit: cover;
                height: 100%;
               }
             }
          }
        }
      }
    }
  }

    .arrow {
      display: block;
      cursor: pointer;

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
    height: 100vh;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 5;
    height: 15vh;
    left: 0;
    right: 0;
    top: 0;
    background-color: rgba(0,0,0,0);
  }
  .background-wrapper {
    .background-inner {
      .background-transition {
        .background-outer-1 {
          .background-inner-1 {
             .carousel-image-wrap {
               padding-bottom: 0 !important;
               .carousel-image {
                object-fit: cover;
                height: 100%;
               }
             }
          }
        }
      }
    }
  }

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
