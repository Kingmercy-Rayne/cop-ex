<template>
  <div class="overview view">
    <The-App-Bar />
    <DashboardHeader title="Overview" subtitle="Overview of the community outreach program" />
    <div class="dashboard__main">
      <EventStatus />
      <AdaptedCommunityCard />
      <RequirementsCard />
    </div>
    <!-- <div class="dashboard-carousel">
      <OverviewCarousel />
    </div> -->
    <div class="dashboard__sub">
      <UserActivityOverview />
      <OverviewTrend />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TheAppBar from '@/components/TheAppBar.vue';
import DashboardHeader from '@/components/DashboardHeader.vue';
import EventStatus from '@/components/EventStatus.vue';
import AdaptedCommunityCard from '@/components/AdaptedCommunityCard.vue';
import RequirementsCard from '@/components/RequirementsCard.vue';
// import OverviewCarousel from '@/components/OverviewCarousel.vue';
import OverviewTrend from '@/components/VOverviewTrend.vue';
import UserActivityOverview from '@/components/UserActivityOverview.vue';

export default {
  name: 'Home',
  components: {
    TheAppBar,
    DashboardHeader,
    EventStatus,
    AdaptedCommunityCard,
    RequirementsCard,
    // OverviewCarousel,
    OverviewTrend,
    UserActivityOverview,
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
    margin-bottom: 1.5em;
  }

  .dashboard__main {
    // width: 100%;
    // TODO: WHY CAN'T I SELECT USING NTH-CHILD?
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

  .dashboard__sub {
    display: grid;
    gap: 1.5vh 1.5vw;
    width: 100%;
    margin-top: 1em;

    & > * {
    }

    .overview-trend {
      // display: none;
      grid-column: 4 / span 6;
      grid-row: 1;
    }

    .user-activity-overview {
      grid-column: 1 / span 3;
      grid-row: 1;
    }
  }

  .dashboard-carousel {
    max-width: 90vw;
    // width: 100%;
    overflow-x: hidden;
    display: flex;
    align-items: center;
    flex: 5;
  }
}
</style>
