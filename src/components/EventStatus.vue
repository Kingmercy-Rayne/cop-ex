<template>
  <div class="event-status shadow--default">
    <h5>Event Status</h5>
    <div class="event-status__body">
      <div class="event__body-item event__card-list">
        <span class="event__body-item__header label">
          <i class="las la-stopwatch"></i>
          Due Soon
        </span>
        <div class="event-card-list">
          <UpcomingEventCard />
          <!-- <div class="spacer"></div> -->
          <UpcomingEventCard />
        </div>
      </div>
      <div class="event__body-item">
        <span class="event__body-item__header label">
          <i class="las la-infinity"></i>
          Event Completion Overview
        </span>
        <EventCompletionOverview />
      </div>
    </div>
  </div>
</template>

<script>
import UpcomingEventCard from '@/components/UpcomingEventCard.vue';
import EventCompletionOverview from '@/components/EventCompletionOverview.vue';

export default {
  name: 'EventStatus',
  components: { UpcomingEventCard, EventCompletionOverview },
};
</script>

<style lang="stylus" scoped>
.event-status {
  padding: 1.2em 1.2em;
  background: var(--bg-color--alt);
  border-radius: 8px;

  .event-status__body {
    display: flex;
    justify-content: space-between;
    // border: solid thin green;
    width: 100%;

    .event__body-item {
      min-width: 50%;
      display: flex;
      flex-direction: column;

      .event__body-item__header {
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
    }

    .event-card-list {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      // border: solid thin yellow;
    }
  }
}
</style>
