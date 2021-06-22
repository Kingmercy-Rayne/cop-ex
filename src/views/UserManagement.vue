<template>
  <div class="user-management view">
    <div class="user-management__header">
      <DashboardHeader
        title="User Management"
        subtitle="View and manage User-Account scope and priviledges"
      />
      <IconButton
        icon="la-plus-circle"
        text="Add User"
        is-reverse="true"
      />
    </div>
    <UserList />
  </div>
</template>

<script>
import DashboardHeader from '@/components/DashboardHeader.vue';
import IconButton from '@/components/IconButton.vue';
import UserList from '@/components/Users/UserList.vue';

export default {
  name: 'UserManagement',
  components: {
    DashboardHeader,
    IconButton,
    UserList,
  },
};
</script>

<style lang="stylus" scoped>
.user-management {
  align-items: flex-start;

  .user-management__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
