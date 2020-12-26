<template>
  <div class="profile-tab">
    <div class="profile__info">
      <h5 class="profile__name">Hi, Engr. Marcus</h5>
      <span class="profile__role label">COP Coordinator</span>
    </div>
    <img class="avatar" />
  </div>
</template>

<script>
export default {
  name: 'ProfileTab',
};
</script>

<style lang="stylus" scoped>
.profile-tab {
//   border: solid thin green;
  min-width: 10vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-color--alt);

  .avatar {
    border: solid thin green;
    vertical-align: middle;
    width: 3rem;
    height: 3rem;
    width: max(3rem, 40px);
    height: max(3rem, 40px);
    border-radius: 50%;
    // background: blue;
  }
}
</style>
