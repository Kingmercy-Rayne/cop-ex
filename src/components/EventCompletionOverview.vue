<template>
  <div class="event-completion-overview">
    <span class="event-completion__header label">9 out of 16 events completed</span>
    <div class="event-completion-graph"></div>
    <div class="event-completion-graph__key">
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
    </div>
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
    margin: 20vh 0;
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
