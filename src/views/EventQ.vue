<template>
  <div class="eventq view">
    <EventBanner />
    <EventSidebar />
  </div>
</template>

<script>
import EventBanner from '@/components/EventBanner.vue';
import EventSidebar from '@/components/Event/EventSidebar.vue';

export default {
  name: 'EventQ',
  components: { EventBanner, EventSidebar },
};
</script>

<style lang="stylus" scoped>
.eventq {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
