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
    <div class="arrow-right">
      right
    </div>
    <div class="arrow-left">
      left
    </div>
    <div class="hotel-title">
      <p class="spreader">The Coloradan</p>
    </div>
    <div class="hotel-date">
      <p class="spreader">2021</p>
    </div>
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

  .arrow-right{
    position: absolute;
    top: 50%;
    left: 95%;
    // width: 100%;
    // margin: -9px 0 $margin-normal -9px;

    // a{
    //   position: relative;
    //   width: 40px;
    //   height: 40px;
    // }
    // a:after{
    //   content: "";
    //   position: absolute;
    //   top: 50%;
    //   left: 50%;
    //   width: $iconSize;
    //   height: $iconSize;
    //   margin: -11px 0 0 -11px;
    // }
    // &:after{
    //   @include icon("instagram", $white, true);
    // }
  }
  .arrow-left{
    position: absolute;
    top: 50%;
    left: 5%;
  }

  .hotel-title{
    position: absolute;
    top: 105%;
    left: 5%;
    color: $white;
    
  }

  .hotel-date{
    position: absolute;
    top: 105%;
    left: 95%;
    color: $white;
  }

  .carousel-wrapper{
    .carousel-image{
      width: span(28);
      height: span(18);
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


}

@include respond-to($desktop) {

  .hotel-date{
    top: 105%;
    left: 95%;
  }

  .hotel-title{
    top: 105%;
    left: 5%;
  }

}

</style>
