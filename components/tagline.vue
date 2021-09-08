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
    width: 100%;
    padding: span(10) 0;
    text-align: center;
    background-color: $deep-blue;
    color: white;
  }

  @include respond-to($tablet) {
    .tagline{
      padding: span(6) 0;
    }
  }

  @include respond-to($desktop) {
    .tagline{
      padding: span(6) 0;
    }
  }

</style>
