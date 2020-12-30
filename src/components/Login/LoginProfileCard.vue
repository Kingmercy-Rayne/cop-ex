<template>
  <div class="login-profile-card">
    <img :src="require('@/assets/img/' + img + '.svg')" alt="" />
  </div>
</template>

<script>
export default {
  name: 'LoginProfileCard',
  props: ['img', 'profile'],
};
</script>

<style lang="stylus" scoped>
.login-profile-card {
  position: relative;
  width: 130px;
  height: 120px;
  margin: 0 1em;
  border-radius: 8px;
  background: var(--bg-color--alt);

  img {
    position: relative;
    height: 100%;
  }
}
</style>
