<template>
  <div class="overview">
    <The-App-Bar />
    <div class="dashboard__header">
      <h3 class="view__title">Dashboard</h3>
      <span class="view__subtitle h6"
        >Overview on the community outreach and Extension Programs</span
      >
    </div>
    <div class="dashboard__main">
      <EventStatus />
      <div class="poe poe2"></div>
      <div class="poe poe3"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TheAppBar from '@/components/TheAppBar.vue';
import EventStatus from '@/components/EventStatus.vue';

export default {
  name: 'Home',
  components: {
    TheAppBar,
    EventStatus,
  },
};
</script>

<style lang="stylus" scoped>
.overview {
  // border: solid thin yellow;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: calc(100vh - 16px);
  color: var(--text-color--alt);

  .dashboard__main {
    // width: 100%;
    // TODO: WHY CAN'T I SELECT NTH-CHILDREN?
    // border: solid thin yellow;
    display: grid;
    gap: 2vh 2vw;
    width: 100%;

    .poe {
      // width: 200px;
      // height: 80px;
      padding: 3rem;
    }

    .event-status {
      // background: blue;
      grid-column: 1 / span 7;
      grid-row: 1 / 3;
    }

    .poe2 {
      background: crimson;
      grid-column: 8 / span 4;
      grid-row: 1;
    }

    .poe3 {
      background: green;
      grid-column: 8 / span 4;
      grid-row: 2;
      padding: 5em 0;
    }
  }
}
</style>
