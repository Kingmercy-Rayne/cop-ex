<template>
  <div class="overview-trend shadow--default">
    <!-- <trend
      :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
      :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
      auto-draw
      smooth
    >
    </trend> -->
    <div class="overview-trend__header">
      <h5>Event Frequency</h5>
      <OverviewTrendChart :width="500" :height="150" />
      <!-- <span class="label">Comparing Events over previous semesters</span> -->
    </div>
  </div>
</template>

<script>
import OverviewTrendChart from '@/components/OverviewTrendChart.vue';

export default {
  // TODO: remove V from filename and imports
  name: 'VOverviewTrend',
  components: { OverviewTrendChart },
  data() {
    return {
      // yo: 'rayne',
    };
  },
};
</script>

<style lang="stylus" scoped>
.overview-trend {
  flex: 5;
  // width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1.5em 0;
  padding: 1.2em 1.2em;
  background: var(--neutral-white);
  border-radius: 8px;

  .overview-trend_header {
    margin-bottom: 0.8em;
  }
}
</style>
