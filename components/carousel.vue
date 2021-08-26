<template>
  <section class="carousel">
    <Header class="logo"
    :img1="{
            src: 'header/belay-dev-logo-WHITE.png',
            alt: 'The Belay logo',
            width: '501',
            height: '216'
          }"/>
    <div class="carousel-wrapper">
      <div class="carousel-image">
        <div class="image__inner-carousel" :style="{paddingBottom: img1.height / img1.width * 100 + '%'}"/>
          <ResponsiveImage :src="`${img1.src}`" :alt="`${img1.alt}`" lazy />
      </div>
    </div>

      <div class="arrow-button left"></div>
      <div class="arrow-button"></div>

    <!-- <div class="hotel-title"> -->
      <p class=" hotel-title spread">The Coloradan</p>
    <!-- </div> -->

    <!-- <div class="hotel-date"> -->
      <p class="hotel-date spread">2021</p>
    <!-- </div> -->

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
    top: 3%;
    left: 74%;

    &.left{
      position: absolute;
      top: 12%;
      left: 25%;
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

    &.left{
      top: 50%;
      left: 5%;
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
    left: 90%;

    &.left{
      top: 50%;
      left: 5%;
    }
  }
 }
}

</style>
