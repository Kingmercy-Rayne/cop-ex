<template>
  <div class="upcoming view">
    <div class="upcoming__header">
      <h4>Upcoming</h4>
      <span class="label">4</span>
    </div>
    <div class="upcoming__body">
      <div class="titular">Backlog</div>
      <div class="t1">Todo</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Upcoming',
};
</script>

<style lang="stylus" scoped>
.upcoming {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: var(--text-color--alt);

  .upcoming__header {
    margin-top: 2em;
    display: flex;
    align-items: center;

    span {
      margin-left: 1em;
    }
  }

  .upcoming__body {
    width: 50%;
    display: grid;
    border: solid thin yellow;

    .titular {
      grid-column: 1 / span 4;
      grid-row: 1 / 2;
      background: blue;
    }

    .t1 {
      grid-column: 5 / span 4;
      grid-row: 1 / 2;
      background: crimson;
    }
  }
}
</style>
