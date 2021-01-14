<template>
  <div class="archive-tab archive-tab--xp">
    <div class="archive-tab__header archive-tab__header--all h6">
      <span class="date-cell">Date</span>
      <span class="description-cell">Description</span>
      <span class="status-cell">Status</span>
      <span class="location-cell">Location</span>
      <span class="user-cell">Created by</span>
    </div>
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
  name: 'ArchiveTabXp',
  components: {
    ArchiveCard,
  },
  props: ['tabIndex'],
};
</script>

<style lang="stylus" scoped>
.archive-tab--xp {
}
</style>
