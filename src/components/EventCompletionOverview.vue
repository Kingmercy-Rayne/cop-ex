<template>
  <div class="event-completion-overview">
    <!-- <span class="event-completion__header label">9 out of 16 events completed</span> -->
    <div class="event-completion-graph">
      <bars
        :data="[7, 2, 5, 9, 5, 10, 3, 5]"
        :labelData="['AE', 'AR', 'CE', 'CPE', 'ECE', 'EE', 'IE', 'ME']"
        :gradient="['#ffbe88', '#ff93df']"
        :barWidth="3"
        :rounding="2"
        labelColor="#3a3878"
        :labelRotate="65"
        :labelSize="1.0"
        :growDuration="1"
        height="170"
      >
      </bars>
    </div>
    <!-- <div class="event-completion-graph__key">
      <div class="graph-key-item">
        <div class="graph-key-item__circle"></div>
        <span class="graph-key-item__text label">Total</span>
      </div>
      <div class="graph-key-item">
        <div class="graph-key-item__circle"></div>
        <span class="graph-key-item__text label">COP</span>
      </div>
      <div class="graph-key-item">
        <div class="graph-key-item__circle"></div>
        <span class="graph-key-item__text label">Extension</span>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'EventCompletionOverview',
};
</script>

<style lang="stylus" scoped>
.event-completion-overview {
  padding: 1em 1.2em;
  background: var(--bg-color--primary);
  border-radius: 6px;

  .event-completion__header {
    color: var(--neutral-grey--dark);
  }

  .event-completion-graph {
    min-height: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0;
    padding: 1vh 0;
  }

  .event-completion-graph__key {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .graph-key-item {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .graph-key-item__circle {
        border-radius: 50%;
        width: 9px;
        height: 9px;
        background: var(--text-color--alt);
      }

      .graph-key-item__text {
        margin: 0 1em;
      }
    }
  }
}
</style>
