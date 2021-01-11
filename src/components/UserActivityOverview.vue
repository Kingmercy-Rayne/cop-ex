<template>
  <div class="user-activity-overview">
    <h5>User Activity Overview</h5>
    <UserActivityOverviewChart :width="120" :height="320" />
  </div>
</template>

<script>
import UserActivityOverviewChart from '@/components/UserActivityOverviewChart.vue';

export default {
  name: 'UserActivityOverview',
  components: {
    UserActivityOverviewChart,
  },
};
</script>

<style lang="stylus" scoped>
.user-activity-overview {
  // flex-basis: 30%;
  display: flex;
  flex-direction: column;
  margin: 1.5em 0;
  padding: 1.2em 1.5em;
  border-radius: 8px;
  background: var(--neutral-white);
}
</style>
