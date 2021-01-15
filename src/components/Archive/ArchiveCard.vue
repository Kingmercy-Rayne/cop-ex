<template>
  <div class="archive-card p" @click="navigate">
    <span class="date-cell">8 July, 2020</span>
    <span class="description-cell">Connectivity and the importance of IOT devices in...</span>
    <span class="event-cell" v-if="tabIndex === 1">COP</span>
    <div class="status-cell" :style="{ color: 'var(--semantic-color--success)' }">
      <span>success</span>
    </div>
    <span class="location-cell">Location</span>
    <span class="user-cell" v-if="tabIndex !== 1">
      <img class="avatar" src="@/assets/img/cesar-rincon-XHVpWcr5grQ-unsplash.jpg" />
    </span>
    <span class="trend-cell" v-if="tabIndex === 2">Trend here</span>
  </div>
</template>

<script>
export default {
  name: 'ArchiveCard',
  props: ['tabIndex'],
  methods: {
    navigate() {
      this.$router.push('/event');
    },
  },
};
</script>

<style lang="stylus" scoped>
.archive-card {
  position: relative;
  display: flex;
  padding: 0.8em 0;
  align-items: center;
  background: var(--bg-color--alt);
  color: var(--text-color--alt);
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    left: 3%;
    right: 3%;
    bottom: 0;
    opacity: 0.2;
    border-bottom: solid thin var(--border-color--primary);
  }

  & > * {
    display: flex;
    justify-content: center;
    flex: 10%;
    flex-grow: 2;
    color: var(--text-color--alt);
  }

  .description-cell {
    justify-content: center;
    flex-grow: 8;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .event-cell {
    flex-grow: 0;
  }

  .user-cell {
    flex-grow: 0;

    .avatar {
      vertical-align: middle;
      width: 3rem;
      height: 3rem;
      // width: max(2rem, 35px);
      // height: max(3rem, 35px);
      width: clamp(1.5rem, 20px, 2rem);
      height: clamp(1.5rem, 20px, 2rem);
      border-radius: 50%;
      // background: blue;
    }
  }

  .status-cell {
    flex-grow: 1;

    span {
      background: var(--bg-color--primary);
      padding: 0 0.4em;
    }
  }
}
</style>
