<template>
  <div class="sort-options">
    <div class="option-item">
      <span class="option-title h6">Status</span>
      <select name="status" id="status" class="label shadow--default">
        <option value="All">Upcoming</option>
        <option value="All">Completed</option>
      </select>
    </div>
    <div class="option-item">
      <span class="option-title h6">Department</span>
      <select name="department" id="department" class="label shadow--default">
        <option value="All">All</option>
        <option value="All">AE</option>
        <option value="All">ARKI</option>
        <option value="All">CE</option>
        <option value="All">CPE</option>
        <option value="All">ECE</option>
        <option value="All">EE</option>
        <option value="All">IE</option>
        <option value="All">ME</option>
      </select>
    </div>
    <div class="option-item">
      <span class="option-title h6">Year</span>
      <select name="department" id="department" class="label shadow--default">
        <option value="All">2018</option>
        <option value="All">2019</option>
        <option value="All">2020</option>
        <option value="All">2021</option>
        <option value="All">2022</option>
        <option value="All">2023</option>
        <option value="All">2024</option>
        <option value="All">2025</option>
      </select>
    </div>
    <div class="option-item">
      <span class="option-title h6">Semester</span>
      <select name="semester" id="department" class="label shadow--default">
        <option value="All">1st</option>
        <option value="All">2nd</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SortOptions',
};
</script>

<style lang="stylus" scoped>
.sort-options {
  width: 100%;
  min-height: 40px;
  margin: 2vh 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .option-item {
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
}
</style>
