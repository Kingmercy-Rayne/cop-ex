<template>
  <div class="upcoming-event-sidebar shadwow--default">
    <h4>Event Overview</h4>
  </div>
</template>

<script>
export default {
  name: 'VSettings',
};
</script>

<style lang="stylus" scoped>
.upcoming-event-sidebar {
  // TODO: remove magic numbers and add paddings as site variables
  // TODO: add clamp/max for height to combat resizing
  position: absolute;
  z-index: 10;
  right: 10px;
  top: 8px;
  bottom: 8px;
  width: 30%;
  display: flex;
  flex-direction: column;
  padding: 2em 2.2em;
  background: var(--bg-color--alt);
  color: var(--text-color--tri);
  // border: solid thin crimson;
  border-radius: 12px;

  .avatar {
    vertical-align: middle;
    // width: 3rem;
    // height: 3rem;
    width: clamp(1.5rem, 25px, 2rem);
    height: clamp(1.5rem, 25px, 2rem);
    margin-left: 0.2em;
    border-radius: 50%;
    // background: blue;
  }
}
</style>
