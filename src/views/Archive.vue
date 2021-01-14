<template>
  <div class="archive view">
    <div class="archive__header">
      <h4>Archive</h4>
      <!-- <span class="label">47</span> -->
    </div>
    <div class="archive-classifier">
      <div
        class="archive-classifier__item h6"
        :class="{
          'archive-classifier__item--active': tabIndex === 1,
          'shadow--default': tabIndex === 1,
        }"
        @click="tabIndex = 1"
      >
        <span>All Events</span>
        <span class="label">18</span>
      </div>
      <div
        class="archive-classifier__item h6"
        :class="{
          'archive-classifier__item--active': tabIndex === 2,
          'shadow--default': tabIndex === 2,
        }"
        @click="tabIndex = 2"
      >
        <span>COP</span>
        <span class="label">12</span>
      </div>
      <div
        class="archive-classifier__item h6"
        :class="{ 'archive-classifier__item--active': tabIndex === 3 }"
        @click="tabIndex = 3"
      >
        <span>XP</span>
        <span class="label">8</span>
      </div>
    </div>
    <ArchiveTabXp v-if="tabIndex === 3" :tab-index="tabIndex" />
    <ArchiveTabCop v-else-if="tabIndex === 2" :tab-index="tabIndex" />
    <ArchiveTabAll v-else :tab-index="tabIndex" />
  </div>
</template>

<script>
import ArchiveTabAll from '@/components/Archive/ArchiveTabAll.vue';
import ArchiveTabCop from '@/components/Archive/ArchiveTabCop.vue';
import ArchiveTabXp from '@/components/Archive/ArchiveTabXp.vue';

export default {
  name: 'Archive',
  components: {
    ArchiveTabAll,
    ArchiveTabCop,
    ArchiveTabXp,
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
    cursor: pointer;

    & > * {
      flex-basis: 10%;
    }

    // border: solid thin green;
    .archive-classifier__item {
      min-width: 120px;
      padding: 0.6em 1.2em;
      margin-right: 0.1em;
      // border: solid thin crimson;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .label {
        background: var(--bg-color--primary);
        padding: 0.1em 0.2em;
        min-width: 2.4em;
        margin-left: 0.5em;
        text-align: center;
      }
    }
  }

  .archive-tab {
    // TODO: Delete
    width: 90%;
    min-height: 400px;
    transition: all 300ms cubic-bezier(1, 0.445, 0.255, 0.64);
  }

  .archive-classifier__item--active {
    background: var(--bg-color--alt);
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    transition: all 300ms cubic-bezier(1, 0.445, 0.255, 0.64);
  }
}
</style>
