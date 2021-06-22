<template>
  <tr class="user-list-item">
    <td class="user-list-item__identity">
      <UserAvatar />
      <div class="identity__text">
        <span class="name label">Alexander Kawaki</span>
        <span class="email h6">kawakialex@example.com</span>
      </div>
    </td>
    <td class="user-list-item__status h6">Active</td>
    <td class="user-list-item__scope h6">Something</td>
  </tr>
</template>

<script>
import UserAvatar from '@/components/UserAvatar.vue';

export default {
  name: 'UserListItem',
  components: {
    UserAvatar,
  },
  props: ['scope'],
};
</script>

<style lang="stylus" scoped>
.user-list-item {
  color: var(--text-color--alt);

  td {
    padding: 2vh 0;
    padding-right: 8vw;
  }

  .user-list-item__identity {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .identity__text {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin-left: 1rem;

      .name {
      }

      .email {
      }
    }
  }

  .user-list-item__status {
  }

  .user-list-item__scope {
  }
}
</style>
