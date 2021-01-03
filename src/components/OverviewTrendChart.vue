<template>
  <div class="overview-trend-chart shadow--default">
    <!-- <trend
      :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
      :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
      auto-draw
      smooth
    >
    </trend> -->
    <div class="trend-chart__header">
      <h5>Program Frequency over previous semesters</h5>
      <!-- <span class="label">Comparing Events over previous semesters</span> -->
    </div>

    <TrendChart
      :datasets="[
        {
          data: [1, 5, 2, 10, 4, 2, 8],
          smooth: true,
          fill: false,
          stroke: true,
          fill: true,
        },
        {
          data: [7, 1, 4, 3, 2, 6, 1],
          smooth: true,
          fill: true,
        },
      ]"
      :grid="{
        verticalLines: true,
        verticalLinesNumber: 1,
        horizontalLines: true,
        horizontalLinesNumber: 1,
      }"
      :labels="{
        xLabels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        yLabels: 5,
      }"
      :min="0"
      :activeLineParams="{
        className: 'overview-trend-chart',
        fill: 'red',
      }"
    >
    </TrendChart>
  </div>
</template>

<script>
export default {
  name: 'OverviewTrendChart',
};
</script>

<style lang="stylus" scoped>
.overview-trend-chart {
  flex: 5;
  width: 60%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1em 0;
  padding: 1.2em 1.2em;
  background: var(--neutral-white);
  border-radius: 8px;

  .trend-chart__header {
    margin-bottom: 0.8em;
  }

  svg {
    path {
      fill: green !important;
    }
  }
}
</style>
