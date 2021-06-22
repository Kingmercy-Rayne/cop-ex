<template>
  <form class="user-details shadow--default" @submit.prevent>
    <div class="user-details__header">
      <UserAvatar ordinal="4" is-alt="true" />
      <div class="header-text">
        <span class="header-text__name h4">Julius Anderletch</span>
        <span class="header-text__email h6">AnderletchJls@example.com</span>
      </div>
    </div>
    <div class="user-details__row">
      <div class="input-item">
        <label class="input-title h6">Name</label>
        <input type="text" class="h6 input--expander" />
      </div>
      <div class="input-item">
        <label class="input-title h6">Title</label>
        <input type="text" class="h6 input--expander" />
      </div>
    </div>
    <div class="user-details__row">
      <StatusSelector />
    </div>
    <UserScopeSelector />
    <IconButton icon="la-check-circle" text="Update" />
  </form>
</template>

<script>
import UserAvatar from '@/components/UserAvatar.vue';
import IconButton from '@/components/IconButton.vue';
import StatusSelector from '@/components/Users/StatusSelector.vue';
import UserScopeSelector from '@/components/UserScopeSelector.vue';

export default {
  name: 'UserDetails',
  components: {
    UserAvatar,
    IconButton,
    StatusSelector,
    UserScopeSelector,
  },
};
</script>

<style lang="stylus" scoped>
.user-details {
  width: 70vw;
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 5vh 0;
  padding: 5vh 5vw;
  background: var(--bg-color--alt);
  border-radius: 8px;

  .user-details__header {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .header-text {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin-left: 1vw;

      .header-text__name {
        // margin: 0.2vh 0;
      }

      .header-text__email {
      }
    }
  }

  .user-details__row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 2vh 0;

    .input-item {
      display: flex;
      flex-direction: column;
      margin-top: 1vh;
      padding-right: 5vw;

      .input-title {
        // color: var(--text-color--primary);
        color: var(--text-color--alt);
      }

      input {
        width: 15vw;
        padding: 1vh 1em;
        border: none;
        outline: none;
        background: var(--bg-color--primary);
        border-radius: 8px;
        // color: var(--text-color--alt);
        color: var(--text-color--primary);
      }

      .input--expander {
        width: 20vw;
      }
    }
  }

  button {
    align-self: center;
    margin-top: 10vh;
  }
}
</style>
