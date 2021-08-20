<template>
  <section class="footer">
    <div class="form-cta">
      <h5>Stay in Touch</h5>
      <p>placeholder</p>

    </div>

    <div class="channels">
      <div class="channel-inner">
        <p class="small-title"> Our Channels</p>
        <p class="email">INFO@BELAYDEV.COM</p>
        <p class="phone-number"> 303 / 607 /6133</p>
      </div>
      <div class="socials">
        <SocialLinks :links="
        [
          {
            'type': 'instagram',
            'url': 'https://twitter.com/facewaretech'
          },
          {
            'type': 'linkedin',
            'url': 'https://www.linkedin.com/company/faceware-technologies-inc-'
          },
          {
            'type': 'twitter',
            'url': 'https://discord.gg/ZurczeCeRY'
          },
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
  padding: span(2);
  background-color: $deep-blue;
  color: white;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  .form-cta{
    width: span(14);
  }

  .channels{
    width: span(14);
    .channel-inner{
      .small-title{
        margin-bottom: $margin-extra-large;
      }

      .email{
        margin-bottom: $margin-small;
      }
      .phone-number{
        margin-bottom: $margin-small;
      }
    }

    .socials{
    }
  }
}


@include respond-to($tablet) {
}

@include respond-to($desktop) {
  .channels{
    display: flex;
    align-items: center;
    justify-content: center;
    // flex-direction: column;

    .channel-inner{
      width: span(6);
      // margin-right: span(4);

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

</style>
