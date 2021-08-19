<template>
  <ul class="socials">
    <li v-for="link in links" :key="link.url">
      <a :class="link.type" :href="link.url" target="_blank" rel="noreferrer noopener" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    links: {
      type: Array
    }
  },
}
</script>

<style lang="scss">
@import '~/assets/styles/module_base.scss';

$iconSize: 22px;

ul.socials {
  width: 100%;
  margin: -9px 0 $margin-normal -9px;
  display: flex;
  li {
    display: flex;
    a {
      position: relative;
      width: 40px;
      height: 40px;
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: $iconSize;
        height: $iconSize;
        margin: -11px 0 0 -11px;
      }
      &.twitter:after {
        @include icon("instagram", $white, true);
      }
      &.linkedin:after {
        @include icon("linkedin", $white, true);
      }
      &.discord:after {
        @include icon("twitter",$white, true);
      }
    }
  }
  @include can-hover {
    li {
      a {
        &:after {
          transition: background-image $speed-demon $ease-out;
        }
        &.twitter:hover:after {
          @include icon("instagram",$dark-blue, false);
        }
        &.linkedin:hover:after {
          @include icon("linkedin", $dark-blue, false);
        }
        &.discord:hover:after {
          @include icon("twitter",$dark-blue, false);
        }
      }
    }
  }
}
</style>
