<template>
  <div class="department-list">
    <DepartmentListItem department="All" img="medal" />
    <DepartmentListItem department="Aeronautical Engineering" img="russia" />
    <DepartmentListItem department="Civil Engineering" img="family" />
    <DepartmentListItem department="Computer Engineering" img="coat-of-arms 2" />
    <DepartmentListItem department="Electrical Engineering" img="chinese-crested" />
    <DepartmentListItem department="Electronics and Communication Engineering" img="medieval" />
    <DepartmentListItem department="Industrial Engineering" img="oriental-pearl-tower" />
    <DepartmentListItem department="Mechanical Engineering" img="lantern" />
  </div>
</template>

<script>
import DepartmentListItem from '@/components/Services/DepartmentListItem.vue';

export default {
  name: 'DepartmentList',
  components: {
    DepartmentListItem,
  },
};
</script>

<style lang="stylus" scoped></style>
