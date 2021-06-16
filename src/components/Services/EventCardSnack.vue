<template>
  <div class="event-card-snack">
    <span class="event-card-snack--title h6">{{ title }}:</span>
    <span class="event-card-snack--value label">{{ value }}</span>
  </div>
</template>

<script>
export default {
  name: 'EventCardSnack',
  props: ['title', 'value'],
};
</script>

<style lang="stylus" scoped>
.event-card-snack {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--bg-color--primary);
  border-radius: 8px;
  padding: 0.2vh 0.6vw;
  margin-right: 1vw;
  text-transform: capitalize;

  .event-card-snack--title {
  }

  .event-card-snack--value {
    padding: 0 0.2vw;
  }
}
</style>
