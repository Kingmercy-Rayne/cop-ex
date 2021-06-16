<template>
  <div class="event-main-banner shadow--default">
    <div class="event-main-banner__top">
      <img :src="require('@/assets/img/event_banner2.jpg')" alt="" />
      <div class="backdrop"></div>
    </div>
    <div class="event-main-banner__bottom">
      <div class="banner-crest">
        <DepartmentCrest />
      </div>
      <div class="banner__bottom__row">
        <span class="title h5">The impact of AI in neuroscience</span>
        <div class="button-row">
          <IconButton text="Close Registration" icon="la-ban" is-compact="true" is-reverse="true" />
        </div>
      </div>
      <div class="banner__bottom__row banner__bottom__row--alt">
        <EventBannerOption option-key="Date" option-item="24/09/2021" />
        <EventBannerOption option-key="Time" option-item="10am-3pm" />
      </div>
      <div class="banner__bottom__row banner__bottom__row--alt">
        <EventCardSnack title="registered participants" value="37" />
      </div>
    </div>
  </div>
</template>

<script>
import DepartmentCrest from '@/components/Services/DepartmentCrest.vue';
import IconButton from '@/components/IconButton.vue';
import EventBannerOption from '@/components/Event/EventBannerOption.vue';
import EventCardSnack from '@/components/Services/EventCardSnack.vue';

export default {
  name: 'EventMainBanner',
  components: {
    DepartmentCrest,
    IconButton,
    EventBannerOption,
    EventCardSnack,
  },
};
</script>

<style lang="stylus" scoped>
.event-main-banner {
  position: relative;
  width: 100%;
  min-height: calc(240px + 20vh);
  background: var(--bg-color--alt);
  border-radius: 8px;

  .event-main-banner__top {
    z-index: 2;
    position: relative;
    height: calc(150px + 10vh);
    border-radius: 8px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;

    .backdrop {
      position: absolute;
      z-index: 4;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 8px;
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
    }

    img {
      position: relative;
      z-index: 2;
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 8px;
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
    }
  }

  .event-main-banner__bottom {
    z-index: 4;
    position: relative;

    .banner-crest {
      position: absolute;
      left: 2vw;
      top: 2vh;
    }

    .banner__bottom__row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 8vw;
      padding: 2vh 2vw;

      .title {
      }

      .button-row {
        display: flex;
      }
    }

    .banner__bottom__row--alt {
      justify-content: flex-start;
    }
  }
}
</style>
