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
              <div
                class="carousel-image"
                v-if="show"
                :key="current"
                :class="images[current].className"
              >
                <div
                  class="image__inner-carousel"
                  :style="{
                    paddingBottom:
                      (images[current].height / images[current].width) * 100 + '%',
                  }"
                />
                <ResponsiveImage
                  :src="images[current].src"
                  :alt="images[current].alt"
                  :class="fadeClass"
                  lazy
                />
              </div>
            </div> 
          </div> 
        </div> 
      </div>
    </div>

    <button class="arrow left" @click="slide(-1)"></button>
    <button class="arrow" @click="slide(1)"></button>

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
  data: function () {
    return {
      current: 0,
      direction: 1,
      transitionName: "fade",
      show: false,
      transitionClass: "", 
      fadeClass: ""
    };
  },
  methods: {
    init() {
      const el= document.getElementsByClassName("background-wrapper");
      const bg_trans= document.getElementsByClassName('background-transition');
      
      // const imgs = document.querySelectorAll('img');
      // const imgs= document.getElementsByClassName('carousel-image');
      // console.log(imgs);
      // imgs.classList.add('current');
    }, 

    backOut() {
      const duration = 400;
      this.bg_trans.classList.add('out');
    
    //window.setTimeout(() => {
      // next();
    //}, duration * 1.5);
    
      window.setTimeout(() => {
      this.bg_trans.classList.remove('out');
      }, duration * 2);
    },
      
    slide(dir) {
      
      // const el= document.getElementsByClassName("background-wrapper");
      // const bg_trans = document.getElementsByClassName('background-transition');
      // console.log(bg_trans);

      this.direction = dir;

      const duration = 400;
      // bg_trans.classList.add('out');

      this.transitionClass ="out";
      
      
      
    
    // window.setTimeout(() => {
      this.fadeClass="fade"; 
    // }, duration * 1.5);
    this.fadeClass= "";
    
      window.setTimeout(() => {
      this.transitionClass = "";
      }, duration * 2);
      

      var len = this.images.length;
      this.current = (this.current + (dir % len) + len) % len;
    },

    // next() {
    //   var length = this.images.length;
    //   this.imgs[this.current].classList.remove('current');
    //   current++;
    //   console.log(current);
    //   if(this.current >= length) {
    //     current = 0;
    //   }
    //   this.imgs[this.current].classList.add('current');
    // }


  },

  mounted() {
    this.init();
    this.show = true;
  },
};
</script>

<style lang="scss">
$iconSize: 22px;

.carousel {
  position: relative;
      width: span(28);
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

  .background-wrapper{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    //  width: span(28);
    //  height: span(26);

    .background-inner{
      position: relative;
      width: 100%;
      height: 100%;
      //  width: span(28);
      //  height: span(26);
      overflow: hidden;
      background-color: $deep-blue;

      .background-transition{
        // width: 100%;
        // height: 100%;
        width: span(28);
        height: span(26);
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
              // width: span(28);
              // height: span(26);
              // position: relative;
              // margin: 0 auto;

              img {
                object-fit: cover;
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0px;
                left: 0px;
                transition: opacity 1400ms;
                // z-index: 1;
                &.fade {
                  opacity: 1;
                }
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
    .carousel-image {
      width: span(28);
      height: span(14);
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
