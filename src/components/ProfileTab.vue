<template>
  <div class="profile-tab">
    <div class="profile__info">
      <h5 class="profile__name">Hi, Engr. Marcus</h5>
      <span class="profile__role label">COP Coordinator</span>
    </div>
    <img class="avatar shadow--default" src="@/assets/img/cesar-rincon-XHVpWcr5grQ-unsplash.jpg" />
  </div>
</template>

<script>
export default {
  name: 'ProfileTab',
};
</script>

<style lang="stylus" scoped>
.profile-tab {
  min-width: max(10vw, 13vw);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2em 0.4em;
  color: var(--text-color--alt);

  .avatar {
    vertical-align: middle;
    width: 3rem;
    height: 3rem;
    // width: max(2rem, 35px);
    // height: max(3rem, 35px);
    width: clamp(2rem, 35px, 3rem);
    height: clamp(2rem, 35px, 3rem);
    padding: 0.1em;
    border-radius: 50%;
    background: var(--neutral-white);
  }
}
</style>
