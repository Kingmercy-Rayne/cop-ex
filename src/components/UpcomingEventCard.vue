<template>
  <div class="upcoming-event-card">
    <div class="upcoming-event-card__header">
      <span class="label">ME</span>
      <i class="las la-ellipsis-v"></i>
    </div>
    <div class="upcoming-event-card__body">
      <span class="h4">18</span>
      <span class="label">August</span>
      <span class="h6-alt">Bilibid</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UpcomingEventCard',
};
</script>

<style lang="stylus" scoped>
.upcoming-event-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
  // width: 140px;
  opacity: 0.9;
  flex: 5;
  margin-right: 1em;
  min-height: 170px;
  padding: 0.6em 1em;
  border-radius: 8px;
  background: var(--primary-color--lighter400);
  color: var(--text-color--tri);

  .upcoming-event-card__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: auto;

    i {
      font-size: 20px;
    }
  }

  .upcoming-event-card__body {
    display: flex;
    flex-direction: column;
    margin: 1.2em 0;
  }
}

.upcoming-event-card:hover {
  transform: scale(1.02);
}
</style>
