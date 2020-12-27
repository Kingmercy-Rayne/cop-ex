<template>
  <div class="event-status">
    <h5>Event Status</h5>
    <div class="event-status__body">
      <div class="event__body-item event__card-list">
        <span class="label">
          <i class="las la-stopwatch"></i>
          Due Soon
        </span>
        <div class="event-card-list">
          <UpcomingEventCard />
          <!-- <div class="spacer"></div> -->
          <UpcomingEventCard />
        </div>
      </div>
      <div class="event__body-item event__completion-overview">
        <span class="label">
          <i class="las la-infinity"></i>
          Event Completion Overview
        </span>
        <div class="event-card-list"></div>
      </div>
    </div>
  </div>
</template>

<script>
import UpcomingEventCard from '@/components/UpcomingEventCard.vue';

export default {
  name: 'EventStatus',
  components: { UpcomingEventCard },
};
</script>

<style lang="stylus" scoped>
.event-status {
  padding: 1em 1.2em;
  background: var(--bg-color--alt);
  border-radius: 8px;

  .event-status__body {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    // border: solid thin green;
    width: 100%;

    span {
      display: flex;
      align-items: center;
      color: var(--text-color--alt);
      text-transform: capitalize;
      margin: 1rem 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      i {
        // padding: 0 1em;
        font-size: 20px;
        margin-right: 0.6vw;
      }
    }

    .event__body-item {
      min-width: 50%;
      // visibility: hidden;
      min-height: 100%;

      .event-card-list {
        width: 100%;
        min-height: 30px;
        display: flex;
        border: solid thin yellow;

        .spacer {
          flex: 1;
        }
      }
    }
  }
}
</style>
