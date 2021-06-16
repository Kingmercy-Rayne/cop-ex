<template>
  <div class="input-item--select">
    <span class="input-title h6">Status</span>
    <select name="status" id="status" class="label shadow--default">
      <option value="All"></option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'InputItemSelect',
};
</script>

<style lang="stylus" scoped>
.input-item--select {
  display: flex;
  flex-direction: column;
  margin-right: 4vw;
  min-width: 8vw;

  .option-title {
    color: var(--text-color--primary);
    // color: var(--semantic-color--success);
    font-family: var(--font-family--alt);
    padding: 0.2vh 0.2vw;
  }

  select {
    border-radius: 8px;
    padding: 0.8vh 0.2vw;
    border: none;
    color: var(--text-color--primary);
  }
}
</style>
