<template>
  <div class="event view">
    <TheAppBar />
    <div class="event-container">
      <div class="event-col1">
        <EventMainBanner />
        <!-- eslint-disable -->
        <EventSectionCard
          title="Description"
          value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati dignissimos illum odit blanditiis assumenda voluptatum maxime quia consequatur eaque maiores provident vel delectus molestiae quisquam beatae. Quod fugiat atque mollitia tenetur veniam molestias ea culpa sit dolores, incidunt iste."
        />
        <!-- eslint-enable -->
      </div>
      <div class="event-col2">
        <EventSectionCard title="location" value="SMX convention center" icon="las la-map-marker" />
        <EventSectionCard
          title="registration link"
          value="https://cop-ex.vercel.app/register/sx75f"
          icon="la-globe"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TheAppBar from '@/components/TheAppBar.vue';
import EventMainBanner from '@/components/Event/EventMainBanner.vue';
import EventSectionCard from '@/components/Event/EventSectionCard.vue';

export default {
  name: 'Event',
  components: {
    TheAppBar,
    EventMainBanner,
    EventSectionCard,
  },
};
</script>

<style lang="stylus" scoped>
.event {
  width: 100%;

  .event-container {
    width: 100%;
    display: grid;
    grid-template-columns: 2.5fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 10px;
    grid-template-areas: '. .';
    justify-items: stretch;
  }

  .event-col1 {
    padding: 2vh 0;
  }

  .event-col2 {
    padding: 2vh 0;
  }
}
</style>
