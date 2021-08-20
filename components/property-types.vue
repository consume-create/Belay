<template>
  <section class="property-wrapper">

    <h5 class="title">Property Types</h5>

    <div class="property-image">
      <div class="image__inner-property" :style="{paddingBottom: img1.height / img1.width * 100 + '%'}"/>
        <ResponsiveImage :src="`${img1.src}`" :alt="`${img1.alt}`" lazy />
    </div>

    <canvas id="cnv"></canvas>
  </section>
</template>


<script>
import ResponsiveImage from "~/components/responsive-image";
export default{
  components: {
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
  //Read by the template
  data() {
    return{
      ctx: null,
      width: 0,
      height: 0,
      // cnv = document.getElementById('cnv'),
      //   ctx = cnv.getContext('2d'),
      //   width = 1000,
      //   height = 600,
      //   points = [],
      //   rows = 3,
      //   cols = 5,
      //   old_row, old_col;
    };
  },
  mounted() {
    var _cnv = document.getElementById("cnv");
    var _ctx = cnv.getContext("2d");
    this._cnv = _ctx;
    this.width= 1000;
    this.height=600;
    this.rows = 3;
    this.cols = 5;
    // init();

  },
  methods: {
    init() {
      for(let i = 0; i <= this.rows; i++) {
        for(let j = 0; j <= this.cols; j++) {
          let x = (50 + (j * (this.width / this.cols))),
              y = (50 + (i * (this.height / this.rows)));

          points.push({x, y, clean_x: x, clean_y: y});
        }
      }
      console.log(1);

      this._ctx.lineWidth = 4;
      this._ctx.strokeStyle = '#999';
    },
  },
}

</script>

<style lang="scss">
  .property-wrapper{
    margin-top: span(4);

    .title{
        text-align: center;
        margin: 0 auto;
        margin-bottom: $margin-extra-large;
        margin-top: $margin-extra-large;
    }

    .property-image {
      position: relative;
      width: span(28);

      img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
      }
    }
  }


  @include respond-to($tablet) {


  }

  @include respond-to($desktop) {

  }

</style>
