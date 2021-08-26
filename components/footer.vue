<template>
  <section class="footer">
    <div class="footer-wrapper">
      <div class="form-cta">
          <div class="form-text">
            <h5 class="title-cta">Stay in Touch</h5>
            <p class="subtext">Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,</p>
            <div class="email-wrapper">
              <input type="email" class="email" size="30" placeholder="hello@belaydev.com" required>
              <button class="right-arrow" name="email-button"></button>
            </div>
          </div>

          <div class="large-wrapper">
            <div class="large-block">
              <div class="image__inner-large" :style="{paddingBottom: img1.height / img1.width * 100 + '%'}"/>
              <ResponsiveImage :src="`${img1.src}`" :alt="`${img1.alt}`" lazy />
            </div>
          </div>

        <div class="medium-wrapper"  v-event-horizon:parallax="{y: {from: 0, to: 200}}">
          <div class="medium-block">
            <div class="image__inner-medium" :style="{paddingBottom: img2.height / img2.width * 100 + '%'}"/>
            <ResponsiveImage :src="`${img2.src}`" :alt="`${img2.alt}`" lazy />
          </div>
        </div>
      </div>

      <div class="channels">
        <div class="channel-inner">
          <p class="small-title spread small"> Our Channels</p>
          <div class="mail-wrapper">
            <div class="mail-icon"/>
            <p class="email-para">INFO@BELAYDEV.COM</p>
          </div>
          <div class="phone-wrapper">
            <div class="phone-icon"/>
            <p class="phone-number"> 303 / 607 / 6133</p>
          </div>
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
    </div>
    <div class="policies">
      <p class="policy">Privacy Policy</p>
      <p class="copyright">Copyright Belay 2021</p>
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
$iconSize: 22px;

.footer{
  padding: span(2);
  background-color: $deep-blue;
  color: white;

  .footer-wrapper{
    .form-cta{
      width: span(24);
      position: relative;

      .form-text{
        position: relative;
        padding-right: span(4);
        padding-top: span(2);
        // top: 0;
        // left:10%;
        // width: span(24);
        // height: auto;
        // margin: auto;
        z-index: 2;

        .title-cta{

        }

        .subtext{
            margin-bottom: $margin-normal;
        }

        .email-wrapper{
          display: flex;
          // padding: span(.6);
          // width: span(24);
          // height: span(0.3);

          .email{
            padding: span(.6);
            width: span(24);
            height: span(0.3);
          }
          margin-bottom: $margin-extra-large*2;
        }
     }

      .large-wrapper{
        position: absolute;
        height: 100%;
        // width: span(28);
        // overflow: hidden;
        // bottom: -10%;
        // left: -10%;
        top: -30%;
        left: -20%;


        .large-block {
          position: relative;
          // width: span(33);
          // height: span(22);
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
        top: -40%;
        left: 65%;

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
      // width: span(20);
      // flex: 1;
      .channel-inner{
        .small-title{
          margin-bottom: $margin-extra-large;
        }

      .mail-wrapper{
        display: flex;
        align-items: center;
        flex-direction: row;
        margin-bottom: $margin-normal;

        .mail-icon{
          position: relative;
          height: 22px;
          width: 22px;
          &:after {
            content: "";
            position: absolute;
            width: 100%;
            top: 0%;
            left: 0;
            height: 22px;
            width: 22px;
            @include icon("mail", $white, true);
            transition: transform $speed-demon ease;
          }
        }

        .email-para{
          margin-left: $margin-small;
        }
      }

      .phone-wrapper{
        display: flex;
        align-items: center;
        flex-direction: row;
        margin-bottom: $margin-normal;

        .phone-icon{
          position: relative;
          height: 22px;
          width: 22px;
          &:after {
            content: "";
            position: absolute;
            width: 100%;
            top: 0%;
            left: 0;
            height: 22px;
            width: 22px;
            @include icon("phone", $white, true);
            transition: transform $speed-demon ease;
          }
        }
        .phone-number{
          margin-left: $margin-small;
        }
       }
      }

      .socials{
      }
    }
  }
  .policies{
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    flex-direction: row-reverse;

    .copyright{
      margin-right: $margin-extra-large;
    }
    .policies{
      // margin-right: $margin-extra-large;
    }
  }
}


@include respond-to($tablet) {
  .footer{
    .footer-wrapper{
      display: flex;
      align-items: flex-start;
      justify-content: space-around;

        .channels{
          display: flex;
          align-items: center;
          justify-content: center;

          .channel-inner{
            width: span(6);

            .small-title{
              margin-bottom: $margin-extra-large;
            }

            .email-para{
              // margin-bottom: $margin-small;
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

        .form-cta{
          width: span(14);

          .large-wrapper{
            position: absolute;
            // bottom: -50%;
            // left: -10%;
            // display: none;
            .large-block{
              width: span(14);
              bottom: -50%;

            }
          }
          .medium-wrapper{
            top: -120%;
            left: 55%;
          }
        }
      }
  }
}

@include respond-to($desktop) {
.footer{
  .footer-wrapper{
    display: flex;
    align-items: flex-start;
    justify-content: space-around;

      .channels{
        display: flex;
        align-items: center;
        justify-content: center;

        .channel-inner{
          width: span(6);
          .small-title{
            margin-bottom: $margin-extra-large;
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

      .form-cta{
        width: span(14);
        .form-text{
          margin-top: 33px;
          .email-wrapper{
            .email{
              padding: span(.3);
              width: span(24);
              height: span(0.1);
            }
          }
        }

        .large-wrapper{
          position: absolute;
          // top: -70%;
          // left: -10%;
          // width: span(14);
          // display: none;
          .large-block{
            width: span(14);
            // top: -70%;
            // left: -10%;
          }
        }
        .medium-wrapper{
          top: -150%;
          left: 55%;
        }
      }
    }
  }
}

</style>
