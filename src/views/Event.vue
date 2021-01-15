<template>
  <div class="event view">
    <div class="event__main">
      <div class="previous-state">
        <IconButton
          :icon="'la-long-arrow-alt-left'"
          :text="'Back'"
          :is-reverse="true"
          :is-compact="true"
          :is-plain="true"
          :hasBorders="true"
          @click.native="loadPreviousState"
        />
      </div>
      <div class="event__hero-section">
        <img src="@/assets/img/event_banner2.jpg" alt="" />
        <div class="hero__content shadow--default">
          <div class="hero__content__item">
            <span class="hero__content__title h5">Status</span>
            <span class="hero__content__subtitle p status-subtitle">Success</span>
          </div>
          <div class="hero__content__item">
            <span class="hero__content__title h5">Event</span>
            <span class="hero__content__subtitle p">COP</span>
          </div>
          <div class="hero__content__item">
            <span class="hero__content__title h5">Date</span>
            <span class="hero__content__subtitle p">10 July, 2019</span>
          </div>
        </div>
      </div>
      <div class="event-list">
        <EventInfoCell
          title="description"
          subtitle="Connectivity and the importance of IOT devices in the modern world"
        />
        <EventInfoCell title="community" subtitle="Bilibid" />
        <EventInfoCell title="Officer-in-charge" subtitle="Thomas Aguilera" />
        <EventInfoCell title="Coordinating Department(s)" subtitle="ECE" />
        <EventInfoCell
          title="Officers Present"
          subtitle="Dominique Santiago, Alejandro Gomez, Martha White"
        />
        <EventInfoCell title="Sustainability Graph" subtitle="..." />
      </div>
    </div>
    <div class="event__sub">
      <span class="button-row">
        <IconButton
          :icon="'fa-print'"
          :text="'Print'"
          :is-reverse="true"
          :is-compact="true"
          @click.native="loadPreviousStepperState"
        />
      </span>
    </div>
  </div>
</template>

<script>
import IconButton from '@/components/IconButton.vue';
import EventInfoCell from '@/components/Event/EventInfoCell.vue';

export default {
  components: {
    IconButton,
    EventInfoCell,
  },
  methods: {
    loadPreviousState() {
      this.$router.back();
    },
  },
};
</script>

<style lang="stylus" scoped>
.event {
  display: flex;
  background: var(--bg-color--alt);
  padding: 0 4vw;

  .event__main {
    display: flex;
    flex-direction: column;
    width: 60%;
    margin-top: 2em;

    .event__hero-section {
      position: relative;
      z-index: 10;
      margin-top: 1.5em;
      margin-bottom: 3em;
      width: 35vw;
      border-radius: 20px;

      &:after {
        content: '';
        position: absolute;
        z-index: 15;
        left: 0;
        right: 0;
        top: 0;
        bottom: 1%;
        background: rgba(4, 0, 0, 0.05);
        border-radius: 20px;
      }

      img {
        border-radius: 20px;
      }

      .hero__content {
        position: absolute;
        z-index: 20;
        left: 10%;
        right: 10%;
        top: 90%;
        // height: 10vh;
        display: flex;
        justify-content: space-around;
        padding: 0.3em 0.2em;
        background: white;
        border-radius: 8px;

        .hero__content__item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .hero__content__title {
            // text-align: center;
          }

          .hero__content__subtitle {
          }

          .status-subtitle {
            color: var(--semantic-color--success);
            background: var(--bg-color--primary);
            padding: 0.1em 0.5em;
            border-radius: 6px;
          }
        }
      }
    }
  }

  .event-list {
    // TODO: remove this
    display: flex;
    flex-direction: column;
    color: var(--neutral-grey--dark);
    // padding: 0.2em 1em;
  }

  .event__sub {
    display: flex;
    flex-direction: column;
    margin-top: 2em;

    .button-row {
      display: flex;
    }
  }
}
</style>
