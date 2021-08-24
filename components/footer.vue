<template>
  <section class="footer">
    <div class="form-cta">
      <div class="form-text">
        <h5 class="title-cta">Stay in Touch</h5>
        <p class="subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt quis urna non facilisis.</p>
        <input type="email" class="email" size="30" placeholder="hello@belaydev.com" required>
      </div>
      <div class="large-wrapper">
        <div class="large-block">
          <div class="image__inner-large" :style="{paddingBottom: img1.height / img1.width * 100 + '%'}"/>
          <ResponsiveImage :src="`${img1.src}`" :alt="`${img1.alt}`" lazy />
        </div>
      </div>

      <div class="medium-wrapper">
        <div class="medium-block">
          <div class="image__inner-medium" :style="{paddingBottom: img2.height / img2.width * 100 + '%'}"/>
          <ResponsiveImage :src="`${img2.src}`" :alt="`${img2.alt}`" lazy />
        </div>
      </div>
    </div>

    <div class="channels">
      <div class="channel-inner">
        <p class="small-title spread"> Our Channels</p>
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
import ResponsiveImage from "~/components/responsive-image";
export default{
  components: {
    SocialLinks,
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
  }

}
</script>


<style lang="scss">

.footer{
  padding: span(3);
  background-color: $deep-blue;
  color: white;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  .form-cta{
    width: span(14);
    position: relative;

    .form-text{
      position: relative;
      z-index: 2;

      .title-cta{

      }

      .subtext{
          margin-bottom: $margin-normal;
      }

      .email{
        padding: span(0.3);
        width: span(7);
        height: span(0.1);
      }
    }

    .large-wrapper{
      position: absolute;
      top: -50%;
      left: -10%;

      .large-block {
        position: relative;
        width: span(10);
        z-index: 0;

        img {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0px;
          left: 0px;
        }
      }
    }
    .medium-wrapper{
      position: absolute;
      top: -120%;
      left: 55%;

      .medium-block {
        position: relative;
        width: span(4);
        z-index: 0;

        img {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0px;
          left: 0px;
        }
      }
    }
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
