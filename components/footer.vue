<template>
  <section class="footer">
    <div class="form-cta">
      <p>placeholder</p>

    </div>

    <div class="channels">
      <div class="channel-inner">
        <h5 class="small-title"> Our Channels</h5>
        <p class="email">info@belaydev.com</p>
        <p class="phone-number"> 303 / 607 /6133</p>
      </div>
      <div class="socials">
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

.footer{
  padding: span(4);
  background-color: $light-greg;
  display: flex;
  align-items: center;
  justify-content: center;

  .form-cta{
    width: span(14);
  }

  .channels{
    width: span(14);
    display: flex;
    align-items: center;
    justify-content: center;
     // flex-direction: column;

    .channel-inner{
      width: span(6);

      .small-title{
        margin-bottom: $margin-extra-large;
      }

      .email{
        margin-bottom: $margin-small;
      }
    }

    .socials{
      width: span(2);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

  }



}





@include respond-to($tablet) {


}

@include respond-to($desktop) {

}

</style>
