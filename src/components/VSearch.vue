<template>
  <div class="search-container p shadow--default">
    <input type="search" name="search" class="search-input h6" placeholder="Search" />
    <i class="fa fas fa-search"></i>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.search-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.1em 0.1em 0.1em 0.4em;
  margin: 1em 0;
  // border: solid thin var(--border-color--primary);
  border-radius: 0.5em;
  background: var(--bg-color--alt);

  i {
    // border: solid thin purple;
    padding: 0.1em 1em;
    // font-size: 20px;
    cursor: pointer;
  }

  .search-input {
    min-width: 15vw;
    padding: 0.1em 0.5em;
    border: none;
    outline: none;
    background: none;
    font-family: var(--font-family--alt);
    color: var(--text-color--alt);
  }
}
</style>
