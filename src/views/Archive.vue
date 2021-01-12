<template>
  <div class="archive view">
    <div class="archive__header">
      <h4>Archive</h4>
      <span class="label">18</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Archive',
};
</script>

<style lang="stylus" scoped>
.archive {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: var(--text-color--alt);

  .archive__header {
    margin-top: 2em;
    display: flex;
    align-items: center;

    // display: none;
    span {
      margin-left: 1em;
      color: var(--text-color--primary);
    }
  }
}
</style>
