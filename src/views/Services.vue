<template>
  <div class="services view">
    <TheAppBar />
    <!-- <DashboardHeader title="Services" subtitle="Listing for Community Outreach events" /> -->
    <SortOptions />
    <div class="event-list">
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
  </div>
</template>

<script>
import TheAppBar from '@/components/TheAppBar.vue';
// import DashboardHeader from '@/components/DashboardHeader.vue';
import SortOptions from '@/components/Services/SortOptions.vue';
import EventCard from '@/components/Services/EventCard.vue';

export default {
  name: 'Services',
  components: {
    TheAppBar,
    // DashboardHeader,
    SortOptions,
    EventCard,
  },
  data() {
    return {
      hasSelected: false,
    };
  },
};
</script>

<style lang="stylus" scoped>
.department-list {
  width: 100%;
  min-height: 85vh;
  // TODO: USELESS
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 2em;
}

.event-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 2vh;
}
</style>
