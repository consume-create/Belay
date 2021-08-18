<template>
  <section class="footer">
    <div class="form-cta">


    </div>

    <div class="channels">
      <h5 class="small-title"> Our Channels</h5>
      <p class="email">info@belaydev.com</p>
      <p class="phone-number"> 303 / 607 /6133</p>

      <SocialLinks :links="
      [
        {
          'type': 'twitter',
          'url': 'https://twitter.com/facewaretech'
        },
        {
          'type': 'linkedin',
          'url': 'https://www.linkedin.com/company/faceware-technologies-inc-'
        },
        {
          'type': 'discord',
          'url': 'https://discord.gg/ZurczeCeRY'
        }
      ]" />

    </div>



  </section>
</template>


<script>
import SocialLinks from "~/components/social-links.vue";
export default{
  components: {
    SocialLinks 
  }

}

</script>

<style lang="scss">

.channels{
  padding: span(6,28);
  background-color: $light-greg;


}





@include respond-to($tablet) {


}

@include respond-to($desktop) {

}

</style>
