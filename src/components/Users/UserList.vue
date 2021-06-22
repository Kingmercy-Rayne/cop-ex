<template>
  <div class="user-list">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Access</th>
        </tr>
      </thead>
      <tbody>
        <UserListItem />
        <UserListItem />
        <UserListItem />
        <UserListItem />
      </tbody>
    </table>
  </div>
</template>

<script>
import UserListItem from '@/components/Users/UserListItem.vue';

export default {
  name: 'UserList',
  components: {
    UserListItem,
  },
};
</script>

<style lang="stylus" scoped>
.user-list {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 2vh;
  padding: 4vh 4vw;
  background: var(--bg-color--alt);
  border-radius: 8px;

  .user-list__header {
  }

  table {
    border-collapse: collapse;
    text-align: left;
    overflow: hidden;

    thead {
      th {
        padding: 2vh 0;
        text-transform: capitalize;
        color: var(--text-color--alt);
      }
    }

    tbody {
      tr {
        // padding: 2vh 0;
      }

      td {
        // padding-right: 5vw;
      }
    }
  }
}
</style>
