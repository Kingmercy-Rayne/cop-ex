<template>
  <button class="icon-button">
    <i class="fas fa las la la-long-arrow-alt-left"></i>
    <span class="p">Previous</span>
  </button>
</template>

<script>
export default {
  name: 'IconButton',
};
</script>

<style lang="stylus" scoped>
.icon-button {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
//   background: var(--button-bg--primary);
  background: var(--primary-color--lighter400);
  color: var(--text-color--tri);
  border-radius: 5px;

  i {
    font-size: 20px;
    // border: solid thin green;
    // padding: 0;
    margin: 0 0.6em;
  }

  span {
    margin: 0 1em;
    // color: var(--text-color--tri);
  }
}
</style>
