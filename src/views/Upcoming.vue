<template>
  <div class="upcoming view">
    <div class="upcoming__header">
      <h4>Upcoming</h4>
      <span class="label">4</span>
    </div>
    <div class="upcoming__body">
      <EventClassificationHeader
        text="pending review"
        :config="1"
        configIcon="fa-spinner"
        count="1"
      />
      <EventClassificationHeader text="reviewed" :config="2" configIcon="fa-adjust" count="2" />
      <div class="event-classification-column">
        <EventCard :hasConceptPaper="false" program="xp" />
      </div>
      <div class="event-classification-column2">
        <EventCard :hasConceptPaper="true" program="cop" />
        <EventCard :hasConceptPaper="true" program="xp" :isActive="true" />
        <EventCard :hasConceptPaper="true" program="xp" />
      </div>
    </div>
  </div>
</template>

<script>
import EventClassificationHeader from '@/components/Upcoming/EventClassificationHeader.vue';
import EventCard from '@/components/Upcoming/EventCard.vue';

export default {
  name: 'Upcoming',
  components: { EventClassificationHeader, EventCard },
};
</script>

<style lang="stylus" scoped>
.upcoming {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: var(--text-color--alt);

  .upcoming__header {
    margin-top: 2em;
    display: flex;
    align-items: center;
    display: none;

    span {
      margin-left: 1em;
    }
  }

  .upcoming__body {
    width: 55%;
    display: grid;
    gap: 0 1.5vw;

    // border: solid thin yellow;
    .event-classification-header {
      grid-column: 5 / span 5;
      grid-row: 1 / span 3;

      &:first-of-type {
        grid-column: 1 / span 4;
      }
    }

    .event-classification-column {
      // background: white;
      grid-column: 1 / span 4;
      grid-row: 4 / auto;
    }

    .event-classification-column2 {
      grid-column: 5 / span 5;
      // background: red;
      grid-row: 4 / auto;
    }
  }
}
</style>
