<template>
  <div class="overview view">
    <The-App-Bar />
    <div class="dashboard__header">
      <h3 class="view__title">Dashboard</h3>
      <span class="view__subtitle h6"
        >Overview on the community outreach and Extension Programs</span
      >
    </div>
    <div class="dashboard__main">
      <EventStatus />
      <AdaptedCommunityCard />
      <RequirementsCard />
    </div>
    <!-- <div class="dashboard-carousel">
      <OverviewCarousel />
    </div> -->
    <OverviewTrend />
  </div>
</template>

<script>
// @ is an alias to /src
import TheAppBar from '@/components/TheAppBar.vue';
import EventStatus from '@/components/EventStatus.vue';
import AdaptedCommunityCard from '@/components/AdaptedCommunityCard.vue';
import RequirementsCard from '@/components/RequirementsCard.vue';
// import OverviewCarousel from '@/components/OverviewCarousel.vue';
import OverviewTrend from '@/components/VOverviewTrend.vue';

export default {
  name: 'Home',
  components: {
    TheAppBar,
    EventStatus,
    AdaptedCommunityCard,
    RequirementsCard,
    // OverviewCarousel,
    OverviewTrend,
  },
};
</script>

<style lang="stylus" scoped>
.overview {
  // border: solid thin yellow;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: var(--text-color--alt);

  .dashboard__header {
    flex: 1;
    margin-top: 2em;
  }

  .dashboard__main {
    // width: 100%;
    // TODO: WHY CAN'T I SELECT NTH-CHILDREN?
    // border: solid thin yellow;
    display: grid;
    gap: 2vh 2vw;
    width: 100%;

    .event-status {
      // background: blue;
      grid-column: 1 / span 7;
      grid-row: 1 / 3;
    }

    .adapted-community-card {
      // background: crimson;
      grid-column: 8 / span 4;
      grid-row: 1;
      // TODO: clamp
      min-width: 7vw;
    }

    .requirements-card {
      // background: green;
      grid-column: 8 / span 4;
      grid-row: 2;
    }
  }

  .dashboard-carousel {
    max-width: 90vw;
    overflow-x: hidden;
    display: flex;
    align-items: center;
    flex: 5;
  }
}
</style>
