<template>
  <div class="department-list-item shadow--default">
    <img :src="require(`@/assets/img/crests/${img}.svg`)" alt="" />
    <span class="h5">{{ department }}</span>
  </div>
</template>

<script>
export default {
  name: 'DepartmentListItem',
  props: ['department', 'img'],
};
</script>

<style lang="stylus" scoped>
.department-list-item {
  min-width: 170px;
  max-width: 170px;
  min-height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.2em 0.9em;
  background: #fff;
  margin: 0 2vw;
  border-radius: 0.5em;

  // text-align: center;
  img {
    position: relative;
    width: 3em;
    height: 3em;
  }

  span {
    margin-top: auto;
    text-align: center;
  }
}
</style>
