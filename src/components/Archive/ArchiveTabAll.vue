<template>
  <div class="archive-tab archive-tab--all">
    <div class="archive-tab__header archive-tab__header--all h6">
      <span class="date-cell">Date</span>
      <span class="description-cell">Description</span>
      <span class="event-cell">Event</span>
      <span class="status-cell">Status</span>
      <span class="location-cell">Location</span>
    </div>
    <ArchiveCard :tab-index="tabIndex" />
    <ArchiveCard :tab-index="tabIndex" />
    <ArchiveCard :tab-index="tabIndex" />
    <ArchiveCard :tab-index="tabIndex" />
    <ArchiveCard :tab-index="tabIndex" />
    <ArchiveCard :tab-index="tabIndex" />
    <ArchiveCard :tab-index="tabIndex" />
    <ArchiveCard :tab-index="tabIndex" />
    <ArchiveCard :tab-index="tabIndex" />
  </div>
</template>

<script>
import ArchiveCard from '@/components/Archive/ArchiveCard.vue';

export default {
  name: 'ArchiveTabAll',
  components: {
    ArchiveCard,
  },
  props: ['tabIndex'],
};
</script>

<style lang="stylus">
.archive-tab {
  // width: 85%;
  min-height: 400px;

  .archive-tab__header {
    display: flex;
    background: var(--bg-color--alt);
    // padding: 0 0.8em;
    color: var(--text-color--primary);

    & > * {
      padding: 0.8em 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 10%;
      flex-grow: 2;
    }

    .description-cell {
      flex-grow: 8;
    }

    .event-cell {
      flex-grow: 0;
    }

    .status-cell {
      flex-grow: 1;
    }

    .user-cell {
      flex-grow: 0;
    }
  }
}
</style>
