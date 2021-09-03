<template>
  <footer>
    <div class="medium-relative">
      <div
        class="medium-wrapper"
        v-event-horizon:parallax="{ y: { from: 0, to: 200 } }"
      >
        <div class="medium-block">
          <div
            class="image__inner-medium"
            :style="{ paddingBottom: (img2.height / img2.width) * 100 + '%' }"
          />
          <ResponsiveImage :src="`${img2.src}`" :alt="`${img2.alt}`" lazy />
        </div>
      </div>
    </div>
    <div class="footer-wrapper">
      <div class="footer__column-left">
        <div class="form-text">
          <h5 class="title-cta">Stay in Touch</h5>
          <p class="subtext">
            Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum
            dolor sit amet, Lorem ipsum dolor sit amet,
          </p>
          <div class="email-wrapper">
            <input
              type="email"
              class="email"
              size="30"
              placeholder="hello@belaydev.com"
              required
            />
            <button class="right-arrow" name="email-button"></button>
          </div>
        </div>
        <div
          class="image__inner-large"
          :style="{ paddingBottom: (img1.height / img1.width) * 100 + '%' }"
        />
        <ResponsiveImage :src="`${img1.src}`" :alt="`${img1.alt}`" lazy />
      </div>

      <div class="social-flex">
        <div class="footer__column-right">
          <div class="channel-inner">
            <p class="small-title spread">Our Channels</p>
            <div class="mail-wrapper">
              <div class="mail-icon" />
              <p class="email-para small">INFO@BELAYDEV.COM</p>
            </div>
            <div class="phone-wrapper">
              <div class="phone-icon" />
              <p class="phone-number small">303 / 607 / 6133</p>
            </div>
          </div>
        </div>
        <div class="footer__column-socials">
          <div class="socials">
            <SocialLinks
              :links="[
                {
                  type: 'instagram',
                  url: '1',
                },
                {
                  type: 'linkedin',
                  url: '2',
                },
                {
                  type: 'twitter',
                  url: '3',
                },
              ]"
            />
          </div>
        </div>
      </div>
      <div class="column-bottom">
        <div class="policies">
          <p class="policy mega-small">Privacy Policy</p>
          <p class="copyright mega-small">Copyright Belay 2021</p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import SocialLinks from "~/components/social-links.vue";
import ResponsiveImage from "~/components/responsive-image";
export default {
  components: {
    SocialLinks,
    ResponsiveImage,
  },
  props: {
    img1: {
      type: Object,
      default: () => {
        return {
          src: "",
          alt: "",
          height: "",
          width: "",
        };
      },
    },
    img2: {
      type: Object,
      default: () => {
        return {
          src: "",
          alt: "",
          height: "",
          width: "",
        };
      },
    },
  },
};
</script>


<style lang="scss">
$iconSize: 22px;

footer {
  width: 100%;
  background-color: $deep-blue;
  color: white;

  .footer-wrapper {
    position: relative;
    padding: span(2);
    overflow: hidden;

    .footer__column-left {
      //width: span(28);
      width: 100%;
      position: relative;
      margin-bottom: span(8);

      img {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        width: 130%;
      }

      .form-text {
        position: absolute;
        z-index: 1;
        top: 50%;
        transform: translate(0, -50%);
        margin-left: auto;
        margin-right: auto;
        
        .subtext {
          margin-top: $margin-small;
          padding-right: span(4);
        }
        .email-wrapper {
          margin-top: $margin-small;
          display: flex;
          align-items: center;

          .email {
            border: none;
            padding: 3px;
            width: span(21);
          }

          input::placeholder {
            color: black;
            font-weight: bold;
          }
          .right-arrow {
            position: relative;
            height: 22px;
            width: 22px;
            background-color: $dark-blue;
            border: 0;
            &:after {
              content: "";
              position: absolute;
              width: 100%;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              height: 18px;
              width: 18px;
              @include icon("right-arrow-mail", $white, true);
              transition: transform $speed-demon ease;
            }
          }
        }
      }
    }

    .social-flex {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;

      .footer__column-right {
        .channel-inner {
          .small-title {
            margin-bottom: $margin-normal;
            margin-top: $margin-extra-large;
          }

          .mail-wrapper {
            display: flex;
            align-items: center;
            flex-direction: row;
            margin-bottom: $margin-normal;

            .mail-icon {
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

            .email-para {
              margin-left: $margin-small;
            }
          }

          .phone-wrapper {
            display: flex;
            align-items: center;
            flex-direction: row;
            margin-bottom: $margin-normal;

            .phone-icon {
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
            .phone-number {
              margin-left: $margin-small;
            }
          }
        }
      }

      .footer__column-socials {
        margin-top: $margin-extra-large;
        .socials {
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          a {
            margin-bottom: $margin-normal;
          }
        }
      }
    }
    .column-bottom {
      .policies {
        display: flex;
        align-items: center;
        .policy {
          white-space: nowrap;
          margin-right: $margin-normal;
        }
        .copyright {
          white-space: nowrap;
        }
      }
    }
  }

  .medium-relative {
    position: relative;
    height: 50px;
    .medium-wrapper {
      position: absolute;
      top: -80%;
      left: 68%;
      z-index: 1;

      .medium-block {
        position: relative;
        width: span(6);

        img {
          @include abs-fill;
        }
      }
    }
  }
}

@include respond-to($tablet) {
  footer {
    .footer-wrapper {
      @include grid;
      padding: span(1);
      // padding-bottom: span(2);

      .footer__column-left {
        width: span(16);
        height: 100%;
        position: relative;
        margin-bottom: 0;
        grid-column: 1 / span 15;
        grid-row: 1 / span 3;

        img {
          width: 100%;
        }

        .form-text {
          top: 50%;
          left: 10%;
          transform: translate(0, -50%);
          margin-right: auto;

          .subtext {
            margin-top: $margin-small;
            padding-right: span(2);
          }
          .email-wrapper {
            margin-top: $margin-small;

            .email {
              padding: 5px;
              width: span(9);
            }
            .right-arrow {
              height: 25px;
              width: 25px;
              &:after {
                height: 18px;
                width: 18px;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              }
            }
          }
        }
      }

      .social-flex {
        grid-column: 19 / span 10;
        grid-row: 2;
        // margin-top: $margin-extra-large;
        // margin-bottom: $margin-large;
        justify-content: space-around;

        .footer__column-right {
          .channel-inner {
            .small-title {
              margin-bottom: $margin-normal;
            }

            .mail-wrapper {
              margin-bottom: $margin-normal;

              .mail-icon {
                position: relative;
                height: 22px;
                width: 22px;
                &:after {
                  height: 22px;
                  width: 22px;
                }
              }

              .email-para {
                margin-left: $margin-small;
              }
            }

            .phone-wrapper {
              margin-bottom: $margin-normal;

              .phone-icon {
                height: 22px;
                width: 22px;
                &:after {
                  height: 22px;
                  width: 22px;
                }
              }
              .phone-number {
                margin-left: $margin-small;
              }
            }
          }
        }

        .footer__column-socials {
          .socials {
            a {
              margin-bottom: $margin-large;
            }
          }
        }
      }

      .column-bottom {
        grid-column: 18 / span 7;
        grid-row: 3;
      }
    }

    .medium-relative {
      height: 20px;

      .medium-wrapper {
        top: -50%;
        left: 38%;

        .medium-block {
          width: span(4);
        }
      }
    }
  }
}

@include respond-to($large-tablet) {
  footer {
    .footer-wrapper {
      @include grid;
      padding: span(1);
      // padding-bottom: span(2);

      .footer__column-left {
        width: span(14);
      }
      .social-flex {
        grid-column: 18 / span 10;
        grid-row: 2;
      }
      .column-bottom {
        grid-column: 19 / span 7;
        grid-row: 3;
      }
    }
  }
}

@include respond-to($desktop) {
  footer {
    .footer-wrapper {
      padding: span(1);
      @include grid;

      .footer__column-left {
        width: span(14);
        position: relative;
        margin-bottom: 0;
        grid-column: 1 / span 15;
        grid-row: 1 / span 3;

        img {
          width: 100%;
        }

        .form-text {
          top: 50%;
          transform: translate(0, -50%);
          left: 10%;
          margin-left: auto;
          margin-right: auto;

          .subtext {
            margin-top: $margin-normal;
            padding-right: span(2);
          }
          .email-wrapper {
            margin-top: $margin-normal;

            .email {
              padding: 10px;
              width: span(9);
            }
            .right-arrow {
              height: 35px;
              width: 35px;
              &:after {
                height: 22px;
                width: 22px;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              }
            }
          }
        }
      }

      .social-flex {
        grid-column: 18 / span 10;
        grid-row: 2;
        justify-content: space-around;
        margin-bottom: $margin-extra-large * 1.5;

        .footer__column-right {
          .channel-inner {
            .small-title {
              margin-bottom: $margin-normal;
            }

            .mail-wrapper {
              display: flex;
              align-items: center;
              flex-direction: row;
              margin-bottom: $margin-normal;

              .mail-icon {
                position: relative;
                height: 20px;
                width: 20px;
                &:after {
                  height: 20px;
                  width: 20px;
                }
              }

              .email-para {
                margin-left: $margin-small;
              }
            }

            .phone-wrapper {
              display: flex;
              align-items: center;
              flex-direction: row;
              margin-bottom: $margin-normal;

              .phone-icon {
                height: 20px;
                width: 20px;
                &:after {
                  height: 20px;
                  width: 20px;
                }
              }
              .phone-number {
                margin-left: $margin-small;
              }
            }
          }
        }

        .footer__column-socials {
          .socials {
            a {
              margin-bottom: $margin-normal;
            }
          }
        }
      }

      .column-bottom {
        grid-column: 18 / span 5;
        grid-row: 3;
      }
    }

    .medium-relative {
      height: 50px;
      .medium-wrapper {
        top: -80%;
        left: 38%;

        .medium-block {
          width: span(4);
        }
      }
    }
  }
}
</style>
