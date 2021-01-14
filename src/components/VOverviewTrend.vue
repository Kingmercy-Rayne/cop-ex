<template>
  <div class="overview-trend shadow--default" id="overview-trend">
    <!-- <trend
      :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
      :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
      auto-draw
      smooth
    >
    </trend> -->
    <div class="overview-trend__header">
      <h5>Event Frequency</h5>
      <div class="overview-trend__sort label shadow--default">
        Last 6 semesters <i class="fas fa fa-angle-down"></i>
      </div>
      <div class="overview-trend__key">
        <div class="key__item">
          <i :style="{ background: '#9491d6' }"></i>
          <span class="p">Outreach Program</span>
        </div>
        <div class="key__item">
          <i :style="{ background: '#f65758' }"></i>
          <span class="p">Extension Program</span>
        </div>
      </div>
      <!-- <span class="label">Comparing Events over previous semesters</span> -->
    </div>
    <OverviewTrendChart :width="chartWidth" :height="chartHeight" />
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
      // containerWidth: document.getElementById('overview-trend').getBoundingClientRect().width,
      containerWidth: null,
      chartWidth: 670,
      chartHeight: 250,
    };
  },
  created() {
    window.addEventListener('resize', this.updateResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.updateResize);
  },
  methods: {
    updateResize() {
      const amender = 2;
      const element = document.getElementById('overview-trend').getBoundingClientRect();
      this.containerWidth = element.width + amender;
    },
  },
};
</script>

<style lang="stylus" scoped>
.overview-trend {
  // flex: 5;
  // min-width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1.5em 0;
  padding: 1.2em 1.5em;
  background: var(--neutral-white);
  border-radius: 8px;

  .overview-trend__header {
    margin-bottom: 0.8em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    .overview-trend__sort {
      margin-left: 4em;
      padding: 0.4em 0.8em;
      color: var(--text-color--primary);
      border: solid thin var(--border-color--primary);
      display: flex;
      align-items: center;
      cursor: pointer;

      i {
        margin-left: 0.7em;
      }
    }

    .overview-trend__key {
      display: flex;
      flex-direction: column;
      margin-left: auto;

      .key__item {
        flex-basis: 20%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 0.2em;

        i {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
          background: yellow;
        }

        span {
          margin-left: 0.5em;
          color: var(--text-color--primary);
          text-transform: capitalize;
        }
      }
    }
  }
}
</style>
