<template>
  <div class="event-section-card shadow--default">
    <div class="event-section-card__title label">{{ title }}</div>
    <div class="event-section-card__value h6">
      <i class="fas fa las la" :class="icon"></i>

      <span>{{ value }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventSectionCard',
  props: ['title', 'value', 'icon'],
};
</script>

<style lang="stylus" scoped>
.event-section-card {
  width: 100%;
  min-height: 5vh;
  margin-top: 2vh;
  background: var(--bg-color--alt);
  border-radius: 8px;
  padding: 1vh 1.5vw;

  .event-section-card__title {
    text-transform: capitalize;
  }

  .event-section-card__value {
    display: flex;
    align-items: center;
    margin-top: 1vh;

    i {
      font-size: 1.4rem;
      margin-right: 1vw;
      color: var(--text-coor--primary);
    }
  }
}
</style>
