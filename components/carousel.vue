<template>
  <section class="carousel">
    <Header class="logo"
    :img1="{
            src: 'header/belay-dev-logo-WHITE.png',
            alt: 'The Belay logo in white',
            width: '501',
            height: '216'
          }" />
    <div class="carousel-wrapper">
      <div class="carousel-image">
        <div class="image__inner-carousel" :style="{paddingBottom: img1.height / img1.width * 100 + '%'}"/>
          <ResponsiveImage :src="`${img1.src}`" :alt="`${img1.alt}`" lazy />
      </div>
    </div>

      <div class="arrow-button left"></div>
      <div class="arrow-button"></div>

      <div class="arrow-button-trapezoid left "></div>
      <div class="arrow-button-trapezoid"></div>

      <p class="hotel-title spread">The Coloradan</p>
      <p class="hotel-date spread">2021</p>

  </section>
</template>


<script>
import Header from '~/components/header';
import ResponsiveImage from "~/components/responsive-image";
  export default{
    components: {
      Header,
      ResponsiveImage
    },
    props: {
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

$iconSize: 22px;

.carousel{
  position: relative;
  z-index: 4;
  .logo{
    position: absolute;
    z-index: 5;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 3%;
  }

  .arrow-button{
    position: absolute;
    top: 50%;
    left: 95%;
    display: none;

    &.left{
      display: none;
      position: absolute;
      top: 50%;
      left: 5%;
    }
  }

  .arrow-button-trapezoid{
    position: absolute;
    top: 50%;
    left: 92%;

    &.left{
      position: absolute;
      top: 50%;
      left: 0%;
    }
  }

  .hotel-title{
    position: absolute;
    z-index: 4;
    top: 105%;
    left: 5%;
    color: $white;

  }

  .hotel-date{
    position: absolute;
    z-index: 4;
    top: 105%;
    left: 85%;
    color: $white;
  }

  .carousel-wrapper{
    .carousel-image{
      width: span(28);
      height: span(28);
      position: relative;
      margin: 0 auto;

      img{
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

.carousel{
  .hotel-date{
    position: absolute;
    top: 105%;
    left: 88%;
  }

  .hotel-title{
    top: 105%;
    left: 5%;
  }
  .arrow-button{
    top: 50%;
    left: 90%;
    display: block;

    &.left{
      top: 50%;
      left: 5%;
      display: block;
    }
  }

  .arrow-button-trapezoid{
    position: absolute;
    top: 50%;
    left: 92%;
    display: none;

    &.left{
      position: absolute;
      top: 50%;
      left: 0%;
      display: none;
    }
  }

 }

}

@include respond-to($desktop) {
.carousel{
  .carousel-wrapper{
    .carousel-image{
      width: span(28);
      height: span(16);
    }
  }

  .hotel-date{
    top: 105%;
    left: 90%;
  }

  .hotel-title{
    top: 105%;
    left: 5%;
  }
  .arrow-button{
    top: 50%;
    left: 92%;

    &.left{
      top: 50%;
      left: 5%;
    }
  }

  .arrow-button-trapezoid{
    position: absolute;
    top: 50%;
    left: 92%;
    display: none;

    &.left{
      position: absolute;
      top: 50%;
      left: 0%;
      display: none;
    }
  }
 }
}

</style>
