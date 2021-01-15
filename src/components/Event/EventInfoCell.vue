<template>
  <div class="event-info-cell">
    <div class="event-info-cell__title h5">{{ title }}</div>
    <div class="event-info-cell__subtitle p">{{ subtitle }}</div>
  </div>
</template>

<script>
export default {
  props: ['title', 'subtitle'],
};
</script>

<style lang="stylus" scoped>
.event-info-cell {
  margin-top: 2em;

  .event-info-cell__title {
    color: var(--text-color--alt);
    text-transform: capitalize;
  }

  .event-info-cell__subtitle {
    // color: var(--text-color--primary);
  }
}
</style>
