<template>
  <section class="property-wrapper">

    <h5 class="title">Property Types</h5>

    <div class="property-image">
      <div class="image__inner-property" :style="{paddingBottom: img1.height / img1.width * 100 + '%'}"/>
        <ResponsiveImage :src="`${img1.src}`" :alt="`${img1.alt}`" lazy />
        <canvas @mousemove="breakDance" @mouseleave="reset" :width="img1.width" :height="img1.height" id="cnv" ></canvas>
    </div>

    <div class="property-image-vertical">
      <div class="image__inner-property-vertical" :style="{paddingBottom: img2.height / img2.width * 100 + '%'}"/>
        <ResponsiveImage :src="`${img2.src}`" :alt="`${img2.alt}`" lazy />
    </div>
  </section>
</template>


<script>
import ResponsiveImage from "~/components/responsive-image";
import gsap from "gsap";
import EasePack from "~/plugins/EasePack";
export default{
  components: {
    ResponsiveImage,
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
    img2:
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

  data() {
    return{
    };
  },
  mounted() {

    // Get the device pixel ratio, falling back to 1.
    // var dpr = window.devicePixelRatio || 1;

    // Get the size of the canvas in CSS pixels.
    var _cnv = document.getElementById("cnv");
    // var rect = _cnv.getBoundingClientRect();

    // Give the canvas pixel dimensions of their CSS
    // size * the device pixel ratio.
    // _cnv.width = rect.width * dpr;
    // _cnv.height = rect.height * dpr;
    var _ctx = _cnv.getContext("2d");

    // Scale all drawing operations by the dpr, so you
    // don't have to worry about the difference.
    // _ctx.scale(dpr, dpr);

    this._cnv = _cnv;
    this._ctx = _ctx;
    this._width= 2880;
    this._height= 1620;
    console.log(this._width, this._height);
    this._rows = 3;
    this._cols = 5;
    this._points = [];
    this._old_row = null;
    this._old_col = null;
    this._heightBrowser= null;
    this._widthBrowser = null;
    this.init();
    window.requestAnimationFrame(this.loop);
    window.addEventListener('resize', this.onResize)
    //Debounce attempt
    //window.addEventListener('resize', _.debounce(this.onResize() => {
    //console.log('resized!')
    // }, 100);
  },

  methods: {
    init() {
      for(let i = 0; i <= this._rows; i++) {
        for(let j = 0; j <= this._cols; j++) {
          let x = ((j * (this._width / this._cols))),
              y = (50 + (i * (this._height / this._rows)));
          this._points.push({x, y, clean_x: x, clean_y: y});
        }
      }
      this._ctx.lineWidth = 1;
      this._ctx.strokeStyle = '#999';
      this._heightBrowser= this._cnv.getBoundingClientRect().height;
      this._widthBrowser = this._cnv.getBoundingClientRect().width;
    },

    renderLines() {
      this._ctx.clearRect(0, 0, this._width, this._height+50);
      this._ctx.beginPath();
      this._ctx.moveTo(this._points[0].x, this._points[0].y);

      for(let i = 0; i < this._points.length; i++) {
        if(i % (this._cols + 1) === 0){
          this._ctx.moveTo(this._points[i].x, this._points[i].y);
        }
        else {
          this._ctx.lineTo(this._points[i].x, this._points[i].y);
        }
        if(this._points[i + (this._cols + 1)]) {
          this._ctx.lineTo(this._points[i + (this._cols + 1)].x, this._points[i + (this._cols + 1)].y);
          this._ctx.moveTo(this._points[i].x, this._points[i].y);
        }
      }
      this._ctx.stroke();
    },

    translate(current) {
      gsap.to(this._points, 0.4, {
        x: (i, t) => current.includes(i) ? t.clean_x + Math.round((Math.random() * 50) - 25) : t.clean_x,
        y: (i, t) => current.includes(i) ? t.clean_y + Math.round((Math.random() * 50) - 25) : t.clean_y,
        ease: EasePack.easeOut,
        overwrite: true
      });
    },

    breakDance (event) {
      let mx = event.offsetX;
      let my = event.offsetY-50;

      if(mx > 0 && my > 0 && mx < this._widthBrowser && my < this._heightBrowser) {

        let row = Math.floor(my / (this._heightBrowser / this._rows));
        let col = Math.floor(mx / (this._widthBrowser / this._cols));

        if(row !== this._old_row || col !== this._old_col) {
          this.translate([
            (col + (row * (this._cols + 1))), // upper left
            ((col + 1) + (row * (this._cols + 1))), // upper right
            (col + ((row + 1) * (this._cols + 1))), // lower left
            ((col + 1) + ((row + 1) * (this._cols + 1))) // lower right
          ]);
        }
        this._old_row = row;
        this._old_col = col;

     }
      else {
        this.reset();
      }
    },

    reset(){
      this.translate([]);
      this._old_row = this._old_col = -1;
    },

    loop() {
      this.renderLines();
      window.requestAnimationFrame(this.loop);
    },
    onResize(event) {
        this._heightBrowser= this._cnv.getBoundingClientRect().height;
        this._widthBrowser = this._cnv.getBoundingClientRect().width;
    },
  },
}

</script>

<style lang="scss">
  .property-wrapper{
    margin-top: span(13);
    position: relative;

    .title{
      text-align: center;
      margin: 0 auto;
      margin-bottom: $margin-extra-large;
      margin-top: $margin-extra-large;
    }

    .property-image-vertical {
      position: relative;
      width: span(28);
      // height: span(24);

      img {
        @include abs-fill;
      }
    }
  }

  .property-image{
    display: none;

    #cnv{
      display: none;
    }
  }

  @include respond-to($tablet) {


  }

  @include respond-to($desktop) {
    .property-wrapper{
      margin-top: span(13);
      position: relative;

      .title{
        text-align: center;
        margin: 0 auto;
        margin-bottom: $margin-extra-large;
        margin-top: $margin-extra-large;
      }

      .property-image {
        position: relative;
        width: span(28);
        display: block;

      img {
        @include abs-fill;
      }
      #cnv{
         display: block;
         @include abs-fill;
       }
      }

      .property-image-vertical {
          display: none;
        }
    }

  }

</style>
