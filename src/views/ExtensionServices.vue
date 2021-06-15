<template>
  <div class="extension-services view">
    <TheAppBar />
    <TaskList v-if="this.hasSelected" />
    <DepartmentList v-else />
  </div>
</template>

<script>
import TheAppBar from '@/components/TheAppBar.vue';
import DepartmentList from '@/components/ExtensionServices/DepartmentList.vue';
import TaskList from '@/components/ExtensionServices/TaskList.vue';

export default {
  name: 'ExtensionServices',
  components: {
    TheAppBar,
    DepartmentList,
    TaskList,
  },
  data() {
    return {
      hasSelected: true,
    };
  },
};
</script>

<style lang="stylus" scoped>
.department-list {
  width: 100%;
  min-height: 85vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 2em;
}
</style>
