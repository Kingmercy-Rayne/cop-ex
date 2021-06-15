<template>
  <div class="dashboard__header">
    <h3 class="view__title">{{ title }}</h3>
    <span class="view__subtitle h6">{{ subtitle }}</span>
  </div>
</template>

<script>
export default {
  name: 'DashboardHeader',
  props: ['title', 'subtitle'],
};
</script>

<style lang="stylus" scoped>
.dashboard__header {
  flex: 1;
  margin-top: 2em;
  margin-bottom: 1.5em;
}
</style>
