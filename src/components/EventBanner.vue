<template>
  <div class="event-banner shadow--default">
    <div class="event-backdrop">
      <img :src="require('@/assets/img/event_banner2.jpg')" alt="" />
      <div class="event-title h5">
        The Generalizability and Interpretability of Neural Language Models
      </div>
    </div>
    <div class="option-row event-profile-section">
      <div class="event-author">
        <img
          class="avatar shadow--default"
          src="@/assets/img/cesar-rincon-XHVpWcr5grQ-unsplash.jpg"
        />
        <EventBannerOption option-key="Added by" option-item="XP Coordinator" />
      </div>
      <EventBannerOption option-key="Registered Participants" option-item="23" />
      <IconButton text="Close Registration" icon="la-ban" is-compact="true" is-reverse="true" />
    </div>
    <div class="option-row">
      <EventBannerOption option-key="Date" option-item="24/09/2021" />
      <EventBannerOption option-key="Time" option-item="10am-3pm" />
      <EventBannerOption option-key="Location" option-item="SMX Convention Center" />
    </div>
    <EventPermalink />
  </div>
</template>

<script>
import EventBannerOption from '@/components/EventBannerOption.vue';
import IconButton from '@/components/IconButton.vue';
import EventPermalink from '@/components/EventPermalink.vue';

export default {
  name: 'EventBanner',
  components: {
    EventBannerOption,
    IconButton,
    EventPermalink,
  },
};
</script>

<style lang="stylus" scoped>
.event-banner {
  position: relative;
  min-height: 500px;
  width: 55%;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 0.5em;

  .event-backdrop {
    position: relative;
    z-index: 5;
    height: 200px;
    background: green;
    border-radius: 0.5em;

    // backdrop-filter: grayscale(20);
    // margin: 0 1.4rem;
    img {
      position: relative;
      z-index: 2;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    .event-title {
      z-index: 10;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      min-height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 0.5em;
      background: rgba(0, 0, 0, 0.8);
      color: #fff;
      text-align: center;
      border-top-left-radius: 0.5em;
      border-top-right-radius: 0.5em;

      &:before {
        position: absolute;
        width: 100%;
        height: 100%;
        filter: opacity(0);
      }
    }
  }

  .option-row {
    display: flex;
    margin: 2em 0;
    justify-content: space-around;
    align-items: center;
  }

  .event-profile-section {
    // background: green;
    button {
      background: var(--button-bg--primary);
    }

    .event-author {
      display: flex;
      padding: 0.3em 0.4em;
      align-items: center;
      justify-content: space-between;

      span {
        margin: 0 0.5em;
      }
    }
  }
}
</style>
