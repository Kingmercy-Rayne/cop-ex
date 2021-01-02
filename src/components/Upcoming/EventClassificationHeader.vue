<template>
  <div class="event-classification-header">
    <i
      class="event-classification-header__type fa fas fa-home"
      :class="configIcon"
      :style="
        config == 2
          ? { color: 'var(--semantic-color--success)' }
          : { color: 'var(--secondary-color)' }
      "
    ></i>
    <h6 class="event-classification-header__text">{{ text }}</h6>
    <span class="event-classification-header__count label">{{ count }}</span>
    <i class="event-classification-header__action fa fas fa-plus" v-if="config == 1"></i>
    <i class="event-classification-header__action fa fas fa-ellipsis-h" v-else></i>
  </div>
</template>

<script>
export default {
  name: 'EventClassificationHeader',
  props: {
    config: {
      type: Number,
      required: true,
      default: 1,
    },
    configIcon: {
      type: String,
      default: 'fa-circle',
    },
    text: {
      type: String,
      required: true,
      default: 'title',
    },
    count: {
      type: String,
      required: true,
      default: '1',
    },
  },
};
</script>

<style lang="stylus" scoped>
.event-classification-header {
  // background: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 0.3em;
  padding: 0.8em 0;
  min-width: 100%;
  border-bottom: solid thin var(--neutral-grey--light);

  .event-classification-header__type {
    font-size: 1.2rem;
    color: var(--semantic-color--success);
  }

  .event-classification-header__text {
    margin: 0 0.8em;
    text-transform: capitalize;
    color: var(--text-color--primary);
  }

  .event-classification-header__count {
    // margin-left: 0.8em;
    font-weight: 600;
    color: var(--text-color--primary);
  }

  .event-classification-header__action {
    margin-left: auto;
    padding: 0.4em;
    // TODO: remove margin-right if redundant
    margin-right: 0.1em;
    font-size: 0.8rem;
    font-weight: 400;
    cursor: pointer;
    color: var(--text-color--primary);
  }
}
</style>
