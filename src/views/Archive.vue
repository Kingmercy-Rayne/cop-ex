<template>
  <div class="archive view">
    <div class="archive__header">
      <h4>Archive</h4>
      <span class="label">18</span>
    </div>
    <div class="archive-classifier">
      <div class="archive-classifier__item h6">
        <span>All Events</span>
        <span class="label">45</span>
      </div>
      <div class="archive-classifier__item h6">
        <span>COP</span>
        <span>45</span>
      </div>
      <div class="archive-classifier__item h6">
        <span>XP</span>
        <span>45</span>
      </div>
    </div>
    <ArchiveTabAll />
  </div>
</template>

<script>
import ArchiveTabAll from '@/components/Archive/ArchiveTabAll.vue';

export default {
  name: 'Archive',
  components: {
    ArchiveTabAll,
  },
  data() {
    return {
      tabIndex: 1,
    };
  },
};
</script>

<style lang="stylus" scoped>
.archive {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: var(--text-color--alt);

  .archive__header {
    margin-top: 2em;
    display: flex;
    align-items: center;

    // display: none;
    span {
      margin-left: 1em;
      color: var(--text-color--primary);
    }
  }

  .archive-classifier {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 2em;

    // border: solid thin green;
    .archive-classifier__item {
      min-width: 100px;
      padding: 0.6em 1.2em;
      margin-right: 0.1em;
      // border: solid thin crimson;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      // background: var(--bg-color--alt);
      // border-radius: 6px;

      // background: crimson;
      & > *:first-child {
        margin-right: 1em;
      }
    }

    & > *:first-child {
      background: var(--bg-color--alt);
      border-radius: 8px;
    }
  }

  .archive-tab {
    width: 100%;
    border: solid thin green;
    min-height: 400px;

    .archive-tab--header {
      display: grid;

      & > *:nth-child(1) {
        grid-column: 1 / span 1;
      }

      & > *:nth-child(2) {
        grid-column: 3 / span 1;
      }

      & > *:nth-child(3) {
        grid-column: 5 / span 1;
      }

      & > *:nth-child(4) {
        grid-column: 7 / span 1;
      }

      & > *:nth-child(5) {
        grid-column: 9 / span 1;
      }
    }
  }
}
</style>
