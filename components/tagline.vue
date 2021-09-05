<template>
  <section class="tagline">
    <h4>Look at Possible Differently.</h4>
  </section>
</template>


<script>
  export default{}

</script>

<style lang="scss">
  .tagline{
    //width: span(28);
    width: 100%;
    padding-top: span(6);
    padding-bottom: span(6);
    padding-right: 0;
    padding-left: 0;
    text-align: center;
    background-color: $deep-blue;
    color: white;
  }



  @include respond-to($tablet) {
    .tagline{
      padding: span(3);
    }

  }

  @include respond-to($desktop) {

  }

</style>
